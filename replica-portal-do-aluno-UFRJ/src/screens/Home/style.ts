import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  cabecalho: {
    backgroundColor: '#00A693',
    paddingTop: 48,
    paddingBottom: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloCabecalho: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
  listaConteudo: {
    paddingHorizontal: 8,
    paddingBottom: 60,
  },
  cardPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 36,
    paddingBottom: 48,
    gap: 28,
    backgroundColor: '#111',
    zIndex: 10,
  },
  molduraFoto: {
    position: 'relative',
    marginTop: 12,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#00A693',
  },
  botaoCamera: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#00A693',
    borderRadius: 12,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoPerfil: {
    flex: 1,
    gap: 18,
    marginTop: -30,
    marginLeft: 1,
  },
  nomePerfil: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  matricula: {
    color: '#fff',
    fontSize: 15,
  },
  curso: {
    color: '#00A693',
    fontSize: 15,
    fontWeight: '500',
  },
});