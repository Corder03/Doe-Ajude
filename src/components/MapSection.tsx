
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import Geolocation from "@react-native-community/geolocation";
import { MapPin } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const MapSection = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const { isDarkMode, colors } = useTheme();

  // Dummy data for demonstration purposes
  const locations = [
    { 
      id: 1, 
      name: "Centro Comunitário Vila Nova", 
      address: "Rua das Flores, 123", 
      distance: "1.2 km",
      latitude: -23.550520,
      longitude: -46.633308 // São Paulo coordinates
    },
    { 
      id: 2, 
      name: "Lar dos Idosos Esperança", 
      address: "Av. Principal, 456", 
      distance: "2.5 km",
      latitude: -23.555020,
      longitude: -46.639308
    },
    { 
      id: 3, 
      name: "Abrigo São Francisco", 
      address: "Rua das Oliveiras, 789", 
      distance: "3.8 km",
      latitude: -23.557020,
      longitude: -46.631308
    }
  ];
  
  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => console.log("Error getting location", error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  // Calculate real distances between user and locations
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d.toFixed(1) + " km";
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: colors.text }]}>Encontre Locais para Doar</Text>
        <Text style={[styles.subHeader, { color: colors.subtext }]}>
          Descubra pontos de doação próximos a você
        </Text>
      </View>
      
      <View style={[styles.mapContainer, { backgroundColor: colors.card }]}>
        {userLocation ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            {/* User location marker */}
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
              }}
              title="Sua localização"
              pinColor="blue"
            />
            
            {/* Location markers */}
            {locations.map((location) => (
              <Marker
                key={location.id}
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude
                }}
                title={location.name}
                description={location.address}
                onPress={() => setActiveLocation(location.id)}
                pinColor={activeLocation === location.id ? "#9b87f5" : "#7E69AB"}
              />
            ))}
          </MapView>
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={[styles.loadingText, { color: colors.text }]}>Carregando mapa...</Text>
          </View>
        )}
        
        <View style={[styles.cardSection, { backgroundColor: colors.background }]}>
          <View style={styles.cardHeader}>
            <Text style={[styles.cardHeaderText, { color: colors.text }]}>Locais próximos a você</Text>
            <Button mode="outlined" compact onPress={() => {}}>Ver todos</Button>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {locations.map((location) => (
              <TouchableOpacity 
                key={location.id}
                onPress={() => setActiveLocation(location.id)}
              >
                <Card 
                  style={[
                    styles.card, 
                    { 
                      backgroundColor: colors.card,
                      borderColor: activeLocation === location.id ? "#9b87f5" : "transparent",
                      borderWidth: activeLocation === location.id ? 2 : 0,
                    }
                  ]}
                >
                  <Card.Content>
                    <Title style={{ color: colors.text }}>{location.name}</Title>
                    <View style={styles.addressRow}>
                      <MapPin size={14} color={colors.subtext} />
                      <Paragraph style={{ color: colors.subtext, marginLeft: 5 }}>{location.address}</Paragraph>
                    </View>
                    <View style={{ marginTop: 8 }}>
                      <Text style={{ color: "#9b87f5", fontSize: 12, fontWeight: "bold" }}>
                        {userLocation 
                          ? calculateDistance(
                              userLocation.latitude, 
                              userLocation.longitude,
                              location.latitude,
                              location.longitude
                            )
                          : location.distance} de distância
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginTop: 4,
  },
  mapContainer: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  map: {
    height: 300,
  },
  loadingContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
  },
  cardSection: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    width: 250,
    marginRight: 12,
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
});

export default MapSection;
