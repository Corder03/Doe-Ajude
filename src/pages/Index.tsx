
import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import { Box, HandCoins, Hand, Heart } from "lucide-react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/context/ThemeContext";
import MapSection from "@/components/MapSection";

const Index = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const categories = [
    {
      title: "Roupas e Calçados",
      description: "Doe peças em bom estado para quem precisa.",
      icon: "hanger",
      link: "clothing"
    },
    {
      title: "Produtos de Higiene",
      description: "Itens essenciais para higiene pessoal e limpeza.",
      icon: "heart-outline",
      link: "hygiene"
    },
    {
      title: "Alimentos",
      description: "Doe alimentos não-perecíveis para quem precisa.",
      icon: "food-apple",
      link: "food"
    },
    {
      title: "Voluntariado",
      description: "Ofereça seu tempo e habilidades como voluntário.",
      icon: "hand-heart",
      link: "volunteer"
    }
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Text style={[styles.heroTitle, { color: colors.text }]}>
          Doe & Ajude
        </Text>
        <Text style={[styles.heroSubtitle, { color: colors.subtext }]}>
          Faça a diferença na sua comunidade através de doações
        </Text>
        <View style={styles.heroButtonsContainer}>
          <Button
            mode="contained"
            style={[styles.heroButton, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate("Map")}
          >
            Encontrar Locais
          </Button>
          <Button
            mode="outlined"
            style={styles.heroButton}
            onPress={() => navigation.navigate("Login")}
          >
            Fazer Login
          </Button>
        </View>
        <Image
          source={require('@/assets/hero-image.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      
      {/* Categories Section */}
      <View style={[styles.sectionContainer, { backgroundColor: colors.background }]}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Como você pode ajudar?</Text>
          <Text style={[styles.sectionSubtitle, { color: colors.subtext }]}>
            Escolha uma categoria e descubra as necessidades atuais
          </Text>
        </View>
        
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.categoryCard, { backgroundColor: colors.card }]}
              onPress={() => navigation.navigate("Categories", { category: category.link })}
            >
              <View style={[styles.categoryIconContainer, { backgroundColor: colors.accent }]}>
                <Text style={[styles.categoryIcon, { color: colors.primary }]}>
                  {category.icon}
                </Text>
              </View>
              <Text style={[styles.categoryTitle, { color: colors.text }]}>{category.title}</Text>
              <Text style={[styles.categoryDescription, { color: colors.subtext }]}>
                {category.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.viewAllButtonContainer}>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("Categories")}
          >
            Ver Todas Categorias
          </Button>
        </View>
      </View>
      
      {/* Map Section */}
      <MapSection />
      
      {/* How It Works Section */}
      <View style={[styles.sectionContainer, { backgroundColor: colors.background }]}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Como Funciona</Text>
          <Text style={[styles.sectionSubtitle, { color: colors.subtext }]}>
            Três passos simples para começar a fazer a diferença
          </Text>
        </View>
        
        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.text }]}>Encontre um local</Text>
            <Text style={[styles.stepDescription, { color: colors.subtext }]}>
              Use nosso mapa para encontrar pontos de doação próximos a você
            </Text>
          </View>
          
          <View style={styles.step}>
            <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.text }]}>Prepare sua doação</Text>
            <Text style={[styles.stepDescription, { color: colors.subtext }]}>
              Organize os itens conforme as necessidades atuais da instituição
            </Text>
          </View>
          
          <View style={styles.step}>
            <View style={[styles.stepNumber, { backgroundColor: colors.primary }]}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={[styles.stepTitle, { color: colors.text }]}>Faça a entrega</Text>
            <Text style={[styles.stepDescription, { color: colors.subtext }]}>
              Leve sua doação ao local escolhido e acompanhe seu impacto
            </Text>
          </View>
        </View>
      </View>
      
      {/* Call to Action */}
      <View style={[styles.ctaContainer, { backgroundColor: colors.accent }]}>
        <Text style={[styles.ctaTitle, { color: colors.text }]}>
          Pronto para fazer a diferença?
        </Text>
        <Text style={[styles.ctaDescription, { color: colors.subtext }]}>
          Junte-se a milhares de pessoas que estão transformando suas comunidades através de doações.
        </Text>
        <View style={styles.ctaButtonsContainer}>
          <Button
            mode="contained"
            style={[styles.ctaButton, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate("Map")}
          >
            Encontrar Locais
          </Button>
          <Button
            mode="outlined"
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Signup")}
          >
            Criar Uma Conta
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  heroContainer: {
    padding: 24,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  heroButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  heroButton: {
    marginHorizontal: 8,
  },
  heroImage: {
    width: "100%",
    height: 200,
  },
  sectionContainer: {
    padding: 24,
  },
  sectionHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 24,
    fontWeight: "bold",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryDescription: {
    fontSize: 14,
  },
  viewAllButtonContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  stepsContainer: {
    marginTop: 16,
  },
  step: {
    alignItems: "center",
    marginBottom: 24,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  ctaContainer: {
    padding: 24,
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 16,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  ctaDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  ctaButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  ctaButton: {
    margin: 8,
  },
});

export default Index;
