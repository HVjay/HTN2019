import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Dimensions
} from "react-native";

import * as firebase from "firebase";
import Constants from "expo-constants";

import createAppContainer from "react-navigation";
import createStackNavigator from "react-navigation-stack";

const { width: WIDTH } = Dimensions.get("window");

firebaseConfig = {
  apiKey: "AIzaSyC10Wu72kfUuPMi87QWfGn2qf60A6Eic7k",
  authDomain: "dermacare-91524.firebaseapp.com",
  databaseURL: "https://dermacare-91524.firebaseio.com",
  projectId: "dermacare-91524",
  storageBucket: "dermacare-91524.appspot.com",
  messagingSenderId: "415489878037",
  appId: "1:415489878037:web:ff9b4d0e135bce0780061c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./Images/color.jpg")}
        style={styles.backgroundContainer}
      >
        <KeyboardAvoidingView behavior="position">
          <View style={styles.app_Logo_Container}>
            <Image
              source={require("./Images/logo.jpg")}
              style={styles.app_Logo}
            />
            <Text style={styles.logo_Text}> DermaCare </Text>
          </View>
          <View>
            <TextInput
              onChangeText={TextInputUsername =>
                this.setState({ TextInputUsername })
              }
              style={styles.input}
              placeholder={"Username"}
              onSubmitEditing={() => this.TextInputPassword.focus()}
              returnKeyType={"next"}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={TextInputPassword =>
              this.setState({ TextInputPassword })
            }
            placeholder={"Password"}
            ref={input => (this.TextInputPassword = input)}
            secureTextEntry={true}
            returnKeyType="go"
            onSubmitEditing={() =>
              this.props.navigation.navigate("LandingPage")
            }
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  app_Logo: {
    width: 160,
    height: 160
  },
  app_Logo_Container: {
    alignItems: "center"
  },
  logo_Text: {
    color: "black",
    fontSize: 29,
    fontWeight: "500",
    marginTop: 15,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 50,
    height: 45,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: "#FFF",
    color: "black",
    marginHorizontal: 25,
    marginTop: 15
  }
});
