import React from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import styled from "styled-components/native";

const LinearBackground = styled(LinearGradient).attrs({
  colors: ["#e96443", "#904e95"],
  start: { x: 0.3, y: 0.6 },
  end: { x: 0.7, y: 1 },
})`
  flex: 1;
  paddingTop: ${Constants.statusBarHeight};
`;

const Image = styled(ImageBackground).attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 110%;
  position: absolute;
`;

export default function Container({ children, justifyContent }) {
  return (
    <LinearBackground style={{justifyContent:justifyContent?justifyContent:'flex-start'}}>
      <Image source={require("../assets/bg.png")} />
      {children}
    </LinearBackground>
  );
}
