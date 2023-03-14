import React, { useContext, useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';

import MotionSlider from 'react-native-motion-slider';
import { Color } from '../../infrastructuer/theme/colors.style';
import { BasketContext } from '../../service/Basket/Basket.context';
import { ProfileContext } from '../../service/Profile/Profile.context';
import i18n from '../../core/i18n/config';
const SliderComponent = ({onValue}) => {
    const {
        totalPrice,
        shipping,
        resultSymbol,
        paymentMethodsFn,
        paymentMethods,
        bulkAdd,
        codePrice,
        pointProducts,
        resultPriceNotVat,
        resultPrice,
        dataConfig,
        setTotalPrice,
        totalCoin,
        ISO3,
        setTotalCoin,
        setCodePrice,
        
      } = useContext(BasketContext);
      const {rolesUser, walletBalance} = useContext(ProfileContext);

  const [sliderValue, setSliderValue] = useState(0);
  const maxValue = 1500;

  const onValueChange = (value) => {
  
        console.log(value);
        setTotalCoin(value)
        setCodePrice(totalPrice-(totalPrice-(value/100)))
        setSliderValue(totalPrice-(value/100));
        
        onValue(totalPrice-(value/100))
   

   
  };
  useEffect(() => {
    setSliderValue(totalPrice);
  
 }, [totalPrice])
 
  return (
    <>
    <View>
   
    <View style={styles.container}>
    {/* <Slider
       min={1}
       max={(Math.min(parseFloat(walletBalance), totalPrice * 100)).toFixed()}
       onChange={(value) => {
        console.log("totalPrice",(totalPrice-(value/100)).toString());

        onValueChange(value);
      }}
      onComplete={(value) => {
        onValueChange(value);
      }}
      width={350}
      height={34}
      step={1}

      maximumTrackTintColor="#c7c7c7"
      minimumTrackTintColor={Color.brand.colorButton}
      ballIndicatorColor={Color.brand.blue}
      ballIndicatorHeight={25}
      ballIndicatorWidth={60}
      ballIndicatorTextColor="#ffffff"
      /> */}
    <MotionSlider
    	title={i18n.t("Global.Gel")} 
        min={0} 
        max={Math.min(parseFloat(walletBalance), totalPrice * 100)}
        value={0} 
        decimalPlaces={1}
        units={'CST'}
        backgroundColor={[Color.brand.colorButton,Color.brand.colorButton,Color.brand.colorButton ]}
        onValueChanged={(value) =>onValueChange(value)}
        onPressIn={() => console.log('Pressed in')}
        onPressOut={() => console.log('Pressed out')}
        onDrag={() => console.log('Dragging')}
    />
        {/* <View style={{   width:`100%`,
    flexDirection: 'row',
    alignItems: 'center',
    position:'absolute',
    bottom:45,
    justifyContent:'space-between'}}>
  
        <Text style={styles.text}>Slider Value:</Text>
        <Text style={styles.text}>Max Value: {Math.min(parseFloat(walletBalance), totalPrice * 100).toFixed()}</Text>
     
    </View> */}
    </View>
  
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {

    width:`100%`,
    flexDirection: 'row',
   
  
    justifyContent:'center'
  },
  textContainer: {
  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default SliderComponent;