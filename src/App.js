import React, { useContext } from "react";
import { MainContext } from "./contexts/MainContext.js";
import SimpleRecorder from "./SimpleRecorder.js";
import WaveSurferComponent from "./WaveSurferComponent.js";
import Box from "@material-ui/core/Box";
import "./styles.css";
import styled from "styled-components";

const StyledBox = styled(Box)`
  #waveform {
    margin: 24px auto;
  }
`;

export default function App() {
  const { audioURL } = useContext(MainContext);

  return (
    <div className="App">
      <SimpleRecorder />
      <StyledBox>
        <WaveSurferComponent audioURL={audioURL} />
      </StyledBox>
    </div>
  );
}
