import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";

//importar screen Principal
import MenuPrincipal from "./screen/Dash/MenuPrincipal";
import ScreenLuces from "./screen/Luces/ScreenLuces";
import ScreenSetting from "./screen/Setting/ScreenSetting";
import ScreenUser from "./screen/User/ScreenUser";
import ScreenPuerta from "./screen/Puertas/ScreenPuerta";
import UserDetalles from "./screen/User/UserDetalles";
import Logginp2 from "./screen/Login/Logginp2";
import Formulariouser from "./screen/Login/FromnuevoUser";
import Editaruser from "./screen/User/Editaruser";
import Nuevouser from "./screen/User/Nuevouser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// ya no funciona desde que se creo navegacion2
function MyStack () {
    return (
       <Stack.Navigator>
        <Stack.Screen name="Usuarios" component={ScreenUser}/>
        <Stack.Screen name="Detalles" component={UserDetalles}/>
        <Stack.Screen name="nuevouser" component={Nuevouser}/>
        <Stack.Screen name="EditarUser" component={Editaruser}/>
       </Stack.Navigator>
    )
}

function Mytabs (){
    return(
        <Tab.Navigator 
            initialRouteName="menu" 
            screenOptions={{tabBarActiveTintColor:'purple'}}>

        <Tab.Screen 
            options={{tabBarBadge:'2',tabBarIcon:({color,size})=>(<MaterialCommunityIcons 
            name="home" 
            size={size} 
            color={color} />)}} 
            name="Menu" 
            component={Logginp2}/>


        <Tab.Screen 
            options={{tabBarIcon:({color,size})=>(<Entypo 
            name="light-bulb" 
            size={size} 
            color={color} />)}} 
            name="Luces" 
            component={ScreenLuces}/>

        <Tab.Screen 
            options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons 
            name="door-open" 
            size={size} color={color} />)}} 
            name="Puertas" component={ScreenPuerta}/>

        <Tab.Screen 
            options={{headerShown:false,tabBarIcon:({color,size})=>(<AntDesign 
            name="user" 
            size={size} color={color} />)}} 
            name="Users" component={MyStack}/>

        <Tab.Screen 
            options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons 
            name="cog" 
            size={size} 
            color={color} />)}} 
            name="Settings" 
            component={ScreenSetting}/>

        </Tab.Navigator>
    )
};

export default function Navegation () {
    return(
      
         <Mytabs/>
     
    )
}