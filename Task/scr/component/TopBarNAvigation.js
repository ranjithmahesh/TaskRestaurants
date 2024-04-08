import React, {useState, useMemo} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {restaurants} from '../lib/data';
const Restaurants = () => {
  const navigation = useNavigation();
  const Data = useSelector(state =>
    state.filter.filteredData.length > 0
      ? state.filter.filteredData
      : restaurants,
  );

  const [bookmark, setBookMark] = useState([]);
  const [heart, setHeart] = useState([]);

  const toggleHeart = item => {
    if (heart.includes(item)) {
      setHeart(prevHeart => prevHeart.filter(heartItem => heartItem !== item));
    } else {
      setHeart(prevHeart => [...prevHeart, item]);
    }
  };

  const toggleBookmark = item => {
    if (bookmark.includes(item)) {
      setBookMark(prevBookMark =>
        prevBookMark.filter(bookmarkItem => bookmarkItem !== item),
      );
    } else {
      setBookMark(prevBookMark => [...prevBookMark, item]);
    }
  };

  const renderView = useMemo(
    () => (
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          paddingRight: 0,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
              Satisfy your craving
            </Text>
            <Text style={{color: 'gray', fontSize: 14}}>
              Restaurants that suits to your palate
            </Text>
          </View>
          <Text
            style={{fontWeight: '500', color: 'black', marginTop: 5}}
            onPress={() => navigation.navigate('viewAll')}>
            View All
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Data &&
            Data.map((item, i) => (
              <View
                key={i}
                style={{
                  width: 215,
                  height: 300,
                  marginRight: 10,
                  marginBottom: 20,
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
                      onPress={() => toggleBookmark(item)}
                      style={{
                        backgroundColor: bookmark.includes(item)
                          ? 'gold'
                          : '#fff0f0',
                        borderRadius: 25,
                        padding: 5,
                      }}
                      size={24}
                      color="black"
                    />
                    <AntDesign
                      name="heart"
                      onPress={() => toggleHeart(item)}
                      size={20}
                      color={heart.includes(item) ? 'white' : 'black'}
                      style={{
                        backgroundColor: heart.includes(item)
                          ? 'red'
                          : '#fff0f0',
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
                      <Text style={{fontSize: 14, color: 'white'}}>
                        {item.Type} |
                      </Text>
                      <Text style={{fontSize: 14, color: 'white'}}>
                        {item.Cuisine} |{' '}
                      </Text>
                      <Text style={{fontSize: 14, color: 'white'}}>
                        {item.Protein}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
        </ScrollView>
      </View>
    ),
    [Data, heart, bookmark],
  );
  return renderView;
};

const Cooking = () => {
  return <Text>Cooking</Text>;
};
const TopBarNavigation = () => {
  const [category, setCategory] = useState('restaurants');

  const tabStyles = useMemo(() => {
    console.log('Category changed:', category);
    return {
      restaurants: {
        borderBottomColor: category === 'restaurants' ? '#000' : 'gray',
      },
      cooking: {
        borderBottomColor: category === 'cooking' ? '#000' : 'gray',
      },
    };
  }, [category]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <Text
          onPress={() => setCategory('restaurants')}
          style={{
            fontSize: 25,
            fontWeight: '400',
            borderBottomWidth: 4,
            width: '50%',
            textAlign: 'center',
            color: '#000',
            ...tabStyles.restaurants,
          }}>
          Restaurants
        </Text>
        <Text
          onPress={() => setCategory('cooking')}
          style={{
            fontSize: 25,
            fontWeight: '400',
            borderBottomWidth: 4,
            width: '50%',
            textAlign: 'center',
            color: '#000',
            paddingBottom: 10,
            ...tabStyles.cooking,
          }}>
          Cooking
        </Text>
      </View>
      {category === 'restaurants' ? <Restaurants /> : <Cooking />}
    </View>
  );
};

export default TopBarNavigation;
