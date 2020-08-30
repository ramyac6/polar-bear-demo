import React from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function BearPartScreen(props) {
  const furPress = () => {
    Alert.alert(
      "Two thick layers of fur",
      "Together, outer guard hairs and inner insulating hairs help prevent almost all heat loss from a bear’s body."
    );
  };
  const fatPress = () => {
    Alert.alert(
      "Thick layer of fat",
      "Around its whole body, a polar bear has a layer of fat that can be over 11cm (4.5 inches) thick. This helps provide insulation from cold air and cold water"
    );
  };
  const appendagePress = () => {
    Alert.alert(
      "Small appendages and short limbs",
      "Polar bears have relatively low surface-area-to-volume ratios, which minimizes the surface area to dissipate heat and allows them to retain heat."
    );
  };
  const pawPress = () => {
    Alert.alert(
      "Large paws",
      "A polar bear’s paws can grow up to 30cm (12 inches) across. They disperse the bear’s weight more evenly on the snow and ice – much like a snow shoe – which allows the bear to stay on the surface"
    );
  };
  const footpadPress = () => {
    Alert.alert(
      "Bumpy footpads",
      "Polar bears have small bumps called papillae on their footpads which help them keep traction on slippery surfaces"
    );
  };
  const clawPress = () => {
    Alert.alert(
      "Thick claws",
      "Strong, thick claws help grip on ice and snow. They also help pull large seals out of the water"
    );
  };
  const nosePress = () => {
    Alert.alert(
      "Sensitive sense of smell",
      "Polar bears are said to be able to smell seals through 1 metre of ice"
    );
  };
  return (
    //<View style={styles.container}>
    <ImageBackground
      style={styles.image}
      // original source image https://images.fineartamerica.com/images-medium-large-5/polar-bear-adult-stands-upright-on-hind-steven-kazlowski.jpg
      source={require("../../../assets/diagram.jpg")}
    >
      <TouchableOpacity onPress={() => furPress()}>
        <View style={styles.fur}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => fatPress()}>
        <View style={styles.fat}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => appendagePress()}>
        <View style={styles.appendage}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pawPress()}>
        <View style={styles.paw}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => footpadPress()}>
        <View style={styles.footpad}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clawPress()}>
        <View style={styles.claw}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nosePress()}>
        <View style={styles.nose}></View>
      </TouchableOpacity>

      <View style={styles.closeIcon}>
        <Text style={{ color: "white" }}>Go Back</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>
          Tap the circles to learn more about the polar bear!
        </Text>
      </View>
    </ImageBackground>
    //</View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: "100%",
    height: 50,
    backgroundColor: "#066e91",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  fur: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 300,
    left: 200,
  },
  fat: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 350,
    left: 150,
  },
  appendage: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 420,
    left: 60,
  },
  paw: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 690,
    left: 110,
  },
  footpad: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 530,
    left: 260,
  },
  claw: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 510,
    left: 30,
  },
  nose: {
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: "rgba(195, 125, 198, .3)",
    borderColor: "black",
    borderWidth: 3,
    position: "absolute",
    top: 170,
    left: 170,
  },
  title: {
    flex: 1,
    alignItems: "center",
    top: 30,
  },
  text: {
    backgroundColor: "#ebfaff",
    fontWeight: "400",
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default BearPartScreen;
