import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Tag = styled(TouchableOpacity)`
    backgroundColor: ${props=>props.color || "#e96443"};
    borderRadius: 15;
    color:white;
    padding:8px;
    marginRight:4px;
`;
