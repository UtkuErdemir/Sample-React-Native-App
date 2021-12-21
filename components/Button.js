import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Button = styled(TouchableOpacity)`
    backgroundColor: ${props=>props.color || "#904e95"};
    borderRadius: 15;
    padding:${props=>props.padding || "16"}px;
    ${props=>props.width ? `width:${props.width}`:""}
    ${props=>props.isCentered ? `alignSelf:center`:""}
    ${props=>props.margin ? `margin:${props.margin}px`:""}
`;
