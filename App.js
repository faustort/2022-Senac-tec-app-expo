import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  
  const irParaSobre = () => {
    return navigation.navigate("Sobre");
  };

  return (
    <View style={styles.container}>
      <Text>Olá Mundo Feliz</Text>
      <Button 
        title="Ir para Sobre" 
        onPress={()=>navigation.navigate("Sobre")} 
      />
    </View>
  );
}

function SobreScreen() {
  return (
    <View>
      <Text>Olá eu sou a página sobre</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
