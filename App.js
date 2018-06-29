/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import getRouter from "./src/router";

const App = () => {
  const router = getRouter();
  return router;
};
export default App;

// export default class App extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {getRouter()}
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
