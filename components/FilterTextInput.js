import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const FilterTextInput = styled(TextInput)`
borderRadius:10;
box-shadow: 20px 10px 10px black;
elevation: 10;
minHeight:48;
backgroundColor:#f0f0f0;
width: ${props => props.width || 100};
paddingLeft:10;
`;