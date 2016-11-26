import React, {Component} from "react";

import {
  Text,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default class NoteScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Untitled"
          style={styles.title}/>
        <TextInput multiline={true}
          placeholder="Start typing" style={styles.body} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64
  },
  title: {
    height: 40
  },
  body: {
    flex: 1
  }
});
