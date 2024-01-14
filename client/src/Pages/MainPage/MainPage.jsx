import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "styled-components";

const MainPageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SimplerSignIn = styled.h1`
  font-size: 2em;
`;

const SaferPasswords = styled.span`
  font-weight: bold;
  font-size: 3em;
  margin-left: 10px; /* Increased margin for better visibility */
`;

export default function MainPage() {
  return (
    <>
      <Navbar />
      <MainPageContainer>
        <SimplerSignIn>Simpler sign-in,</SimplerSignIn>{" "}
        <SaferPasswords>safer passwords</SaferPasswords>
      </MainPageContainer>
    </>
  );
}
