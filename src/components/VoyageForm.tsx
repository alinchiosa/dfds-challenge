import styled from "@emotion/styled";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Colors from "../constants/colors";
import { VoyageFormContext } from "../contexts/VoyageContext";
import CustomInput from "./CustomInput";

type FormInputs = {
  departurePlace: string;
  departureTime: string;
  arrivalPlace: string;
  arrivalTime: string;
};

const VoyageForm: React.FC = () => {
  const { setData } = useContext(VoyageFormContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    setData({
      departurePlace: data.departurePlace,
      departureTime: data.departureTime,
      arrivalPlace: data.arrivalPlace,
      arrivalTime: data.arrivalTime,
    });
  };

  const validateArrivalTime = (value: string, allValues: FormInputs) => {
    if (new Date(value) < new Date(allValues.departureTime)) {
      return "Arrival time cannot be before departure time";
    }
    return true;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="departurePlace"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomInput label="Departure place" placeholder="Input departure place" {...field} />
        )}
      />
      {errors.departurePlace && <Error>The departure place field is required</Error>}

      <Controller
        name="arrivalPlace"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomInput label="Arrival place" placeholder="Input arrival place" {...field} />
        )}
      />
      {errors.arrivalPlace && <Error>The arrival place field is required</Error>}

      <Controller
        name="departureTime"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomInput label="Departure time" type="datetime-local" {...field} />
        )}
      />
      {errors.departureTime && <Error>The departure time field is required</Error>}

      <Controller
        name="arrivalTime"
        control={control}
        rules={{ required: true, validate: { validateArrivalTime } }}
        render={({ field }) => (
          <CustomInput label="Arrival time" type="datetime-local" {...field} />
        )}
      />
      {errors.arrivalTime && (
        <Error>
          {errors.arrivalTime.message
            ? errors.arrivalTime.message
            : "The arrival time field is required"}
        </Error>
      )}

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

const SubmitButton = styled.button`
  background-color: ${Colors.DarkBlue};
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${Colors.LightBlue};
  }
  &:disabled {
    background-color: ${Colors.InactiveGrey};
    cursor: not-allowed;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 500l;
  width: 100%;
`;

const Error = styled.span`
  color: ${Colors.Red};
  font-size: 16px;
  margin-bottom: 10px;
`;

export default VoyageForm;
