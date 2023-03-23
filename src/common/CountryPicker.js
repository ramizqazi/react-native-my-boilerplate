import { useState } from "react";
import {CountryList} from "react-native-country-codes-picker";
import { Text, View } from "react-native";

export default function App() {
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={styles.container}>
      <View        
        style={{
            width: '80%',
            height: 60,
            backgroundColor: 'black',
            padding: 10,
        }}
      >
        <Text style={{
            color: 'white',
            fontSize: 20
        }}>
            {countryCode}
        </Text>

      // All props the same as for picker
       <CountryList
          lang={'pl'}
          pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
          }}
       />
    </View>
  );
}