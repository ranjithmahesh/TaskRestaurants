import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {restaurants} from '../lib/data';

const ViewAllScreen = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
        {restaurants &&
          restaurants.map((item, i) => (
            <View
              key={i}
              style={{
                display: 'flex',
                width: 200,
                height: 300,
              }}>
              <ImageBackground
                source={{
                  uri:
                    item.ImageUrl ??
                    'https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA',
                }}
                resizeMode="cover"
                style={{
                  flex: 1,
                  borderRadius: 20,
                  padding: 10,
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Feather
                    name="bookmark"
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 25,
                      padding: 5,
                    }}
                    size={24}
                    color="black"
                  />
                  <AntDesign
                    name="heart"
                    size={20}
                    color="black"
                    style={{
                      backgroundColor: '#fff0f0',
                      borderRadius: 25,
                      padding: 5,
                    }}
                  />
                </View>
                <View style={{marginTop: 'auto', marginVertical: 5}}>
                  <Text style={{color: 'white', fontSize: 24}}>
                    {item.Name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 16, color: 'white'}}>
                      {item.Type} |
                    </Text>
                    <Text style={{fontSize: 16, color: 'white'}}>
                      {item.Cuisine} |{' '}
                    </Text>
                    <Text style={{fontSize: 16, color: 'white'}}>
                      {item.Protein}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default ViewAllScreen;

const styles = StyleSheet.create({});
