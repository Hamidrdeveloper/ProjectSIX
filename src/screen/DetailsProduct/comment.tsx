import React, {useContext, useEffect, useRef, useState} from 'react';
import {FormProvider, useController, useForm} from 'react-hook-form';
import {Image, Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import {Rating} from 'react-native-elements';
import { ChevronDownCircle } from 'react-native-iconly';
import {LoadingButton} from '../../components/buttonLoading';
import {ControlledInput} from '../../components/textInputController';
import {Padding} from '../../css/main.style';
import {Color} from '../../infrastructuer/theme/colors.style';
import {Space} from '../../infrastructuer/theme/space.style';
import {CommentContext} from '../../service/Comment/Comment.context';
import * as Type from '../../service/Comment/types';
import i18n from '../../core/i18n/config';

export default function CommentModal({show, onChange, id}) {
  const {...methods} = useForm();
  const [rating, setRating] = useState('1');
  const [openComment, setOpenComment] = useState(show);
  const [formError, setError] = useState<Boolean>(false);

  let dropDownAlertRef = useRef();
  const {crateCommentFn, sendComment, sendCommentLoading} =
    useContext(CommentContext);
  function onSubmit(data: Type.Comments) {
    let vars = {...data, user_rate: rating, product_variation_id: id};
    console.log('Comments', vars);
    if (data.title.length > 1 && data.description.length > 1) {
      crateCommentFn(vars);
    } else {
      dropDownAlertRef.alertWithType(
        'error',
        'All fields marked with an asterisk must be filled',
      );
    }
  }
  useEffect(() => {
    setOpenComment(show);
  }, [show]);
  useEffect(() => {
    if (sendComment) {
      dropDownAlertRef.alertWithType('success', 'successfully');
      onChange();
      setOpenComment(false);
    }
  }, [sendComment]);
  const onError: SubmitErrorHandler<FormValues> = errors => {
    dropDownAlertRef.alertWithType(
      'error',
      'All fields marked with an asterisk must be filled',
    );

    return console.log('errors', errors);
  };
  const RatingControl = (name, rules, defaultValue) => {
    return (
      <>
        <Rating
          imageSize={30}
          defaultRating={1}
          ratingCount={5}
          startingValue={rating}
          onFinishRating={e => setRating(e)}
          style={{paddingVertical: 10}}
        />
      </>
    );
  };
  return (
    <>
      <Modal transparent visible={openComment}>
        <View
          style={{
            width: `100%`,
            height: `100%`,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: Color.brand.white,
              width: `90%`,
              height: 520,
              borderRadius: 15,
              padding: 15,
            }}>
            <FormProvider {...methods}>
              <Text>{i18n.t("Global.RateThisProduct")}</Text>
              <Space lineH={15} />
              <RatingControl
                name="title"
                label="title"
                rules={{required: 'Password is required!'}}
              />
              <Space lineH={15} />
              <ControlledInput
                name="title"
                label={i18n.t("Global.Title")}
                rules={{required: 'Password is required!'}}
                setFormError={setError}
              />
              <Space lineH={15} />
              <ControlledInput
                name="description"
                label={i18n.t("Global.Description")}
            
                rules={{required: 'Password is required!'}}
                style={{
                  width: '100%',
                  height: 150,
                  borderWidth: 1,
                  borderColor: Color.brand.grey,
                  borderRadius: 10,
                }}
                setFormError={setError}
              />
              <LoadingButton
                isActive={sendCommentLoading}
                title={i18n.t("Global.Submit")}
              
                onNext={methods.handleSubmit(onSubmit, onError)}
                onClose={() => {}}
              />
            </FormProvider>
            <TouchableOpacity
              onPress={() => {
                // setShow(false);
                onChange();
                setOpenComment(false);
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                width: 40,
                height: 40,
                position: 'absolute',
                top: -15,
                right: 0,
                backgroundColor: '#fff',
                borderRadius: 30,
              }}>
              <ChevronDownCircle
                set="broken"
                primaryColor="black"
              />
            </TouchableOpacity>
          </View>
          <DropdownAlert
        titleNumOfLines={3}
        renderImage={props => {
          return (
            <Image
            resizeMode='center'
              style={{width: 50, height: 30,tintColor:Color.brand.white}}
              source={require('../../assets/image/cleafin_logo.png')}
            />
          );
        }}
        ref={ref => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }}
      />
        </View>
      </Modal>

      
    </>
  );
}
