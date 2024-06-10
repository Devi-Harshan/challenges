import CardData from "./composites/Card/card";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
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
