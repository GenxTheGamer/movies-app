import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

function Logo() {
  return (
    <>
      <Wrapper href="https://sambarros.com">
        <img src={logo} width="50" height="50" alt="sambarros.com" />
      </Wrapper>
    </>
  );
}

export default Logo;
