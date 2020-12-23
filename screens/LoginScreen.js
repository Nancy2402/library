import * as React from "react";
import {View,TouchableOpacity,TextInput,Text, Alert} from "react-native";
import firebase from "firebase";
import db from "../config";
 export default class LoginScreen extends React.Component{
constructor(){
    super();
    this.state={
        emailId:"",
        password:""
    }
}

login=async(email,pass)=>{
    if(email&pass){
        const response=firebase.auth().signInWithEmailAndPassword(email,pass);
        if(response){
this.props.navigation.navigate("Transaction");
        }
    }
    else{
        Alert.alert("Enter email amd password")
    }
}



     render(){
         return(

            <View>

                <TextInput placeholder="Enter Your email" 
                onChangeText={(text)=>{
                    this.setState({emailId:text})
                }}

                keyboardType="email-address"
                />

<TextInput placeholder="Enter Your password" 
                onChangeText={(text)=>{
                    this.setState({password:text})
                }}

                secureTextEntry={true}
                />

                <TouchableOpacity
                onPress={()=>{
                    this.login(this.state.emailId,this.state.password)
                }}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
         )
     }
 } 