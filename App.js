import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from "./HomePage";
import CameraScreen from "./CameraScreen";
import LandingPage from "./LandingPage";
import * as firebase from "firebase";
const navigator = createStackNavigator(
  {
    HomePage: HomePage,
    CameraScreen: CameraScreen,
    LandingPage: LandingPage
  },
  {
    initialRouteName: "CameraScreen"
  }
);

const NavCont = createAppContainer(navigator);
export default class App extends React.Component {
  render() {
    return <NavCont />;
  }
}
