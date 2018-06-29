import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
  View,
  Text,
  ToastAndroid
} from "react-native";

const ImagePicker = require("react-native-image-picker");

const options = {
  title: "选择图片",
  cancelButtonTitle: "取消",
  takePhotoButtonTitle: "拍照",
  chooseFromLibraryButtonTitle: "图片库",
  cameraType: "back",
  mediaType: "photo",
  videoQuality: "high",
  durationLimit: 10,
  maxWidth: 600,
  maxHeight: 600,
  aspectX: 2,
  aspectY: 1,
  quality: 0.8,
  angle: 0,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class CameraButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  render() {
    let conText;
    return (
      <TouchableOpacity
        onPress={this.showImagePicker.bind(this)}
        style={[this.props.style, styles.cameraBtn]}
      >
        <View style={styles.cameraBtnView}>
          <Text style={styles.cameraBtnText}>{`点击拍照`}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  showImagePicker() {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        let source;

        if (Platform.OS === "android") {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace("file://", ""), isStatic: true };
        }

        let file;
        if (Platform.OS === "android") {
          file = response.uri;
        } else {
          file = response.uri.replace("file://", "");
        }

        this.setState({
          loading: true
        });
        this.props
          .onFileUpload(file, response.fileName || "未命名文件.jpg")
          .then(result => {
            this.setState({
              loading: false
            });
          });
      }
    });
  }
}
const styles = StyleSheet.create({
  cameraBtn: {
    width: 100,
    height: 40,
    borderRadius: 10
  },
  cameraBtnView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#841584"
  },
  cameraBtnText: {
    color: "#ffffff"
  },
  count: {
    color: "#fff",
    fontSize: 12
  },
  fullBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
