import React, { useContext, useEffect } from "react";
import { Dimensions, FlatList, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import { Download } from "react-native-iconly";
import HeaderScComponent from "../../components/header2";
import { BackgroundView } from "../../css/main.style";
import { Color } from "../../infrastructuer/theme/colors.style";
import { Space } from "../../infrastructuer/theme/space.style";
import { ProfileContext } from "../../service/Profile/Profile.context";
import { BASE_URL } from "../../utils/main";

export default function DocumentScreen({navigation}) {
  const { listDocument ,documentFn} = useContext(ProfileContext);
  useEffect(() => {
    setTimeout(() => {
        documentFn()
    }, 2000);
 
    return ;
  }, [])
 
  const ItemDocument =({item}) =>{
   
    
    return <>
     <TouchableOpacity
     onPress={()=>{Linking.openURL("https://api.cleafin.shop"+item.item.link)}}   >
     <Card
        containerStyle={{width:(Dimensions.get('window').width/2)-30,height:150,borderRadius:12,padding:0,alignItems:'center'}}>
       <View style={{width:`100%`,alignItems:'center',padding:4}}>
        <Download
        size={50}/>
        <Text style={{color:"black"}}>{item.item.order_id}</Text>
        <Text style={{color:"black"}}>{new Date(item.item.created_at).toUTCString().toString()}</Text>
        <Text style={{color:"black"}}>{item.item.documentType?.name}</Text>
        
        </View>
        </Card>
       
        </TouchableOpacity>
    </>
  }
  return (
    <>
     <BackgroundView>
      <ScrollView>
    <HeaderScComponent title={'Orders'} navigation={navigation} />
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={listDocument}
        numColumns={2}
        renderItem={(document)=> <ItemDocument item={document}/>}/>
<Space lineH={50}/>
    </ScrollView>
      
      </BackgroundView>
    </>
  );
}
