import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Title = styled(Text)`
    fontWeight:bold;
    fontSize:18;
    marginBottom:12;
`

const convertDate = (date)=>{
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2,"0");
    const month = (dateObj.getMonth() + 1).toString().padStart(2,"0");
    const year = dateObj.getFullYear().toString();

    return `${day}-${month}-${year}`;
}

export default function DateTitle({date, prefix}) {
    return (
        <Title>
            {(prefix||"Date") +": "+ convertDate(date)}
        </Title>
    )
}
