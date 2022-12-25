/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useContext} from 'react';
import {Linking, Pressable, TouchableOpacity} from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Animated,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {
  ArrowDown,
  Call,
  ChevronDown,
  ChevronUp,
  Message,
} from 'react-native-iconly';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {PartnerContext} from '../../service/Partner/Partner.context';
import {regexHtml} from '../../utils/main';
export const Animations = ({open}) => {
  useEffect(() => {
    if (played) {
      startAnimation();
    }
  }, [open]);

  const [animation, setAnimation] = useState(new Animated.Value(1));
  const {partnerSelectId} = useContext(PartnerContext);
  const [played, setPlayed] = useState(false);
  const openAnimation = () => {
    setPlayed(true);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 2,
        duration: 950,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };
  const closeAnimation = () => {
    setPlayed(false);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 950,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };

  const startAnimation = () => {
    if (!played) {
      openAnimation();
    } else {
      closeAnimation();
    }
  };

  const yInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [68, 175],
  });

  const boxStyle = {
    height: yInterpolate,
  };

  return (
    <View style={styles.container}>
      <View>
        {played ? (
          <Animated.View style={[styles.boxShadow]} />
        ) : (
          <Animated.View style={[styles.boxShadow, {height: 70}]} />
        )}
        <Animated.View style={[styles.box, boxStyle]}>
          {played ? (
            <>
              <View style={{flexDirection: 'row'}}>
                <Space lineW={5} />
                <Image
                resizeMode="contain"
                  style={styles.image}
                  source={require('../../assets/image/avatarman.png')}
                />
                <Space lineW={30} />
                <View>
                  <Text style={{color: Color.brand.colorButton}}>
                    {partnerSelectId?.fullname}
                  </Text>
                  <Text>{'Independent Cleafin sales partner'}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${partnerSelectId?.email}?subject=SendMail&body=Description`,
                      )
                    }>
                  <Text style={{color: Color.brand.blue}}>
                    {'Contact with partner'}
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Space lineH={15} />
              <View style={{flexDirection: 'row'}}>
                <Call set="light" primaryColor={Color.brand.grey} size={'small'} />
                <Space lineW={10} />
                {/* <Text style={{color: Color.brand.grey}}>
                  {partnerSelectId?.iban}
                </Text> */}
                <Space lineW={10} />
                <Message set="light" primaryColor={Color.brand.grey} size={'small'} />
                <Space lineW={10} />
                <Text>{partnerSelectId?.bank_name}</Text>
              </View>
              <Space lineH={10} />
              {/* <Text style={{height: 40, width: 200}}>
                {partnerSelectId?.address_complete.replace(regexHtml, ',')}
              </Text> */}
            </>
          ) : (
            <>
              <View style={{flexDirection: 'row'}}>
                <Space lineW={30} />
                <View>
                  <Text style={{color: Color.brand.colorButton}}>
                    {partnerSelectId?.fullname}
                  </Text>
                  <Text>{'Independent Cleafin sales partner'}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `mailto:${partnerSelectId?.email}?subject=SendMail&body=Description`,
                      )
                    }>
                    <Text style={{color: Color.brand.blue}}>
                      {'Contact with partner'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
          <Pressable
            onPress={() => {
              startAnimation();
            }}
            style={styles.aicon}>
            {!played ? (
              <ChevronDown set="light" primaryColor={Color.brand.grey} size={'medium'} />
            ) : (
              <ChevronUp set="light"  primaryColor={Color.brand.grey} size={'medium'} />
            )}
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aicon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  box: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: Color.brand.white,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  boxShadow: {
    width: '100%',
    height: 177,
    backgroundColor: 'rgba(0,0,0,0.07)',
    position: 'absolute',
  },
});
