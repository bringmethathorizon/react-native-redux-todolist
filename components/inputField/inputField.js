import React, {Component} from 'react';
import {addTask, addInput, deleteTask} from "../../store/actions/actions";
import { View, TextInput, TouchableHighlight, Text} from 'react-native';
import Button from 'react-native-button';
import MyModal from './MyModal';
import MyList from './MyList';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect }  from 'react-redux';

class InputField extends Component{

constructor(props){
    super(props);
    this.state = {
        userInput: ''
    };

  this.onAddModal = this.onAddModal.bind(this);
}

onAddModal = () => {
    this.refs.addModal.showModal();
};

onChange = (state) => {
    this.setState({
        userInput: state
    });
};

onAddTask = () => {
    this.props.addItemHandler(this.state.userInput)
};

onDeleteTask = (key) => {
    this.props.deleteItemHandler(key);
};

    render() {
      let listItems = this.props.items.map((val, key) => {
          return <MyList
              propsId={key}
              text={val}
              deleteItems={this.onDeleteTask}
              addModalHandler={() => this.onAddModal()}
          />
      });

        return (
                <View>
                    <TextInput
                        type="text"
                        value={this.state.userInput}
                        placeholder="enter a task"
                        onChangeText={this.onChange}
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
                        onPress={this.onAddTask}
                    >
                        add
                    </Button>

                    {listItems}

                    <MyModal
                        ref={'addModal'}
                    >
                    </MyModal>
                </View>
                );
            };
        }

mapStateToProps = state => {
    return {
      items: state.todo.todos
    };
};


mapDispatchToProps = (dispatch) => {
    return {
        addItemHandler: (value) => dispatch(addTask(value)),
        deleteItemHandler: (id) => dispatch(deleteTask(id))
    };
};

    export default connect(mapStateToProps, mapDispatchToProps)(InputField);