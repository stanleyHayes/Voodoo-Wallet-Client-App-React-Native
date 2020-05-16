import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './src/navigators/RootStackNavigator';

function App() {
    return (
            <NavigationContainer>
                <RootStackNavigator/>
            </NavigationContainer>
    );
}


export default App;
