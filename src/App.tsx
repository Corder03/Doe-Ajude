
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Import screens
import Index from './pages/Index';
import MapPage from './pages/MapPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Categories from './pages/Categories';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { isDarkMode, colors } = useTheme();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <NavigationContainer
        theme={{
          dark: isDarkMode,
          colors: {
            primary: colors.primary,
            background: colors.background,
            card: colors.card,
            text: colors.text,
            border: colors.border,
            notification: colors.primary,
          },
        }}
      >
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Index} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Map" 
            component={MapPage} 
            options={{ title: 'Locais de Doação' }} 
          />
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{ title: 'Criar Conta' }}
          />
          <Stack.Screen 
            name="Categories" 
            component={Categories} 
            options={{ title: 'Categorias' }} 
          />
          <Stack.Screen 
            name="About" 
            component={About} 
            options={{ title: 'Sobre' }} 
          />
          <Stack.Screen 
            name="NotFound" 
            component={NotFound} 
            options={{ title: 'Página Não Encontrada' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <PaperProvider>
        <AppContent />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
