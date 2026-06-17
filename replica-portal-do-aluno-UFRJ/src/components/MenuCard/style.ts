import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const estilos = StyleSheet.create({
  card: {
    width: (width / 2) - 32,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  icone: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  titulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});