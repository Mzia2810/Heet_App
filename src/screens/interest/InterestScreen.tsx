import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@assets'
import { getHeight, getSize, getWidth } from '@helpers'
import { HeadingMain } from '@components';
import { PrimaryButton } from '@screens';


const data = [
    { id: '1', text: 'Running' },
    { id: '2', text: 'Gym' },
    { id: '3', text: 'Dancing' },
    { id: '4', text: 'Art' },
    { id: '5', text: 'Baking' },
    { id: '6', text: 'Podcasts' },
    { id: '7', text: 'Birds' },
    { id: '8', text: 'Perfume' },
    { id: '9', text: 'Sea' },
    { id: '10', text: 'Running' },
    { id: '11', text: 'Gym' },
    { id: '12', text: 'Dancing' },
    { id: '13', text: 'Podcasts' },
    { id: '14', text: 'Perfume' },
    // Add more items as needed
];

const InterestScreen = () => {


    const [itemId, setItemId] = useState(null)
    const [itemIdMusic, setItemIdMusic] = useState(null)
    const [itemIdMovies, setItemIdMovies] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <HeadingMain title={'Interests'} textStyle={styles.textHeading1} />
                <HeadingMain title={'(0/10)'} textStyle={styles.textHeading2} />
            </View>
            <View style={styles.spacer}></View>

            
            <View style={styles.top}>
                <HeadingMain title={'Lifestyle'} textStyle={styles.textHeading3} />
            </View>

            <View style={[{ marginVertical: getHeight(1) }, styles.top]}>
                <FlatList
                    numColumns={4}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: getSize(6) }}  >
                            <PrimaryButton
                                key={item.id}
                                onPress={() => setItemId(item.id)}
                                title={item.text}
                                style={{
                                    width: 'auto',
                                    marginVertical: getHeight(0.4),
                                    backgroundColor: itemId == item.id ? Colors.textOrange : Colors.bgWhite,
                                    borderWidth: 1,
                                    borderColor: itemId == item.id ? Colors.textOrange : Colors.text,
                                    padding: 5,
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                }}
                                textStyle={{
                                    fontWeight:'600',
                                    fontSize: getSize(15),
                                    color: itemId == item.id ? Colors.bgWhite: Colors.text,
                                    textAlign: 'left',
                                    lineHeight: 18,
                                }} />
                        </View>)
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={styles.top}>
                <HeadingMain title={'Music'} textStyle={styles.textHeading3} />
            </View>

            <View style={[{ marginVertical: getHeight(1) }, styles.top]}>
                <FlatList
                    numColumns={4}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: getSize(6) }}  >
                            <PrimaryButton
                                key={item.id}
                                onPress={() => setItemIdMusic(item.id)}
                                title={item.text}
                                style={{
                                    width: 'auto',
                                    marginVertical: getHeight(0.4),
                                    backgroundColor: itemIdMusic == item.id ? Colors.textOrange : Colors.bgWhite,
                                    borderWidth: 1,
                                    borderColor: itemIdMusic == item.id ? Colors.textOrange : Colors.text,
                                    padding: 5,
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                }}
                                textStyle={{
                                    fontWeight:'600',
                                    fontSize: getSize(15),
                                    color: itemIdMusic == item.id ? Colors.bgWhite: Colors.text,
                                    textAlign: 'left',
                                    lineHeight: 18,
                                }} />
                        </View>)
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={styles.top}>
                <HeadingMain title={'Movies'} textStyle={styles.textHeading3} />
            </View>

            <View style={[{ marginVertical: getHeight(1) }, styles.top]}>
                <FlatList
                    numColumns={4}
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ marginHorizontal: getSize(6) }}  >
                            <PrimaryButton
                                key={item.id}
                                onPress={() => setItemIdMovies(item.id)}
                                title={item.text}
                                style={{
                                    width: 'auto',
                                    marginVertical: getHeight(0.4),
                                    backgroundColor: itemIdMovies == item.id ? Colors.textOrange : Colors.bgWhite,
                                    borderWidth: 1,
                                    borderColor: itemIdMovies == item.id ? Colors.textOrange : Colors.text,
                                    padding: 5,
                                    paddingHorizontal: 15,
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                }}
                                textStyle={{
                                    fontWeight:'600',
                                    fontSize: getSize(15),
                                    color: itemIdMovies == item.id ? Colors.bgWhite: Colors.text,
                                    textAlign: 'left',
                                    lineHeight: 18,
                                }} />
                        </View>)
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    )
}

export default InterestScreen

const styles = StyleSheet.create({
    text: {
        fontSize: getSize(15),
        color: Colors.bgBlack,
        textAlign: 'left',
        lineHeight: 18,
    },
    button: {
        width: 'auto',
        marginVertical: getHeight(0.4),
        // backgroundColor: Colors.textOrange,
        borderWidth: 1,
        borderColor: Colors.gray,
        padding: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
    },
    spacer: {
        borderWidth: 0.2,
        marginTop: getHeight(4),
        borderColor: Colors.text
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bgWhite
    },
    top: {
        top: getHeight(2),
        width: getWidth(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHeading1: {
        color: Colors.bgBlack,
        fontSize: getSize(30),
        lineHeight: 36,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textHeading2: {
        color: Colors.bgBlack,
        fontSize: getSize(15),
        lineHeight: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textHeading3: {
        color: Colors.bgBlack,
        fontSize: getSize(20),
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
})