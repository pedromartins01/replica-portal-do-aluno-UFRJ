import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  rotulo: {
    position: 'absolute',
    top: -10,
    left: 16,
    backgroundColor: '#111',
    paddingHorizontal: 4,
    color: '#aaa',
    fontSize: 12,
    zIndex: 1,
  },
  caixaInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 14,
  },
});