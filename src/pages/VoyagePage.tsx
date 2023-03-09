import React, { useContext } from "react";
import VoyageForm from "../components/VoyageForm";
import VoyageProgress from "../components/VoyageProgress";
import { VoyageFormContext } from "../contexts/VoyageContext";

const VoyagePage: React.FC = () => {
  const { data } = useContext(VoyageFormContext);

  return (
    <>
      <VoyageProgress
        portOfLoading={data.departurePlace}
        portOfDischarge={data.arrivalPlace}
        arrivalTime={data.arrivalTime}
        departureTime={data.departureTime}
      />

      <VoyageForm />
    </>
  );
};

export default VoyagePage;
