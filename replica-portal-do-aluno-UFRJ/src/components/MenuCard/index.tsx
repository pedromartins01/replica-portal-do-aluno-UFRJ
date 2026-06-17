import { Image, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { estilos } from "./style";

interface CardMenuProps {
  titulo: string;
  imagem: ImageSourcePropType;
}

export const MenuCard = ({ titulo, imagem }: CardMenuProps) => {
  return (
    <TouchableOpacity style={estilos.card}>
      <Image source={imagem} style={estilos.icone} />
      <Text style={estilos.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}