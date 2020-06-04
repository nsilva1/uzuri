import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    primary: "orange",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
