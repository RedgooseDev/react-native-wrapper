# react-native-wrapper
React native wrapper for component development

컴포넌트 개발용으로 만들어진 React Native 래퍼 입니다.  
이 공간에서 다른 컴포넌트를 개발할 수 있습니다. `./components/index.js` 가 연결되어있기 때문에 파일을 만들어서 프리뷰할 수 있습니다.


## Using guide

### create `components` directory  
`mkdir component`

### add index.js
```
cd components
vim index.js
```

#### example index.js

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: 원하는 컴포넌트 불러오는 영역


export default class Demo extends React.Component {

	render() {
		const { props, state } = this;

		// TODO: 원하는 컴포넌트 삽입영역
		return (
			<View style={css.viewport}>
				<Text>Custom component areaqweqwe</Text>
			</View>
		);
	}

}


const css = StyleSheet.create({
	viewport: {
		flex: 1,
	},
});
```

### play in components directory

잘 사용하면됨..