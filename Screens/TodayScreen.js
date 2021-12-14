import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContextAp }  from '../Context/Context';
//import { StatusBar } from 'expo-status-bar';

export default function TodayScreen() {
    const { ConsultaT } = useContext(ContextAp);
    return (
        <View style={styles.container}>
            <Text>Today Screen</Text>
            {ConsultaT.map((a) => <Text> {a.q} </Text>)}
            <Text>Hola mundo2222</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
//{ConsultaT.map((a) => <Text>"{a.q}"</Text>)}
//<StatusBar style="auto"/>