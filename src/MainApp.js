/* 
NOTES 
- This is a Stateless component 
- Views are containers 
    - View is similar to a div element
    - Views can be inside other Views 

*/

import React from 'react';
import { Stylesheet, Text, View } from 'react-native';

// Good practice to have the same name for component and file
const MainApp = () => {
	const name = '01 - Hey, this is my life';

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer} />
			<Text style={styles.title}>
				<Text style={styles.subtitle}>Playing:</Text> {name}
			</Text>
		</View>
	);
};

const styles = Stylesheet.create({
	container: {
		margin: 10,
		marginTop: 100,
		backgroundColor: 'red',
		borderRadius: 5,
	},
});
