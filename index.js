import React from 'react';
import { AppRegistry, View } from 'react-native';

import Demo from './components';


// global settings
console.disableYellowBox = true;


export default class App extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				<Demo/>
			</View>
		);
	}
}


AppRegistry.registerComponent('rn_wrapper', () => App);