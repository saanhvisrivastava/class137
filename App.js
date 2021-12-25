import React from 'react';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Details';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class App extends Component{

  
  render(){
    return(
     <AppContainer/> 
    )
  }
}

const AppStackNavigator=createStackNavigator(
  {
  Home:{
  screen:HomeScreen,
  navigationOptions:{
  headerShown:false
  }
  },
  
  Details:{
  screen:DetailScreen,
  navigationOptions:{
  headerShown:false
  }
  }
},
  
  {
  initialRouteName:'Home'
  }
  
  )
  
  const AppContainer=createAppContainer(AppStackNavigator);
  
  
  
  