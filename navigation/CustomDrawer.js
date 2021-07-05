import React from 'react';
import {View,Text} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function CustomDrawer({route,navigation})
{
    return(<DrawerContentScrollView>
        <DrawerItem
        label = {({focused,color}) => {
               return <View><Text>Item uno</Text></View>
        }}
        />
        <DrawerItem 
        label={({focused,color}) => (
           <View>
               <Text onPress={() => {navigation.navigate('Details')}}>Item dos</Text>
           </View>
        )}
        />
    </DrawerContentScrollView>);
}
