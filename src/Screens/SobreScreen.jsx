import { Button, Text, View } from "react-native";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sou o Sobre 🚒</Text>
      <Button
        title="Vá para o Céu "
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
