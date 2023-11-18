import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
function WelcomeScreen() {
  const [fetchedMsg, setFetchedMsg] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios
      .get(
        `https://react-native-course-95e1d-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=${token}`
      )
      .then((response) => {
        setFetchedMsg(response.data);
      });
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMsg}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
