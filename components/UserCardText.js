import { Text } from 'react-native'
import styled from 'styled-components/native'

export const UserCardText = styled(Text)`
    padding:4px; 
    fontSize:10;
    height:32; 
    textAlign:center;
    fontWeight: ${props=>props.bold ? "bold" : "normal"}
`;