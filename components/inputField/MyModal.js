import React, {Component} from 'react';
import {Text, TextInput, TouchableHighlight, View, Dimensions, Platform} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { connect }  from 'react-redux';

let screen = Dimensions.get('window');

export default class MyModal extends Component {

    constructor(props){
        super(props);
        this.state = {
           // userInput: ''
        }

    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         userInput: nextProps.userInput,
    //         todos: nextProps.items
    //     });
    // }

    showModal = () => {
      this.refs.myModal.open();
    };


    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'android' ? 20 : 0,
                    shadowRadius: 10,
                    width: screen.width - 70,
                    //height: screen.height/2
                }}
                position='center'
                backdrop={true}
            >
                <TextInput
                    value={this.props.items}
                >
                </TextInput>
                <Button
                    style={{
                        fontSize: 18, color: 'white'
                    }}
                    containerStyle={{
                        padding: 9,
                        marginBottom: 5,
                        marginLeft: 140,
                        marginRight: 140,
                        height: 50,
                        borderRadius: 7,
                        backgroundColor: 'mediumseagreen'
                    }}
                    position='center'
                >
                    Save Changes
                </Button>
            </Modal>
        );
    }
}

//mapStateToProps = state => {
//     return {
//         items: state.todo.todos
//     };
// };

//export default connect(mapStateToProps, null)(MyModal);