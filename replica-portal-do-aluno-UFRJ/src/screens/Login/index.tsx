import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { estilos } from "./style";
import { InputField } from "../../components/InputField";
import { ButtonComponent } from "../../components/ButtonComponent";
import Icon from "@expo/vector-icons/Ionicons";
import LogoUFRJ from "../../assets/imagens/logo-ufrj.png";

export const Login = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.topo}>
        <Image source={LogoUFRJ} style={estilos.logo} tintColor="#fff" />
      </View>
      <View style={estilos.formulario}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={estilos.espacamento}>
            <InputField rotulo="Identificação" placeholder="CPF ou Passaporte (estrangeiros)" />
          </View>
          <View style={estilos.espacamento}>
            <InputField placeholder="Senha" senhaOculta={true} mostrarOlho={true} />
          </View>
          <View style={estilos.linhaLembrar}>
            <Text style={estilos.textoLembrar}>Lembrar identificação</Text>
            <Switch
              value={true}
              trackColor={{ false: '#555', true: '#00A693' }}
              thumbColor="#fff"
            />
          </View>
          <ButtonComponent texto="Entrar" aoTocar={() => {}} />
          <TouchableOpacity style={estilos.linkSenha}>
            <Text style={estilos.textoLinkSenha}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <View style={estilos.botoesRodape}>
            <TouchableOpacity style={estilos.botaoRodape}>
              <Icon name="mail-outline" size={21} color="#fff" />
              <Text style={estilos.textoBotaoRodape}>Contate-nos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoRodape}>
              <Icon name="logo-instagram" size={21} color="#fff" />
              <Text style={estilos.textoBotaoRodape}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}