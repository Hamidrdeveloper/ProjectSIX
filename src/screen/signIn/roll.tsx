import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBoxIcon from 'react-native-elements/dist/checkbox/CheckBoxIcon';
import { LoadingButton } from '../../components/buttonLoading';
import { CheckBox } from '../../components/checkBox/index';
import i18n from '../../core/i18n/config';
import { Color } from '../../infrastructuer/theme/colors.style';
import { AuthContext } from '../../service/Auth/Auth.context';

const ModalWithCheckBox = ({navigation}) => {
  const [isChecked, setChecked] = useState(false);
  const { t: mainT } = useTranslation()
  const {legals,showLegals,isLegals} =
  useContext(AuthContext);
  const handleCheckBox = (legal) => {
    setChecked(!isChecked);
  };
  const pages = [
   {
      title: mainT('Footer.Menus.ReturnPolicy'),
      link: '/legals/returns_and_replacements',
    },
    {
      title: mainT('Footer.Menus.Terms'),
      link: '/legals/term_conditions',
    },
     {
      title: mainT('Footer.Menus.LegalDisclosure'),
      link: '/legals/legal_disclosure',
    },
    {
      title: mainT('Footer.Menus.PrivacyPolicy'),
      link: '/legals/privacy_policy',
    },
    {
      title: mainT('Footer.Menus.ReturnForms'),
      link: '/legals/return_forms',
    },
    {
      title: mainT('Footer.Menus.DeliveryPolicy'),
      link: '/legals/delivery_policy',
    },
     {
      title: mainT('Footer.Menus.PaymentPolicy'),
      link: '/legals/payment_policy',
    },
]


  return (
    <Modal animationType="fade" transparent visible={showLegals}>
      <View style={styles.container} >
      <View  style={{width:370,
    height:400, backgroundColor:"#fff",borderRadius:15,paddingTop:8,marginBottom:1}}>
        <View style={{height:50,paddingLeft:10,paddingRight:10}}>
        <Text style={{ color: Color.brand.black ,fontSize:18,textAlign:'center',fontWeight:'bold'}} >
        {mainT('Policy.Accept')}
        </Text>
        </View>
      {pages?.map(legal => (
  <View key={`legal-${legal}`} style={{paddingLeft:8,justifyContent:'center'}}>
    <View style={{ flexDirection: 'row', alignItems: 'center' ,margin:5}}>
      {/* <CheckBoxIcon/> */}
      <Text>
        {mainT('Policy.Text')}{' '}
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://cleafin.shop'+legal.link)}>
        <Text style={{ color: Color.brand.blue }} >
          {legal.title}
        </Text>
        </TouchableOpacity>
    </View>
  </View>
))}
<LoadingButton
                  isActive={false}
                  title={i18n.t("Global.Submit")}
                  
                  onNext={() => {
                    navigation.replace('Bottom_SCREEN');
                    isLegals(false)
                }}
                />
                <LoadingButton
                  isActive={false}
                  title={i18n.t("Global.NoCancle")}
                  color={"#ccc"}
                  onNext={() => {isLegals(false)}}
                />
</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalBody: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalFooter: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalWithCheckBox;
