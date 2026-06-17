import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00A693" />
      <Login />
    </>
  );
}