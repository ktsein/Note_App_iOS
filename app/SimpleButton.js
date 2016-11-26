import React, {Component} from "react";

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class SimpleButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={this.props.style}>
          <Text style={this.props.textStyle}>
            {this.props.customText || 'Simple Button'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

SimpleButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  customText: React.PropTypes.string,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style
}
