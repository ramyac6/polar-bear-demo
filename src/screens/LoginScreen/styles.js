import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 20,
    opacity: 1,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#788eec",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
  },
  footerLink: {
    color: "#1230c7",
    fontWeight: "bold",
    fontSize: 16,
  },
});
