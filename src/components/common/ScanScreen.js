import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, Easing, Alert } from "react-native";
import RNCamera from "react-native-camera";
export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
      moveAnimTop: new Animated.Value()
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    this.state.moveAnimTop.setValue(200);
    Animated.sequence();
    Animated.timing(this.state.moveAnim, {
      toValue: 200,
      duration: 1500,
      easing: Easing.linear
    }).start(() => this.startAnimation());
  };
  //  识别二维码
  onBarCodeRead = result => {
    Alert.alert("扫描信息", result.data, [
      { text: "OK", onPress: () => console.log("OK Pressed!") }
    ]);
    // const { navigate } = this.props.navigation;
    // const { data } = result;
    // navigate("Sale", {
    //   url: data
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
        >
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}>
              <Animated.View
                style={[
                  styles.border,
                  { transform: [{ translateY: this.state.moveAnim }] }
                ]}
              />
              <Text style={styles.rectangleText}>
                将二维码放入框内，即可自动扫描
              </Text>
            </View>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "#00FF00",
    backgroundColor: "transparent"
  },
  rectangleText: {
    flex: 0,
    color: "#fff",
    marginTop: 10
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: "#00FF00"
  }
});
