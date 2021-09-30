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

const CommentCard = ({ comment }) => {
  return (
    <View style={[styles.card]}>
      <View style={[styles.infoComment]}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginRight: 20,
            overflow: "hidden",
            borderRadius: 40 / 2,
          }}
          source={{ uri: comment.imgUser }}
        />
        {/* <View > */}
        <View
          style={{
            flex: 1,
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
                overflow: "hidden",
              },
            ]}
          >
            {comment.user}
          </Text>
          <Text style={[{ color: COLORS.primary, fontSize: 12 }]}>
            {comment.createDate.slice(0, -9)}
          </Text>
        </View>
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 5,
            }}
          >
            <Text></Text>
            <MaterialCommunityIcons
              style={[
                { color: COLORS.pink },
              ]}
              size={20}
              name="heart-outline"
            />
          </View> */}
        {/* </View> */}
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text>{comment.content}</Text>
      </View>
    </View>
  );
};

export default CommentCard;

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
  infoComment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 10,
    margin: 5,
  },
  card: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#efeff4",
  },
});
