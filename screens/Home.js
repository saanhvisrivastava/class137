import React,{Component} from 'react';
import {Text,View,StyleSheet, Alert} from 'react-native';
import {ListItems} from 'react-native-elements';
import {axios} from 'axios';
import { SafeAreaView } from 'react-navigation';
import { FlatList } from 'react-native-web';

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            list_data:[],
            url:''
        }
            
        
    }

    getPlanets=()=>{
        const{url}=this.state;
        axios.get(url)
        .then(
            response=>{
                return this.setState({
                    list_data:response.data.data
                })
            }
        )

        .catch(error=>{
            Alert.alert(error.message)
        })


    }


renderItem=({item,index})=>{

<ListItem
key={index}
/>
}
render(){
    const{list_data}=this.state
    if(list_data.length===0){
        return(
            <View> 
            <Text> Loading... </Text>
            
            </View>
            )

    }
return(
<View style={styles.container}>
    <SafeAreaView> 
        <View> style={styles.upperContainer}
<Text> Planets World </Text>
</View>
<View style={styles.lowerContainer}>
<FlatList
keyExtractor={this.keyExtractor}
data={this.state.list_data}
renderItem={this.renderItem}
/>
</View>
</SafeAreaView>

</View>
)
}
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: "#edc988" }, upperContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, headerText: { fontSize: 30, fontWeight: "bold", color: "#132743" }, lowerContainer: { flex: 0.9 }, emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" }, emptyContainerText: { fontSize: 20 }, title: { fontSize: 18, fontWeight: "bold", color: "#d7385e" }, listContainer: { backgroundColor: "#eeecda" } });
