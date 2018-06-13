import { AppRegistry } from 'react-native';
import App from './App';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

class EntryPoint extends Component {

    render() {
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('myToDoList', () => EntryPoint);


