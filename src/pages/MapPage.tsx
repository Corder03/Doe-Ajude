
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Tabs, Button, Card, Searchbar } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MapPin, Search } from "lucide-react";
import Geolocation from "@react-native-community/geolocation";
import { useTheme } from "@/context/ThemeContext";

interface Location {
  id: number;
  name: string;
  address: string;
  distance: string;
  needs: string[];
  latitude: number;
  longitude: number;
}

const MapPage = () => {
  const [activeTab, setActiveTab] = useState<"map" | "list">("map");
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const { colors } = useTheme();

  // Dummy data for demonstration purposes
  const locations: Location[] = [
    { 
      id: 1, 
      name: "Centro Comunitário Vila Nova", 
      address: "Rua das Flores, 123", 
      distance: "1.2 km",
      needs: ["Roupas", "Calçados", "Cobertores"],
      latitude: -23.550520,
      longitude: -46.633308 // São Paulo coordinates
    },
    { 
      id: 2, 
      name: "Lar dos Idosos Esperança", 
      address: "Av. Principal, 456", 
      distance: "2.5 km",
      needs: ["Produtos de Higiene", "Fraldas"],
      latitude: -23.555020,
      longitude: -46.639308
    },
    { 
      id: 3, 
      name: "Abrigo São Francisco", 
      address: "Rua das Oliveiras, 789", 
      distance: "3.8 km",
      needs: ["Alimentos", "Roupas", "Brinquedos"],
      latitude: -23.557020,
      longitude: -46.631308
    },
    { 
      id: 4, 
      name: "Creche Arco-Íris", 
      address: "Rua dos Pássaros, 321", 
      distance: "4.1 km",
      needs: ["Brinquedos", "Material Escolar"],
      latitude: -23.560020,
      longitude: -46.635308
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
  
  // Filter locations based on search query
  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const renderLocationItem = ({ item }: { item: Location }) => (
    <TouchableOpacity
      onPress={() => setActiveLocation(item.id)}
      style={{ marginBottom: 12 }}
    >
      <Card
        style={[
          styles.locationCard,
          {
            backgroundColor: colors.card,
            borderColor: activeLocation === item.id ? colors.primary : colors.border,
            borderWidth: activeLocation === item.id ? 2 : 1,
          },
        ]}
      >
        <Card.Content>
          <Text style={[styles.locationName, { color: colors.text }]}>{item.name}</Text>
          <View style={styles.addressContainer}>
            <MapPin size={16} color={colors.subtext} />
            <Text style={[styles.addressText, { color: colors.subtext }]}>{item.address}</Text>
            <View style={[styles.distanceBadge, { backgroundColor: colors.accent }]}>
              <Text style={{ color: colors.primary, fontSize: 12 }}>
                {userLocation
                  ? calculateDistance(
                      userLocation.latitude,
                      userLocation.longitude,
                      item.latitude,
                      item.longitude
                    )
                  : item.distance}
              </Text>
            </View>
          </View>
          
          <Text style={[styles.needsLabel, { color: colors.text }]}>NECESSIDADES:</Text>
          <View style={styles.needsContainer}>
            {item.needs.map((need, index) => (
              <View 
                key={index} 
                style={[styles.needBadge, { backgroundColor: colors.primary + '40' }]}
              >
                <Text style={{ color: colors.primary, fontSize: 12 }}>{need}</Text>
              </View>
            ))}
          </View>
        </Card.Content>
        
        <Card.Actions>
          <Button mode="outlined">Ver Detalhes</Button>
          <Button 
            mode="contained"
            style={{ backgroundColor: colors.primary }}
          >
            Como Chegar
          </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Locais de Doação</Text>
      <Text style={[styles.subtitle, { color: colors.subtext }]}>
        Encontre pontos de doação próximos a você
      </Text>
      
      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Searchbar
          placeholder="Buscar por local ou endereço"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ backgroundColor: colors.background }}
          iconColor={colors.primary}
          inputStyle={{ color: colors.text }}
        />
        
        <Button 
          mode="contained" 
          onPress={() => {}} 
          style={[styles.searchButton, { backgroundColor: colors.primary }]}
        >
          Buscar
        </Button>
      </View>
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "map" && [styles.activeTab, { borderColor: colors.primary }],
          ]}
          onPress={() => setActiveTab("map")}
        >
          <Text style={[
            styles.tabText,
            { color: activeTab === "map" ? colors.primary : colors.subtext }
          ]}>
            Mapa
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "list" && [styles.activeTab, { borderColor: colors.primary }],
          ]}
          onPress={() => setActiveTab("list")}
        >
          <Text style={[
            styles.tabText,
            { color: activeTab === "list" ? colors.primary : colors.subtext }
          ]}>
            Lista
          </Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === "map" ? (
        <View style={styles.mapTabContent}>
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
                {filteredLocations.map((location) => (
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
                <Text style={[styles.loadingText, { color: colors.text }]}>
                  Carregando mapa...
                </Text>
              </View>
            )}
          </View>
          
          <View style={styles.listContainer}>
            <Text style={[styles.sidebarTitle, { color: colors.text }]}>Locais Próximos</Text>
            <FlatList
              data={filteredLocations}
              renderItem={renderLocationItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      ) : (
        <FlatList
          data={filteredLocations}
          renderItem={renderLocationItem}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.listTabContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  searchContainer: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  searchButton: {
    marginLeft: 8,
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontWeight: "500",
  },
  mapTabContent: {
    flex: 1,
    flexDirection: "column",
  },
  mapContainer: {
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  listTabContent: {
    paddingBottom: 16,
  },
  locationCard: {
    borderRadius: 8,
    marginBottom: 8,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  addressText: {
    marginLeft: 4,
    flex: 1,
  },
  distanceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  needsLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },
  needsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  needBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 4,
    marginBottom: 4,
  },
});

export default MapPage;
