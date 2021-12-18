import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Card, SearchBar} from "react-native-elements";

export default function App() {

  return (
      <View>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.menuImg} source={require('./assets/delivery-man.png')}/>
              <Text style={{color: 'white'}}>  Lieu sélectionné </Text>
              <Image style={styles.menuArrow} source={require('./assets/arrow-down.png')}/>
            </View>
            <View>
              <Image style={styles.menuImg} source={require('./assets/userProfile.png')}/>
            </View>

          </View>
          <SearchBar placeholder="Plats desserts..." containerStyle={{ paddingBottom: 0, backgroundColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, elevation: 14,}} inputContainerStyle={{borderRadius: 100, backgroundColor: 'white'}} color='black'/>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/burger.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Burgers</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/pizza2.png')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Pizzas</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/sushi.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sushis</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/gateau.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Gâteaux</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/tacos.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Tacos</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/sandwich.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sandwichs</Text>
              </ImageBackground>
            </Card>

          </ScrollView>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/1.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/2.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/3.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/4.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/5.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
            <Card containerStyle={styles.promoCard}>
              <ImageBackground source={require('./assets/6.png')} style={styles.imgCategories} resizeMode="cover"/>
            </Card>
          </ScrollView>

            <View>
              <View style={styles.titles}>
                <Text style={styles.title}>Exclusivement sur Deliveroo</Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
                <Card containerStyle={styles.bigCard}>
                  <ImageBackground source={{uri:'https://media.vogue.fr/photos/5ecb8735877822cdea1d105a/2:3/w_2560%2Cc_limit/Bouillon%2520Service%2520_%25C2%25A9Benoit%2520Linero%2520(3).jpg'}} style={styles.imgBigCard} resizeMode="cover">
                    <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                      <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtExclu}>En exclusivité</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtTime}>10-15 min</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                    <Text style={styles.titleBigCard}>🌭 Bouillons Services !</Text>
                    <Text style={styles.categorieTitleBigCard}>Soupe . Pâtes . Équilibré</Text>
                    <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
                    <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
                    <Text style={styles.kmBigCard}>📍 à 1.4 km . 3.49 € de livraison</Text>
                  </View>
                </Card>
                <Card containerStyle={styles.bigCard}>
                  <ImageBackground source={{uri:'https://static.lexpress.fr/medias_10383/w_1811,h_1359,c_crop,x_222,y_0/w_640,h_358,c_fill,g_center/v1428482719/bibimbap-plat-typique-coreen_5316341.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                    <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                      <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtExclu}>En exclusivité</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtTime}>15-25 min</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                    <Text style={styles.titleBigCard}>👨🏻‍🍳 Pierre Sang - Express</Text>
                    <Text style={styles.categorieTitleBigCard}>Coréen . Asiatique . Desserts . Salades</Text>
                    <Text style={styles.evalBigCard}>⭐️ 4.8 Excellent</Text>
                    <Text style={styles.likeBigCard}>🥰 500 personnes ont aimé</Text>
                    <Text style={styles.kmBigCard}>📍 à 1.7 km . 3.49 € de livraison</Text>
                  </View>
                </Card>
                <Card containerStyle={styles.bigCard}>
                  <ImageBackground source={{uri:'https://www.discoverwalks.com/blog/wp-content/uploads/2018/03/everythingyouneedtoknowaboutparisiansandwichshops5-816x408.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                    <View style={{position: 'absolute', top: 10, marginLeft: 10}}>
                      <View style={{borderRadius: 5, backgroundColor: '#00c2b3', width:120, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtExclu}>En exclusivité</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                      <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                        <Text style={styles.txtTime}>15-25 min</Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                    <Text style={styles.titleBigCard}>🇮🇹 Novettino</Text>
                    <Text style={styles.categorieTitleBigCard}>Italien . Sandwichs . Desserts . Edenred</Text>
                    <Text style={styles.evalBigCard}>⭐️ 4.7 Excellent</Text>
                    <Text style={styles.likeBigCard}>🥰 58 personnes ont aimé</Text>
                    <Text style={styles.kmBigCard}>📍 à 1.7 km . 3.49 € de livraison</Text>
                  </View>
                </Card>
              </ScrollView>
          </View>

          <View style={styles.titles}>
            <Text style={styles.title}>À la une</Text>
            <Text style={styles.subTitle}>Annonces payantes de nos partenaires</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
            <Card containerStyle={styles.bigCard}>
              <ImageBackground source={{uri:'https://foobe.com.ar/wp-content/uploads/2020/12/pizza-hut-scaled.jpeg'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                  <View style={{borderRadius: 25, backgroundColor: 'white', width:75, shadowColor: "#000",shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12}}>
                    <Text style={styles.txtTime}>15-30 min</Text>
                  </View>
                </View>
              </ImageBackground>
              <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                <Text style={styles.titleBigCard}>🍕 Pizza Hut</Text>
                <Text style={styles.categorieTitleBigCard}>Italien . Pizzas</Text>
                <Text style={styles.evalBigCard}>⭐️ 4.4 Très bien</Text>
                <Text style={styles.likeBigCard}>🥰 16 personnes ont aimé</Text>
                <Text style={styles.promoBigCard}>Commandez pour 25 €, profitez de -25%</Text>
              </View>
            </Card>
            <Card containerStyle={styles.bigCard}>
              <ImageBackground source={require('./assets/bk.png')} style={styles.imgBigCard} resizeMode="cover">
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                  <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                    <Text style={styles.txtTime}>5-10 min</Text>
                  </View>
                </View>
              </ImageBackground>

              <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                <Text style={styles.titleBigCard}>🍔 Burger King</Text>
                <Text style={styles.categorieTitleBigCard}>Fast-food . Burgers</Text>
                <Text style={styles.evalBigCard}>⭐️ 4.4 Très bien</Text>
                <Text style={styles.kmBigCard}>📍 à 1.2 km . 3 € de livraison</Text>
              </View>
            </Card>
            <Card containerStyle={styles.bigCard}>
              <ImageBackground source={{uri:'https://b.zmtcdn.com/data/pictures/2/16512172/9410759d611db9c62c3acc23c1f27e06.jpg'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                  <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                    <Text style={styles.txtTime}>5-10 min</Text>
                  </View>
                </View>
              </ImageBackground>
              <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                <Text style={styles.titleBigCard}>🐥 KFC</Text>
                <Text style={styles.categorieTitleBigCard}>Fast-Food . Poulet</Text>
                <Text style={styles.evalBigCard}>⭐️ 3.9 Bien</Text>
                <Text style={styles.likeBigCard}>🥰 44 personnes ont aimé</Text>
                <Text style={styles.kmBigCard}>📍 à 1.23 km . 2.99 € de livraison</Text>
              </View>
            </Card>
            <Card containerStyle={styles.bigCard}>
              <ImageBackground source={{uri:'https://pbs.twimg.com/media/B6HYx2-CcAA5juW?format=jpg&name=small'}} style={styles.imgBigCard} resizeMode="cover">
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 20}}>
                  <View style={{borderRadius: 25, backgroundColor: 'white', width:75,}}>
                    <Text style={styles.txtTime}>5-10 min</Text>
                  </View>
                </View>
              </ImageBackground>
              <View style={{flexDirection: "column", justifyContent: 'flex-end'}}>
                <Text style={styles.titleBigCard}>🥪 Subway</Text>
                <Text style={styles.categorieTitleBigCard}>Fast-Food . Sandwich</Text>
                <Text style={styles.evalBigCard}>⭐️ 4.6 Très bien</Text>
                <Text style={styles.likeBigCard}>🥰 100 personnes ont aimé</Text>
                <Text style={styles.kmBigCard}>📍 à 0.98 km . 2.49 € de livraison</Text>
              </View>
            </Card>
          </ScrollView>

          <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 20}}>
            <TouchableOpacity onPress={() => Alert.alert('Not Available yet')} style={{backgroundColor: '#00c2b3', textAlign: 'center', borderRadius: 10, width: 300}}>
              <View style={styles.button}>
                <Text style={{textAlign: 'center',paddingVertical: 10, color: 'white' }}>Afficher les 3260 restaurants</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#00c2b3',
    paddingTop: 50,
    marginBottom: -35
  },
  headerLeft:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    paddingBottom: 30
  },
  searchBar: {
    marginTop: 10,
    backgroundColor: '#C2C2C2',
  },
  menuImg:{
    width:30,
    height: 30
  },
  menuArrow:{
    width:10,
    height: 10
  }, cardCategories:{
    borderRadius: 10,
    width: 80,
    height: 80,
    borderWidth: 0,
    padding: 0,
    margin: 4,
    marginTop: 10,
  },
  imgCategories: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: "column",
    justifyContent: 'flex-end',

  },
  textCategories:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 2.5,
    paddingRight: 2.5,
    paddingBottom: 5
  },
  promoCard:{
    borderRadius: 10,
    width: 350,
    height: 180,
    borderWidth: 0,
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    marginRight: -5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  titles: {
    flexDirection: "column",
    paddingLeft: 10
  },
  bigCard: {
    width: 320,
    height: 320,
    borderWidth: 0,
    padding: 0,
    borderRadius: 10,
    margin:5
  },
  imgBigCard:{
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    flexDirection: "column",
    justifyContent: 'flex-end',
    margin: 'auto',
    textAlign: 'center'
  },
  titleBigCard:{
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 10

  },
  categorieTitleBigCard:{
    fontStyle: 'italic',
    fontSize: 16,
    paddingLeft: 10
  },
  evalBigCard:{
    fontSize: 16,
    paddingLeft: 10,
    color: '#00c2b3',
  },
  likeBigCard:{
    fontSize: 16,
    paddingLeft: 10,
  },
  promoBigCard:{
    fontSize: 16,
    paddingLeft: 10,
    color: 'red',
  },
  kmBigCard:{
    color: 'gray',
    fontSize: 16,
    paddingLeft: 10,
  },
  txtTime: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  txtExclu:{
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    color: 'white'
  },

});
