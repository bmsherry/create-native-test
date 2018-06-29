/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Alert, Button } from "react-native";
import CameraButton from "./common/CameraButton";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <CameraButton
          photos={[]}
          onFileUpload={this.onFileUpload}
          style={{ marginBottom: 20 }}
        />
        <Button
          onPress={this.openScanScreen}
          title="扫描二维码"
          color="#841584"
        />
      </View>
    );
  }
  onFileUpload(file, fileName) {
    Alert.alert("图片地址", file, [
      { text: "OK", onPress: () => console.log("OK Pressed!") }
    ]);
    return Promise.resolve();
  }
  openScanScreen() {
    Actions.push("ScanScreen");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
