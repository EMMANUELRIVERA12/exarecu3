import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ContextAp } from '../Context/Context';


export default function RandomSreen() {
    const { ConsultaR } = useContext(ContextAp);
    return (
        <View style={styles.container}>
            <Text>Random Screen</Text>
            {ConsultaR.map((a) => <Text> {a.q} </Text>)}
            <Text>hola mundo333</Text>

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
  