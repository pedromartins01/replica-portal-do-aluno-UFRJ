import { Text, TouchableOpacity } from "react-native";
import { estilos } from "./style";

interface BotaoProps {
  texto: string;
  aoTocar: () => void;
}

export const ButtonComponent = ({ texto, aoTocar }: BotaoProps) => {
  return (
    <TouchableOpacity style={estilos.botao} onPress={aoTocar}>
      <Text style={estilos.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}