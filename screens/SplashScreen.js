import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser, Icon } from 'expo';

import { MonoText } from '../components/StyledText';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
	};
	
	state = {
		username: 'Username',
	}

  render() {
    return (
      <View style={styles.container}>
				<TextInput
					style={...styles.input,
					}
					onChangeText={(username) => this.setState({username})}
					value={this.state.username}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
	},
	input: {
		height: 40,
		placeholder: 'Username',
	}
	
});
