import React, { useEffect, useState, Component } from "react";
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

export default function HomeScreen(props) {
  const usersRef = firebase.firestore().collection("users");
  const userID = props.extraData.id;
  //const [userName, setText] = useState("");
  var userName;

  data: [
    {
      id: 1,
      title: "View in AR",
      color: "#FF4500",
      members: 8,
      image: "../../../assets/echoar.png",
    },
    {
      id: 2,
      title: "Anatomy",
      color: "#87CEEB",
      members: 6,
      image: "../../../assets/heart.png",
    },
    {
      id: 3,
      title: "Meet the Bears",
      color: "#4682B4",
      members: 12,
      image: "../../../assets/bear.png",
    },
    {
      id: 4,
      title: "Visit the Website",
      color: "#6A5ACD",
      members: 5,
      image: "../../../assets/web.png",
    },
  ];

  useEffect(() => {
    usersRef
      .doc(userID)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          //(userName => setText(data["fullName"].toString()));
          userName = data["fullName"].toString();
        } else {
          // doc.data() will be undefined in this case
          alert("User doesn't exist!!!");
        }
      })
      .catch(function (error) {
        userName = "joe";
        console.log("Error getting document:", error);
      });
  }, []);

  const getUser = () => {
    console.log(userName);
  };

  return (
    /*     <View>
      <TouchableOpacity onPress={getUser}>
        <Text>Hello world</Text>
      </TouchableOpacity>
      <Text>{state.userName}</Text>
      <Button
        title="button"
        onPress={() =>
          WebBrowser.openBrowserAsync("https://go.echoar.xyz/wA9W")
        }
      ></Button>
    </View> */
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={[
          {
            id: 1,
            title: "View in AR",
            color: "#FF4500",
            image: "../../../assets/heart.png",
          },
          {
            id: 2,
            title: "Anatomy",
            color: "#87CEEB",
            image: "../../../assets/heart.png",
          },
          {
            id: 3,
            title: "Meet the Bears",
            color: "#4682B4",
            image: "../../../assets/bear.png",
          },
          {
            id: 4,
            title: "Visit the Website",
            color: "#6A5ACD",
            image: "../../../assets/web.png",
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
                this.clickEventListener(item.view);
              }}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Image style={styles.cardImage} source={require(item.image)} />
              <View style={styles.cardFooter}></View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
