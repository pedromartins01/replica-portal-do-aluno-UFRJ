import { Text, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { estilos } from "./style";

interface CampoTextoProps {
  placeholder: string;
  senhaOculta?: boolean;
  rotulo?: string;
  mostrarOlho?: boolean;
}

export const InputField = ({ placeholder, senhaOculta = false, rotulo, mostrarOlho = false }: CampoTextoProps) => {
  return (
    <View style={estilos.container}>
      <View style={estilos.caixaInput}>
        <TextInput
          style={estilos.input}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          secureTextEntry={senhaOculta}
        />
        {mostrarOlho && (
          <Icon name="eye-outline" size={22} color="#fff" />
        )}
      </View>
      {rotulo && (
        <Text style={estilos.rotulo}>{rotulo}</Text>
      )}
    </View>
  );
}