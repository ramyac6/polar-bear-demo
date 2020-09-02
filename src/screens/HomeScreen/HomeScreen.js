import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Button,
  StyleSheet,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import { firebase } from "../../firebase/config";

export default function HomeScreen(props, { navigation }) {
  const usersRef = firebase.firestore().collection("users");
  const userID = props.extraData.id;
  const [userName, setText] = useState("");

  useEffect(() => {
    usersRef
      .doc(userID)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setText(data["fullName"].toString());
        } else {
          // doc.data() will be undefined in this case
          alert("User doesn't exist!!!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 24 }}>Welcome back {userName}!</Text>
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={[
          {
            id: 1,
            title: "View in AR",
            color: "#FF4500",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/echoar.png",
            //link: WebBrowser.openBrowserAsync("https://go.echoar.xyz/wA9W"),
          },
          {
            id: 2,
            title: "Anatomy",
            color: "#87CEEB",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/heart.png",
          },
          {
            id: 3,
            title: "Meet the Bears",
            color: "#4682B4",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/bear.png",
          },
          {
            id: 4,
            title: "Visit the Website",
            color: "#6A5ACD",
            image:
              "https://raw.githubusercontent.com/ramyac6/polar-bear-demo/master/assets/web.png",
          },
        ]}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => {
                WebBrowser.openBrowserAsync("https://go.echoar.xyz/wA9W");
              }}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}></View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
