import React, { createContext, useState } from "react";

interface VoyageFormData {
  departurePlace: string;
  departureTime: string;
  arrivalPlace: string;
  arrivalTime: string;
}

interface VoyageFormContextData {
  data: VoyageFormData;
  setData: React.Dispatch<React.SetStateAction<VoyageFormData>>;
}

export const VoyageFormContext = createContext<VoyageFormContextData>({
  data: {
    departurePlace: "",
    departureTime: "",
    arrivalPlace: "",
    arrivalTime: "",
  },
  setData: () => {},
});

export function FormContextProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<VoyageFormData>({
    departurePlace: "",
    departureTime: "",
    arrivalPlace: "",
    arrivalTime: "",
  });

  return (
    <VoyageFormContext.Provider value={{ data: formData, setData: setFormData }}>
      {children}
    </VoyageFormContext.Provider>
  );
}
