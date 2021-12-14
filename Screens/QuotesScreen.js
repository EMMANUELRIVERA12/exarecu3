import React,{useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ContextAp } from '../Context/Context';

export default function QuotesSreen() {
    const { ConsultaQ } = useContext(ContextAp);
    return (
        <View style={styles.container}>
            <Text>Quotes Screen</Text>
            {ConsultaQ.map((a) => <Text> {a.q} </Text>)}
            <Text>hola mundo4444</Text>
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
  