import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import routes from "./src/routes";

export default function App(){
  return(
    <>
      <StatusBar barStyle={"auto"} />
      <Routes /> 
    </>
  );
}
