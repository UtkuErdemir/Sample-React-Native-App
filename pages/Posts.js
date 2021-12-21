import React, { useEffect, useState } from "react";
import { Text, View, Image, ActivityIndicator, Alert } from "react-native";
import { getPosts } from "../utils/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import Container from "../components/Container";
import styled from "styled-components/native";
import DateTitle from "../components/DateTitle";
import { PostContent } from "../components/PostContent";
import { Button } from "../components/Button";
import { Tag } from "../components/Tag";
import Header from "../components/Header";
import {PostCard} from "../components/PostCard";

const ContentView = styled(View)`
  paddingRight: 10%;
  paddingLeft: 10%;
  justifyContent: center;
`;

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const route = useRoute();
  const { userId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    getPosts(userId).then((result) => {
      if(result.error){
        Alert.alert('Error', 'Something went wrong. Please restart app.');
        return;
      }
      setPosts(result.data.data)
    });
  }, []);

  const post = posts[index];
  const { publishDate, text, image, tags } = post || {};

  return post ? (
    <Container justifyContent="center">
      <Header onPress={() => navigation.goBack()} title="Posts"></Header>
      <ContentView>
        <PostCard>
          <DateTitle date={publishDate}></DateTitle>
          <Image
            style={{ width: "100%", height: "30%", resizeMode: "stretch" }}
            source={{ uri: image }}
          />
          <PostContent>{text}</PostContent>
          <View style={{ flexDirection: "row", marginTop: "5%" }}>
            {tags.map((v) => (
              <Tag>
                <Text style={{ color: "white" }}>#{v}</Text>
              </Tag>
            ))}
          </View>

          <View
            style={{
              marginTop: "30%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {index > 0 ? (
              <Button padding={16} onPress={() => setIndex((prev) => prev - 1)}>
                <Text style={{ color: "white" }}>{"<"} Prev</Text>
              </Button>
            ) : (
              <View></View>
            )}
            {index < posts.length - 1 && (
              <Button padding={16} onPress={() => setIndex((prev) => prev + 1)}>
                <Text style={{ color: "white" }}>Next {">"}</Text>
              </Button>
            )}
          </View>
        </PostCard>
      </ContentView>
    </Container>
  ) : (
    <Container justifyContent="center">
      <ActivityIndicator color="white" size="large"></ActivityIndicator>
    </Container>
  );
}
