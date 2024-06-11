import CardData from "./composites/Card/card";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <CardData />
      </ChakraProvider>
    </div>
  );
}

export default App;
