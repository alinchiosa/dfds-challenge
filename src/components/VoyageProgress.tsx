import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as PinIcon } from "../assets/pin_icon.svg";
import Colors from "../constants/colors";

interface VoyageProps {
  portOfLoading: string;
  portOfDischarge: string;
  departureTime: string | Date;
  arrivalTime: string | Date;
}

const pinSize = 90;
const dotBoxSize = 30;
const dotCount = 14;
const singleDotProgress = 100 / (dotCount - 1);

const Voyage: React.FC<VoyageProps> = ({
  portOfLoading,
  portOfDischarge,
  departureTime,
  arrivalTime,
}) => {
  const now = new Date();
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);
  const percentComplete =
    now >= arrival
      ? 100
      : now <= departure
      ? 0
      : ((now.getTime() - departure.getTime()) / (arrival.getTime() - departure.getTime())) * 100;

  const dots = [...Array<undefined>(dotCount)];

  return (
    <ComponentContainer>
      <PinLane dotSize={dotBoxSize}>
        <PinContainer pinSize={pinSize} progress={percentComplete}>
          <PinIcon height={pinSize} width={pinSize} />
        </PinContainer>
      </PinLane>

      <DotsContainer>
        {dots.map((_, i) => {
          const isEdge = i === 0 || i === dots.length - 1;
          const dotSize = isEdge ? dotBoxSize : dotBoxSize / 3;

          const neededProgress = singleDotProgress * i;
          const isActive = percentComplete >= neededProgress;

          return (
            <DotBox dotBoxSize={dotBoxSize} key={i}>
              <Dot size={dotSize} active={isActive} />
            </DotBox>
          );
        })}
      </DotsContainer>

      <PortsContainer>
        <PortName position="left">{portOfLoading}</PortName>
        <PortName position="right">{portOfDischarge}</PortName>
      </PortsContainer>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding: 24px 100px;
`;

type PinLaneProps = {
  dotSize: number;
};

const PinLane = styled.div<PinLaneProps>`
  width: ${({ dotSize }) => `calc(100% - ${dotSize}px)`};
  margin-left: ${({ dotSize }) => dotSize / 2}px;
  margin-bottom: 16px;
`;

type PinContainerProps = {
  progress: number;
  pinSize: number;
};

const PinContainer = styled.div<PinContainerProps>`
  width: pinSize;
  margin-left: ${({ pinSize, progress }) => `calc(${progress}% - ${pinSize / 2}px)`};
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

type DotBoxType = {
  dotBoxSize: number;
};

const DotBox = styled.div<DotBoxType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ dotBoxSize }) => dotBoxSize}px;
  height: ${({ dotBoxSize }) => dotBoxSize}px;
`;

type DotProps = {
  size: number;
  active: boolean;
};

const Dot = styled.div<DotProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? Colors.DarkBlue : Colors.LightBlue)};
`;

const PortsContainer = styled.div`
  padding: 24px 100px;
  position: relative;
`;

type PortNameProps = {
  position: "left" | "right";
};

const PortName = styled.span<PortNameProps>`
  font-size: 2rem;
  color: ${Colors.GreyText};
  position: absolute;
  ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}
  transform: ${({ position }) => (position === "left" ? "translateX(-45%)" : "translateX(45%)")};
`;

export default Voyage;
