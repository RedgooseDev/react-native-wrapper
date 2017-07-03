import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: 원하는 컴포넌트 불러오는 영역


export default class Demo extends React.Component {

	render() {
		const { props, state } = this;

		// TODO: 원하는 컴포넌트 삽입영역
		return (
			<View style={css.viewport}>
				<Text>Custom component area</Text>
			</View>
		);
	}

}


const css = StyleSheet.create({
	viewport: {
		flex: 1,
	},
});