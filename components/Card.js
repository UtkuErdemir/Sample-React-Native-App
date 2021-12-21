import { View } from "react-native";
import styled from "styled-components/native";

export const Card = styled(View)`
borderRadius: 10;
overflow:hidden;
flex:1;
box-shadow: 20px 10px 10px black;
elevation: 10;
backgroundColor:#f0f0f0;
maxWidth: ${props => props.width || 100};
height: ${props => props.height || 100};
`;
