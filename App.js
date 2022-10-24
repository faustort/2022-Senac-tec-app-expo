import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";

/**
 * Cria o componente Home Screen
 */
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo Feliz</Text>
      <Button
        title="Ir para Sobre"
        // Realiza a ação de enviar para tela Sobre
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
}
/**
 *  Criar o componente Sobre Screen
 */
function SobreScreen() {
  return (
    <View>
      <Text>Olá eu sou a página sobre</Text>
    </View>
  );
}

// Inicia o Navigator Stack
const Stack = createNativeStackNavigator();

// Função principal do app
export default function App() {
  return (
    // Inicia o container de navegação
    <NavigationContainer>
      {/*  usa o container de navegação do Stack */}
      <Stack.Navigator>
        {/* Começa a distribuir as telas usando o Stack.Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Cria os styles para serem utilizados
// posteriormente utilizaremos Tailwind
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
