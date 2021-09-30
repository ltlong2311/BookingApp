import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../consts/colors";

const reverseDateString = (date) => {
  const arrChar = date.split(" "); // [date, time]
  const dArr = arrChar[0].split("-");
  arrChar[0] = dArr[2] + "-" + dArr[1] + "-" + dArr[0];
  // const strArray = arrChar.reverse();
  // return strArray.join("");
  return arrChar[1] + " " + arrChar[0];
};

const PostHeader = (props) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={styles.postBlock}>
        <Text
          style={{ color: COLORS.darkText, fontSize: 20, fontWeight: "bold" }}
        >
          {props.post.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: COLORS.darkSub,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {props.post.user} ∙
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            <Text style={{ color: COLORS.darkSub, paddingRight: 2 }}>
              {post.favorite}
            </Text>
            <MaterialCommunityIcons
              style={{ color: COLORS.darkSub }}
              name="heart"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: COLORS.darkSub }}>{post.comment}</Text>
            <MaterialCommunityIcons
              style={{ color: COLORS.darkSub }}
              name="reply"
              size={18}
            />
          </View>
        </View>
        <Text style={{ color: COLORS.darkSub, fontSize: 12, marginTop: 5 }}>
          {reverseDateString(post.createDate)}
        </Text>
        <View style={{}}>
          {post.content.split("\n").map((text, index) => (
            <Text
              key={index}
              style={{
                color: COLORS.darkText,
                fontSize: 15,
                marginTop: 10,
                // textAlign: "justify",
                lineHeight: 23,
              }}
            >
              {text}
            </Text>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            actionOpacity={0.8}
            onPress={props.changeStatusFavorite}
          >
            {props.isFavorite ? (
              <MaterialCommunityIcons
                style={{ color: COLORS.redTorn }}
                name="heart"
                size={18}
              />
            ) : (
              <MaterialCommunityIcons
                style={{ color: COLORS.darkSub }}
                name="heart-outline"
                size={18}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            actionOpacity={0.8}
            onPress={props.changeStatusInput}
          >
            {props.showInputComment ? (
              <MaterialCommunityIcons
                style={{ color: COLORS.darkSub, paddingLeft: 12 }}
                name="reply"
                size={25}
              />
            ) : (
              <MaterialCommunityIcons
                style={{ color: COLORS.darkSub, paddingLeft: 12 }}
                name="reply-outline"
                size={25}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  postBlock: {
    borderBottomWidth: 1,
    borderBottomColor: "#efeff4",
  },
});
