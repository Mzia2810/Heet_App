import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, images } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import { HeadingMain, } from '@components'
import { ModalView, PrimaryButton, } from '@screens'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const data = [
  { id: '1', text: 'Ava', para: 'Arizona, US', img: images.one },
  { id: '2', text: 'Josh', para: 'Arizona, US', img: images.two },
  { id: '3', text: 'Alex', para: 'Arizona, US', img: images.three },
  { id: '4', text: 'Charlie, 24', para: 'Arizona, US', img: images.four },
  { id: '5', text: 'Anjelina', para: 'Arizona, US', img: images.five },
  { id: '6', text: 'Selena', para: 'Arizona, US', img: images.six },
  // Add more data as needed
];

const LikeScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {
      setSelectedItemId(item.id);
      setModalVisible(true);
    }}>
      <View style={{ position: 'absolute', zIndex: 1000, margin: 20 }}>
        <HeadingMain textStyle={styles.heading} title={item.text} />
        <Text style={{ textAlign: 'left', color: Colors.bgWhite }}>{item.para}</Text>
      </View>
      <Image source={item.img} style={styles.swipeImg} />
      


    </TouchableOpacity>
  )


  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.bgWhite }}>
      <View style={styles.headingView}>
        <HeadingMain title={'See Who Liked You'} textStyle={styles.textHeading} />
        <PrimaryButton
          title={'Show List'}
          style={styles.button}
          textStyle={styles.text}
          icon={<MaterialCommunityIcons name='panorama' size={30} color={Colors.bgWhite} />}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.list}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}> 104 Likes </Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
          {selectedItemId && (
        <ModalView
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          itemId={selectedItemId}
          data={data}
        />
      )}
      </View>

    

    </ScrollView>
  )
}

export default LikeScreen

const styles = StyleSheet.create({
  // viewText:{position:'absolute',zIndex:1000, backgroundColor:'red',margin:20},
  heading: {
    fontSize: getSize(25),
    fontStyle: 'italic',
    textAlign: 'left',
    color: Colors.bgWhite,
    fontWeight: 'bold',
  },
  swipeImg: {
    width: getWidth(40),
    height: getHeight(30),
    borderRadius: 20
  },
  list: {
    width: getWidth(90),
    alignSelf: 'center',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  itemText: {
    fontSize: 18,
  },
  line: {
    borderWidth: 0.2,
    borderColor: Colors.borderColor,
    marginVertical: getHeight(2)
  },
  textHeading: {
    color: Colors.bgBlack,
    fontSize: getSize(30), lineHeight: 36,
    fontWeight: 'bold'
  },
  headingView: {
    width: getWidth(90),
    alignSelf: 'flex-start',
    marginHorizontal: getWidth(5),
    marginTop: getHeight(3)
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: getWidth(40),
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: getHeight(1),
    backgroundColor: Colors.textOrange,
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  text: {
    fontSize: getSize(15),
    color: Colors.bgWhite,
    textAlign: 'left',
    lineHeight: 18,

  },




})