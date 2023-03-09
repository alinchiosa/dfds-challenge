import React from "react";
import NavBar from "./components/NavBar";
import ScreenContainer from "./components/ScreenContainer";
import VoyageForm from "./components/VoyageForm";
import { FormContextProvider } from "./contexts/VoyageContext";

function App() {
  return (
    <div>
      <NavBar />
      <ScreenContainer>
        <FormContextProvider>
          <VoyageForm />
        </FormContextProvider>
      </ScreenContainer>
    </div>
  );
}

export default App;
