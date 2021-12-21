import { useNavigation } from '@react-navigation/native';
import { phonecall, email as sendEmail } from 'react-native-communications';
import Icon from 'react-native-vector-icons/AntDesign';
import { Card } from './Card';
import { UserCardText } from './UserCardText';
import { Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { Button } from './Button';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export function UserCard({ user }) {
    const { id, firstName, lastName, picture, age, location: { city, country }, phone, email } = user;
    const navigation = useNavigation();
    return (
      <Card margin={4} width={windowWidth * 0.31} height={windowHeight * 0.32}>
        <Image style={{ width: "100%", height: "35%", resizeMode: 'stretch' }} source={{ uri: picture }} />
        <View style={{ width: "100%" }}>
          <UserCardText bold>
            {firstName} {lastName}, {age}
          </UserCardText>
          <UserCardText>
            {city}, {country}
          </UserCardText>
          <View style={{ width: "85%", alignSelf: 'center', margin: 4 }}>
            <Button padding={6} color={"#43c8e9"} title="Posts" onPress={() => navigation.navigate("Posts", { userId: id })}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Posts</Text>
            </Button>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button padding={12} color={"#e96443"} onPress={() => phonecall(phone, true)}>
              <Icon name="phone" color="white"></Icon>
            </Button>
            <Button padding={12} color={"#e96443"} onPress={() => sendEmail([email], "", "", "", "")}>
              <Icon name="mail" color="white"></Icon>
            </Button>
          </View>
        </View>
      </Card>
    );
  }