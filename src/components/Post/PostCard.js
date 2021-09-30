import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../consts/colors";

function reformatDate(dateStr) {
  const dArr = dateStr.split("-");
  return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
}

const showPostType = (colorType, contentType) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={[
          {
            backgroundColor: colorType,
            width: 10,
            height: 10,
            borderRadius: 10 / 2,
            marginRight: 3,
          },
        ]}
      ></View>
      <Text style={[{ color: COLORS.redM, fontSize: 12 }]}>{contentType}</Text>
    </View>
  );
};

const PostCard = ({ post, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("PostDetails", post)}
    >
      <View elevation={3} style={[styles.infoCard]}>
        <Image
          style={{
            width: 50,
            height: 50,
            marginRight: 20,
            overflow: "hidden",
            borderRadius: 50 / 2,
          }}
          source={{ uri: post.imgUser }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                {
                  color: COLORS.dark,
                  fontWeight: "bold",
                  fontSize: 13,
                  width: "75%",
                  overflow: "hidden",
                },
              ]}
            >
              {post.name}
            </Text>
            {/* <MaterialCommunityIcons
              style={[
                { color: COLORS.pink },
              ]}
              size={20}
              name="heart-outline"
            /> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                {
                  color: COLORS.greyC,
                  fontSize: 12,
                  paddingTop: 5,
                  width: "80%",
                  overflow: "hidden",
                },
              ]}
            >
              {post.user}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 5,
            }}
          >
            <Text>
              {post.type === "1"
                ? showPostType(COLORS.redTorn, "Thông báo")
                : post.type === "2"
                ? showPostType(COLORS.blueDam, "Hướng dẫn")
                : post.type === "3"
                ? showPostType(COLORS.greenTee, "Review")
                : post.type === "4"
                ? showPostType(COLORS.orangeRew, "Hỏi đáp")
                : post.type === "5"
                ? showPostType(COLORS.pinkHon, "Bàn luận - chém gió")
                : ""}
            </Text>
            <Text style={[{ color: COLORS.primary, fontSize: 12 }]}>
              {reformatDate(post.createDate.slice(0, -9))}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  imageOverlay: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .15)",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 10,
    margin: 5,
  },
});
