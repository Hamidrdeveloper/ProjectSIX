import React from 'react';
import {Image} from 'react-native';
import {Text, View} from 'react-native';
import {
  Call,
  CloseSquare,
  Edit,
  IconlyProvider,
  Message,
} from 'react-native-iconly';
import {BackgroundView, Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {regexHtml} from '../../utils/main';

export default function PartnerDetailScreen({navigation, route}) {
  let partner =route.params.params;

  return (
    <BackgroundView>
      <View
        style={{
          flexDirection: 'row',
          width: `100%`,
          height: 50,
          padding: 15,
          backgroundColor: Color.brand.white,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Color.brand.black, fontSize: 18}}>
          {'Partner detail'}
        </Text>
        <IconlyProvider
          primaryColor={Color.brand.black}
          secondaryColor={Color.brand.black}
          stroke="bold"
          size="xlarge">
          <CloseSquare onPress={()=>navigation.goBack()}/>
        </IconlyProvider>
      </View>
      <Padding>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 115, height: 115, borderRadius: 115}}
            source={require('../../assets/image/avatarman.png')}
          />
          <Space lineW={8} />
          <View>
            <Text style={{fontSize: 17, color: Color.brand.black}}>
              {partner?.firstName+" "+partner?.lastName}
              {/* <Text style={{fontSize: 12, color: Color.brand.green}}>
                {'   ' + 'Level1'}
              </Text> */}
            </Text>
            <Space lineH={8} />
            <Text style={{fontSize: 15, color: Color.brand.black}}>
              {'Independent Cleafin sales partner'}
            </Text>
            <Space lineH={8} />

            <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
              {'Location: '+partner?.address_complete.replace(regexHtml,',')}
            </Text>
            <Space lineH={8} />

            <Text style={{fontSize: 14, color: Color.brand.textGrey}}>
              {'Number Of Customers : '+partner?.user_id}
            </Text>
          </View>
        </View>
        <Space lineH={30} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: `100%`,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Message size={'medium'} primaryColor={Color.brand.black} />
            <Space lineW={5} />
            <Text style={{fontSize: 14, color: Color.brand.black}}>
              {partner?.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Call size={22} primaryColor={Color.brand.black} />
            <Space lineW={5} />
            <Text style={{fontSize: 14, color: Color.brand.black}}>
            {partner?.mobile}
            </Text>
          </View>
        </View>
        <Space lineH={30} />
        {/* <Text numberOfLines={15} style={{fontSize: 15, color: Color.brand.black}}>
          {`Grease + grime don’t stand a chance not with powergreen™ technology in your grasp. Each squirt
 in all its lovely non-toxic glory, delivers a powerful cleaning punch with naturally derived,
biodegradable ingredients. Cleaners derived from Corn + coconut break down dirt, leaving
nothing behind but the pleasant scent of victory.
Safe, effective cleaning for non-porous surfaces

Naturally derived formulas + nature-inspired fragrances

Recyclable bottle made with 100% recycled plastic (PCR)

Never tested on animals

Safe, effective cleaning for all surfaces

Cradle to Cradle® certified

People friendly • home friendly • planet friendl`}
        </Text> */}
      </Padding>
      <View
         style={{
          width: `100%`,
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center',
          justifyContent: 'center',
          padding:15,
         
        }}>
      <View
            style={{
              height: 50,
              width: `100%`,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: Color.brand.colorButton,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 18,
                color: Color.brand.white,
              }}>
              {'Submit'}
            </Text>
          </View>
          </View>
    </BackgroundView>
  );
}
