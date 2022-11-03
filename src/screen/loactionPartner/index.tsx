/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useContext} from 'react';
import {FlatList, Pressable} from 'react-native';
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
import styled from 'styled-components/native';
import Picker from '../../components/picker/components/Picker';
import {HandleEvent} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {AuthContext} from '../../service/Auth/Auth.context';
import {PartnerContext} from '../../service/Partner/Partner.context';
const TextCounters = styled.Text`
  font-size: 18;
  color: ${Color.brand.black};
  width: 100%;
  text-align: center;
`;
export const LocationPartner = ({open, onChange}) => {
  useEffect(() => {
    startAnimation(open);
  }, [open]);
  const {countries} = useContext(AuthContext);
  const {PartnerFn} = useContext(PartnerContext);

  const [valueCountry, setValueCountry] = useState(null);
  const [openCountry, setOpenCountry] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [played, setPlayed] = useState(open);
  const openAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 2,
        duration: 950,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setPlayed(true);
    });
  };
  const closeAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 950,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setPlayed(false);
    });
  };

  const startAnimation = open => {
    if (!open) {
      openAnimation();
    } else {
      closeAnimation();
    }
  };

  const yInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [-100, 100],
  });
  const yInterpolateRadios = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [-10, 1],
  });

  const boxStyle = {
    height: yInterpolate,
    borderWidth: yInterpolateRadios,
  };
  function searchPartner(item) {
    closeAnimation();
    PartnerFn(item.value);
    onChange(item);
    setPlayed(!played);
  }
  const _renderItem = ({item}) => {
    console.log('====================================');
    console.log('CCCC', item);
    console.log('====================================');
    return (
      <>
        <HandleEvent onPress={() => searchPartner(item)}>
          <TextCounters>{item.label}</TextCounters>
        </HandleEvent>
      </>
    );
  };
  return (
    <Animated.View style={[styles.box, boxStyle]}>
      {played ? (
        <FlatList
          data={countries}
          renderItem={_renderItem}
          style={styles.box2}
        />
      ) : null}
    </Animated.View>
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
    width: Dimensions.get('window').width - 30,
    height: -100,
    borderRadius: 8,
    borderColor: Color.brand.black,
  },
  box2: {
    height: 100,
  },
  boxShadow: {
    width: '100%',
    height: 177,
    backgroundColor: 'rgba(0,0,0,0.07)',
    position: 'absolute',
  },
});
