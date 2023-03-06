import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

type ScreenContainerProps = HTMLAttributes<HTMLDivElement>;

const ScreenContainer: React.FC<ScreenContainerProps> = (props) => {
  return <Container {...props} />;
};

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column; 
    align-items: center:
    box-sizing: border-box;

    @media (max-width: 767px) {
      padding: 0.5rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      max-width: 600px;
    }
  `;

export default ScreenContainer;
