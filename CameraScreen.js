import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from "react-native";

import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import * as Random from "expo-random";
//import firebase from 'react-native-firebase'


export default class CameraScreen extends React.Component {
  // constructor(){
  //   super()
  //   this.ref=firebase.firestore().collection('Image');
  // }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );

    this.setState({ hasCameraPermission: status === "granted" });
  }

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync({
      quality:0.5,
      base64:true
    });
    // let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      var j = 1;
      for (var i = 0; i < 10; i++) {
        j = j + Math.floor(Math.random() * 100) + 1;
      }
      this.uploadImage(result.uri, "image-" + j.toString(), result.base64)
        .then(() => {
          Alert.alert("Success!");
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };

  uploadImage = async (uri, imageName, encoded) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    // this.ref.add({
    //   title:encoded,
    //   complete:false,
    // });
    var ref = firebase
      .storage()
      .ref()
      .child("images/" + imageName);
    return ref.put(blob);
  };

  render() {
    const takePhoto = async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        console.log(photo);
      }
    };
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={camera => (this.camera = camera)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.6,
                  alignSelf: "flex-end",
                  alignItems: "center"
                }}
                onPress={this.onChooseImagePress}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                >
                  {" "}
                  Take Picture{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
