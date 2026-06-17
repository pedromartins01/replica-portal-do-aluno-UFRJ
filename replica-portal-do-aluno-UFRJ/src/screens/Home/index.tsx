import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { estilos } from "./style";
import { MenuCard } from "../../components/MenuCard";
import { menuItems } from "../../data";

export const Home = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.tituloCabecalho}>Portal Aluno UFRJ</Text>
        <TouchableOpacity>
          <Icon name="settings" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={estilos.cardPerfil}>
        <View style={estilos.molduraFoto}>
          <Image source={require("../../assets/imagens/messin.jpg")} style={estilos.foto} />
          <View style={estilos.botaoCamera}>
            <Icon name="camera" size={16} color="#fff" />
          </View>
        </View>
        <View style={estilos.infoPerfil}>
          <Text style={estilos.nomePerfil}>ESPARADRAPO CLEMENTE{"\n"}DE SÁ</Text>
          <Text style={estilos.matricula}>40228922</Text>
          <Text style={estilos.curso}>Tecnologia da Informação - M</Text>
        </View>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilos.listaConteudo}
        renderItem={({ item }) => (
          <MenuCard titulo={item.titulo} imagem={item.imagem} />
        )}
      />
    </View>
  );
};