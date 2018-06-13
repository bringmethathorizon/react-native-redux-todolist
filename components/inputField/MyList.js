import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  MyModal  from './MyModal';
import Button from 'react-native-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class MyList extends Component {

constructor(props){
    super(props);
}

onDelete = () => {
    this.props.deleteItems(this.props.propsId);
};

render(){
    return(
        <View>
            <Text>{this.props.text}</Text>
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
                    backgroundColor: 'mediumseagreen',
                    position: 'relative',
                    left: 130
                }}

                onPress={this.onDelete}
            >
                Del
            </Button>
            <Button
                style={{
                    fontSize: 18, color: 'white'
                }}
                containerStyle={{
                    padding: 9,
                    marginLeft: 140,
                    marginRight: 140,
                    height: 50,
                    borderRadius: 7,
                    backgroundColor: 'mediumseagreen',
                    position: 'relative',
                    left: 130,
                    fontFamily: 'FontAwesome'
                }}
                onPress={this.props.addModalHandler}
            >

                <FontAwesome
                    style={{fontSize: 20}}>edit{Icons.chevronLeft} </FontAwesome>
            </Button>
        </View>

    );
  }
};