import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  topo: {
    backgroundColor: '#00A693',
    height: height * 0.42,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
  },
  formulario: {
    backgroundColor: '#111',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -40,
    padding: 24,
    paddingTop: 40,
    overflow: 'visible',
  },
  espacamento: {
    marginBottom: -3,
    paddingTop: 12,
  },
  linhaLembrar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  textoLembrar: {
    color: '#fff',
    fontSize: 15,
  },
  linkSenha: {
    alignItems: 'center',
    marginTop: 28,
  },
  textoLinkSenha: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  botoesRodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    gap: 12,
    paddingBottom: 30,
  },
  botaoRodape: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  textoBotaoRodape: {
    color: '#fff',
    fontSize: 14,
  },
});