import React from "react";
import NavBar from "./components/NavBar";
import ScreenContainer from "./components/ScreenContainer";
import { FormContextProvider } from "./contexts/VoyageContext";
import VoyagePage from "./pages/VoyagePage";

function App() {
  return (
    <div>
      <NavBar />
      <ScreenContainer>
        <FormContextProvider>
          <VoyagePage />
        </FormContextProvider>
      </ScreenContainer>
    </div>
  );
}

export default App;
