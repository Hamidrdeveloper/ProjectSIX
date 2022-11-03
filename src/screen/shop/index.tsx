/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Rating, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import FlatListSlide from "../../components/slideList";
import {
  Background,
  Brand,
  ButtonAddTo,
  CardSuggest,
  CategoryBrand,
  CategoryImageBrand,
  CategoryTextBrand,
  FullImage,
  ImageAdvertisement,
  ImageAdvertisementShadow,
  ImageOffer,
  ImagePlus,
  ImageSuggest,
  ImageWhy,
  LabelButton,
  RowCenter,
  Scroll,
  SearchView,
  ButtonHeart,
  TextContact,
  TextPriceOffer,
  TextPriceThroughOffer,
  TextPriceUnitOffer,
  TextProductOffer,
  TextReviewAdvertisement,
  TextReviewOffer,
  TextReviewProducts,
  TextReviewStock,
  TextReviewSuggest,
  TitleMore,
  TitleStep,
  Touchable,
  ViewAdvertisement,
  ViewCenter,
  ViewItemWhy,
  ViewOffer,
  ViewProducts,
  ViewRowAdvertisement,
  ViewSuggest,
  ViewWhyCleafin,
  ButtonCategory,
  ImageSuggestCard,
} from "./style/shop.style";
import { Space } from "../../infrastructuer/theme/space.style";
import {
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  Animated,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Color } from "../../infrastructuer/theme/colors.style";
import { Text } from "react-native";
import { ProductContext } from "../../service/Products/Product.context";
import { OfferItem } from "./type";
import NumberFormat from "react-number-format";
import { IMAGE_ADDRESS } from "../../utils/adress.api";
import { BasketContext } from "../../service/Basket/Basket.context";
import { ProductVariation } from "../../service/Products/types";
import { TransitionView } from "../../components/transitionView";
import Storage from "../../utils/storeData/index";
import { KEY } from "../../utils/storeData/key";
import { CheckSaveProduct } from "../../components/checkSaveProduct/index";
import {
  goToScreenCategory,
  goToScreenDetails,
} from "../../service/Products/Product.action";
import { CommentContext } from "../../service/Comment/Comment.context";
import SearchPageScreen from "./searchScreen";
import { Animations } from "./animations";
import { PartnerContext } from "../../service/Partner/Partner.context";
import useDebounce from "./useDebounce";
import ImageLoading from "../../components/imageLoading";
function ShopScreen({ navigation }) {
  const {
    productsItem,
    newProductsItem,
    categoriesItem,
    arrivalItem,
    footerImages,
    categoriesInformation,
    bestSellingItem,
    productByIdFn,
    relatedProductsFn,
    searchProductsFn,
    isProducts,
    mainPageSlider,
  } = useContext(ProductContext);
  const { getAllCommentIdFn } = useContext(CommentContext);
  const { partnerSelectId } = useContext(PartnerContext);

  const { addToBasket } = useContext(BasketContext);
  const [search, setSearch] = useState("");
  const [nameCategory, setNameCategory] = useState("");

  const [openPartner, setOpenPartner] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedValue = useDebounce<string>(search, 3000)
  useEffect(
    () => {
   
      if (search) {
        searchProductsFn(search, "");
        setIsSearching(true);
      } else {
        setIsSearching(false);
      }
    },
    [debouncedValue] // Only call effect if debounced search term changes
  );
  const updateSearch = (text: React.SetStateAction<string>) => {
    // setSearch(text);
  };

  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
  };
  function handleClickLink() {
    console.log("Don't know how to open URI: " + "www.google.com");
    Linking.openURL("https://nslag.com");
  }
  function brandItem() {
    return (
      <>
        <Brand source={require("../../assets/image/sampelimag.png")} />
      </>
    );
  }
  function Advertisement({ item }) {
    return (
      <>
        <ViewAdvertisement>
          <ImageAdvertisementShadow
            source={require("../../assets/image/shadowWith.png")}
          />
          <ViewRowAdvertisement>
            <ImageAdvertisement
              imageStyle={{ borderRadius: 20 }}
              source={{ uri: IMAGE_ADDRESS + item.file_path }}
            />
            {/* <TextReviewAdvertisement>
              {'Damit Ihre Fenster stets streifenfreie Sicht ermöglichen'}
            </TextReviewAdvertisement> */}
          </ViewRowAdvertisement>
        </ViewAdvertisement>
      </>
    );
  }
  function categoryItem({ item, index }) {
    return (
      <>
        <ButtonCategory
          onPress={() => {
            goToScreenCategory(navigation, item, searchProductsFn);
            setIsSearching(true);
            setNameCategory(item.name);
          }}
        >
          <CategoryBrand style={{ backgroundColor: `${item.color}` }}>
            <CategoryImageBrand
              source={
                item.file_path != null
                  ? { uri: IMAGE_ADDRESS + item.file_path }
                  : require("../../assets/image/cleafin_logo_star.png")
              }
            />
          </CategoryBrand>
          <Space lineH={8} />
          <CategoryTextBrand>{item.name}</CategoryTextBrand>
        </ButtonCategory>
      </>
    );
  }

  function offerItem({ item, index }: any) {
    let imageUrl;
    if (item?.productVariationFiles.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    console.log(imageUrl);

    return (
      <View style={{ alignItems: "center", width: 190, height: 280 }}>
        <Card
          containerStyle={{
            width: 180,
            height: 280,
            margin: 8,
            borderRadius: 8,
            padding: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              productByIdFn(item?.product?.id, navigation);
              goToScreenDetails(
                navigation,
                item,
                productByIdFn,
                getAllCommentIdFn,
                relatedProductsFn
              );
            }}
          >
            <View>
              {/* <ImageOffer
                style={{
                  position: "absolute",
                  width: `80%`,
                  alignSelf: "center",
                  height: 80,
                }}
                resizeMode={"cenetr"}
                source={require("../../assets/image/box.png")}
              /> */}
              <ImageLoading
                Com={ImageOffer}
                def={require("../../assets/image/box.png")}
                resizeMode={"contain"}
                
                src={
                  imageUrl
                    ? {
                        uri: IMAGE_ADDRESS + imageUrl,
                      }
                    : require("../../assets/image/box.png")
                }
              />
            </View>
            <ViewOffer>
              <Rating
                imageSize={12}
                onFinishRating={ratingCompleted}
                defaultRating={1}
                ratingCount={5}
                readonly
                startingValue={0}
                style={{ paddingVertical: 10 }}
              />
              <TextReviewOffer>{`(${
                item?.review_count == null ? 0 : item?.review_count
              } view)`}</TextReviewOffer>
            </ViewOffer>
            <Space lineH={5} />
            <TextProductOffer>{item.name}</TextProductOffer>
            {/* <Space lineH={5} />
            <NumberFormat
              value={parseInt(item?.sale_price.value)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              renderText={(value, props) => {
                return (
                  <TextPriceThroughOffer>
                    {value + ' ' + '€'}
                  </TextPriceThroughOffer>
                );
              }}
            /> */}
            <Space lineH={5} />
            <NumberFormat
              value={item?.sale_price.value}
              displayType={"text"}
              thousandSeparator={true}
              prefix={""}
              fixedDecimalScale={true}
              decimalScale={2}
              renderText={(value, props) => {
                return (
                  <TextPriceOffer>
                    {value.replace(".", ",") + " " + "€"}
                  </TextPriceOffer>
                );
              }}
            />
            <Space lineH={5} />
            {/* <TextPriceUnitOffer>{`Price  unit : ${item?.sale_price?.unit_price}`}</TextPriceUnitOffer>
            <Space lineH={5} /> */}
          </TouchableOpacity>
        </Card>
        <ButtonAddTo onPress={() => addToBasket(item)}>
          <LabelButton>{"Add to basket"}</LabelButton>
        </ButtonAddTo>
        <CheckSaveProduct item={item} />
      </View>
    );
  }
  function SuggestItem({ item, index }: any) {
    return (
      <>
        <CardSuggest>
          <TouchableOpacity
            onPress={() => {
              // goToScreenDetails(
              //   navigation,
              //   item,
              //   productByIdFn,
              //   getAllCommentIdFn,
              //   relatedProductsFn,
              // );
            }}
          >
            <ViewSuggest>
              {/* <ImageSuggestCard
                style={{
                  position: "absolute",
                  width: `80%`,
                  alignSelf: "center",
                  height: 80,
                }}
                resizeMode={"cenetr"}
                source={require("../../assets/image/box.png")}
              /> */}
              <ImageLoading
                Com={ImageSuggestCard}
                def={require("../../assets/image/box.png")}
                imageStyle={{ borderRadius: 15 }}
                src={{
                  uri: IMAGE_ADDRESS + item.file_path,
                }}
              />
              {/* <ViewCenter> */}
              <TextReviewSuggest>{item.title}</TextReviewSuggest>

              {/* <Rating
                  type="custom"
                  imageSize={12}
                  onFinishRating={ratingCompleted}
                  tintColor={Color.brand.suggestColor}
                  ratingCount={5}
                  readonly
                  startingValue={0}
                  ratingBackgroundColor="black"
                  style={{position: 'absolute', bottom: 12}}
                /> */}
              {/* </ViewCenter> */}
            </ViewSuggest>
          </TouchableOpacity>
        </CardSuggest>
      </>
    );
  }
  function renderItemForSecondList({ item, index }: any): any {
    let imageUrl;
    if (item?.productVariationFiles.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <ViewProducts>
        <Touchable
          onPress={() => {
            goToScreenDetails(
              navigation,
              item,
              productByIdFn,
              getAllCommentIdFn,
              relatedProductsFn
            );
          }}
        >
          <ViewSuggest>
             <ImageLoading
             Com={ImageSuggest}
             def={require("../../assets/image/box.png")}
             resizeMode={"contain"}
              src={{
                uri: IMAGE_ADDRESS + imageUrl,
              }}
            />
            <ViewCenter>
              <TextReviewProducts>{item.name}</TextReviewProducts>
              <Space lineH={10} />
              <RowCenter>
                <TextReviewStock>{`Just ${item.interval_order_quantity} in stock`}</TextReviewStock>
                <Space lineW={20} />
                <Space lineH={10} />
                <Touchable onPress={() => addToBasket(item)}>
                  <ImagePlus source={require("../../assets/image/plus.png")} />
                </Touchable>
              </RowCenter>
            </ViewCenter>
          </ViewSuggest>
        </Touchable>
      </ViewProducts>
    );
  }

  function renderItemNewestProducts({ item }) {
    let imageUrl;
    if (item?.productVariationFiles.length > 0) {
      imageUrl = item?.productVariationFiles[0].file;
    } else {
      imageUrl = item?.product?.file;
    }
    return (
      <View style={{ alignItems: "center", height: 290 }}>
        <Card
          containerStyle={{
            width: (Dimensions.get("screen").width - 30) / 2,
            height: 280,
            margin: 8,
            borderRadius: 8,
            padding: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              goToScreenDetails(
                navigation,
                item,
                productByIdFn,
                getAllCommentIdFn,
                relatedProductsFn
              );
            }}
          >
          
             <ImageLoading
             Com={ImageOffer}
             def={require("../../assets/image/box.png")}
              resizeMode={"stretch"}
              src={{
                uri: IMAGE_ADDRESS + imageUrl,
              }}
            />
            <ViewOffer>
              <Rating
                imageSize={12}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
                ratingCount={5}
                readonly
                startingValue={0}
              />
              <TextReviewOffer>{`(${
                item?.review_count == null ? 0 : item?.review_count
              } view)`}</TextReviewOffer>
            </ViewOffer>
            <Space lineH={5} />
            <TextProductOffer>{item.name}</TextProductOffer>
            {/* <Space lineH={5} />
            <NumberFormat
              value={parseInt(item?.sale_price.value)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={''}
              renderText={(value, props) => {
                return (
                  <TextPriceThroughOffer>
                    {value + ' ' + '€'}
                  </TextPriceThroughOffer>
                );
              }}
            /> */}
            <Space lineH={5} />
            <NumberFormat
              value={item?.sale_price.value}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={""}
              renderText={(value, props) => {
                return (
                  <TextPriceOffer>
                    {value?.replace(".", ",") + " " + "€"}
                  </TextPriceOffer>
                );
              }}
            />
            <Space lineH={5} />
            {/* <TextPriceUnitOffer>{`Price  unit : ${item?.sale_price.unit_price}`}</TextPriceUnitOffer>
            <Space lineH={5} /> */}
          </TouchableOpacity>
        </Card>
        <ButtonAddTo style={{ width: 150 }} onPress={() => addToBasket(item)}>
          <LabelButton>{"Add to basket"}</LabelButton>
        </ButtonAddTo>
        <CheckSaveProduct item={item} />
      </View>
    );
  }
  function renderItemProducts({ item, index }) {
    return <FlatList data={item} renderItem={renderItemForSecondList} />;
  }
  const [bounceValue, setBounceValue] = useState(100);
  function _toggleSubview() {
    setOpenPartner(!openPartner);
  }
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "#fff" }}>
      <Background>
        {partnerSelectId != null ? <Animations open={openPartner} /> : null}
        {!isSearching ? (
          <Scroll
            scrollEventThrottle={160}
            onScrollEndDrag={(event) => {
              if (event.nativeEvent.contentOffset.y > 293) {
                _toggleSubview();
              }
              console.log(event.nativeEvent.contentOffset.y);
            }}
          >
            <Space lineH={35} />
            <SearchView
              placeholder="Search On Cleaning"
              onChangeText={(e: any) => setSearch(e)}
              value={search}
              searchIcon={() => <Icon color={"gry"} size={30} name="search1" />}
            />
            <Space lineH={25} />
            <FlatListSlide
              data={mainPageSlider}
              renderItem={Advertisement}
              snap={0}
              height={210}
            />
            <Space lineH={25} />
            <FlatListSlide
              data={categoriesItem}
              renderItem={categoryItem}
              snap={5}
              height={85}
            />
            <Space lineH={25} />
            <TitleStep>{"Offers"}</TitleStep>
            <Space lineH={25} />
            <FlatListSlide
              data={productsItem}
              renderItem={offerItem}
              snap={5}
              height={330}
              isLoading={isProducts}
            />
            <Space lineH={25} />
            <TitleStep>{"Why Cleafin"}</TitleStep>
            <Space lineH={25} />
            <ViewWhyCleafin>
              <ViewItemWhy
                onPress={() => {
                  handleClickLink();
                }}
              >
                <ImageWhy source={require("../../assets/image/car.png")} />
                <TextContact>{"Easy to use"}</TextContact>
              </ViewItemWhy>
              <ViewItemWhy
                onPress={() => {
                  handleClickLink();
                }}
              >
                <ImageWhy source={require("../../assets/image/phone.png")} />
                <TextContact>{"contact us"}</TextContact>
              </ViewItemWhy>
              <ViewItemWhy
                onPress={() => {
                  handleClickLink();
                }}
              >
                <ImageWhy source={require("../../assets/image/private.png")} />
                <TextContact>{"Online support"}</TextContact>
              </ViewItemWhy>
            </ViewWhyCleafin>
            <Space lineH={45} />
            <TitleStep>{"New arrival Products"}</TitleStep>
            <Space lineH={25} />
            <FlatListSlide
              data={arrivalItem}
              renderItem={offerItem}
              snap={5}
              height={330}
            />
            <Space lineH={25} />
            <FlatListSlide
              data={footerImages}
              renderItem={SuggestItem}
              snap={5}
              height={160}
            />
            <Space lineH={45} />
            {/* <TitleStep>{'Best selling Products'}</TitleStep> */}
            {/* <Space lineH={25} />
          <FlatListSlide
            data={bestSellingItem}
            renderItem={renderItemProducts}
            snap={5}
            height={380}
          /> */}
            <FlatListSlide
              data={categoriesInformation}
              renderItem={Advertisement}
              snap={0}
              height={210}
            />
            <Space lineH={25} />
            <TitleStep>{"Newest Products"}</TitleStep>
            <Space lineH={25} />
            <FlatList
              data={newProductsItem}
              renderItem={(value) => renderItemNewestProducts(value)}
              numColumns={2}
              initialNumToRender={5}
              windowSize={5}
            />
            <Space lineH={25} />
          </Scroll>
        ) : (
          <SearchPageScreen
            value={search}
            navigation={navigation}
            nameCategory={nameCategory}
            onChange={(value) => updateSearch(value)}
            onShow={() => {
              setIsSearching(false);
            }}
          />
        )}
      </Background>
    </SafeAreaView>
  );
}

export default ShopScreen;
