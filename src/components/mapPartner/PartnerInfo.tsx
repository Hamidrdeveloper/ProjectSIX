import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const HartmannInfo = ({data ,onPress,onClose}) => {
    const {
        id,
        user_id,
        mobile,
        country_id,
        email,
        firstName,
        lastName,
        subdomain,
        address_complete,
      } = data;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <Text>{`${firstName} ${lastName}`}</Text>
          <Text>{address_complete.replace('<br>', ', ')}</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text>Email:</Text>
          <Text style={styles.emailLink}>{email}</Text>
        </View>
        <View style={styles.phoneContainer}>
          <Text>Telefon:</Text>
          <Text style={styles.phoneLink}>{mobile}</Text>
        </View>
        <View style={{ backgroundColor: '#fff',}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
        onPress(data)
        
      }}>
       
        <Text style={styles.selectButton}>Select</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={onClose}>
        <Text style={styles.selectButton}>Close</Text>
      </TouchableOpacity>
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:`100%`,
    height:200,

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoContainer: {
    width:`100%`,
    height:200,

  },
  name: {
    width:`100%`,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressContainer: {
    marginBottom: 10,
  },
  linkContainer: {
    marginBottom: 10,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  },
  emailContainer: {
    marginBottom: 10,
  },
  emailLink: {
    fontSize: 16,
    color: 'blue',
  },
  phoneContainer: {
    marginBottom: 10,
  },
  phoneLink: {
    fontSize: 16,
    color: 'blue',
  },
  buttonContainer: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  selectButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HartmannInfo;
