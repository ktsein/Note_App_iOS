import React, {Component} from 'react';import {     AppRegistry,     Navigator,     StyleSheet,     Text,     View   } from 'react-native';import SimpleButton from './app/SimpleButton';import HomeScreen from './app/HomeScreen';import NoteScreen from './app/NoteScreen';var NavigationBarRouteMapper = {  LeftButton: (route, navigator, index, navState) => {    switch (route.name) {      case 'createNote':        return (          <SimpleButton            onPress={() => navigator.pop()}            customText = 'Back'          />        );      default:        return null;    }  },  RightButton: function(route, navigator, index, navState) {    switch (route.name) {      case 'home':        return (          <SimpleButton            onPress={() => {              navigator.push({                name: 'createNote'              });            }}            customText = 'Create Note'            />        );        default:          return null;    }  },  Title: function(route, navigator, index, navState){    switch (route.name){      case 'home':        return (          <Text>React Note</Text>        );      case 'createNote':        return (          <Text>Create Note</Text>        );    }  }};class React_Note_App extends Component {  renderScene (route, navigator) {    switch (route.name) {      case 'home':        return (          <HomeScreen />        );      case 'createNote':        return (          <NoteScreen />        );    }  }    render () {      return (        <Navigator        initialRoute={{name: 'home'}}        renderScene={this.renderScene}        navigationBar = {          <Navigator.NavigationBar            routeMapper={NavigationBarRouteMapper}          />        }        />      );    }  }var styles = StyleSheet.create({     container: {       flex: 1,       justifyContent: 'center',       alignItems: 'center',}});AppRegistry.registerComponent('React_Note_App', () => React_Note_App);