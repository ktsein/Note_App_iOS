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
        <View style={styles.inputContainer}>
          <TextInput
            ref="title"
            autoFocus={true}
            autoCapitalize="sentences"
            placeholder="Untitled"
            style={[styles.title , styles.textInput]}
            onEndEditing={(text) => {this.refs.body.focus()}}
          />
        </View>
          <TextInput
            ref="body"
            multiline={true}
            placeholder="Start typing"
            style={[styles.body , styles.textInput]}
          />
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
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  }

});
