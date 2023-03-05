import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Logo } from "../assets/DFDS_logo.svg";
import Colors from "../constants/colors";

const NavBar: React.FC = () => {
  const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: ${Colors.White};
    box-shadow: 0 2px 5px ${Colors.LowOpacityBlack};
  `;

  return (
    <NavbarContainer>
      <Logo height={30} width={100} />
    </NavbarContainer>
  );
};

export default NavBar;
