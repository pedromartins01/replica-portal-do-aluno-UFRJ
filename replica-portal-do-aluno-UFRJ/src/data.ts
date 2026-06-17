import { ImageSourcePropType } from "react-native";

export type MenuItem = {
  id: number;
  titulo: string;
  imagem: ImageSourcePropType;
};

export const menuItems: MenuItem[] = [
  { id: 1, titulo: 'Documentos',    imagem: require('./assets/imagens/doct.png') },
  { id: 2, titulo: 'Requerimentos', imagem: require('./assets/imagens/reqt.png') },
  { id: 3, titulo: 'Inscrição',     imagem: require('./assets/imagens/lapist.png') },
  { id: 4, titulo: 'Carteirinha',   imagem: require('./assets/imagens/cart.png') },
  { id: 5, titulo: 'Salas de Aula', imagem: require('./assets/imagens/localt.png') },
  { id: 6, titulo: 'Fale Conosco',  imagem: require('./assets/imagens/telefonet.png') },
];