import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearFilters,
  filterByCuisine,
  filterByProtein,
  filterByType,
} from '../../redux/FilterCart';
import {restaurants} from '../lib/data';
import {useNavigation} from '@react-navigation/native';

const FilterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state.filter);

  const uniqueTypes = [...new Set(restaurants.map(item => item.Type))];
  const uniqueCuisine = [...new Set(restaurants.map(item => item.Cuisine))];
  const uniqueProtein = [...new Set(restaurants.map(item => item.Protein))];

  const memoizedView = useMemo(
    () => (
      <View style={{flex: 1, padding: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            marginTop: 80,
            marginBottom: 10,
          }}>
          Diet
        </Text>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
          {uniqueTypes.map((item, i) => (
            <Pressable
              key={i}
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 15,
                padding: 10,
                borderColor: 'black',
                backgroundColor: data.type.includes(item)
                  ? '#122c3e'
                  : 'transparent',
              }}
              onPress={() => dispatch(filterByType(item))}>
              <Text
                style={{
                  color: data.type.includes(item) ? 'white' : 'black',
                }}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            marginTop: 30,
            marginBottom: 10,
          }}>
          Cuisines
        </Text>
        <View style={{flexDirection: 'row', gap: 10, marginBottom: 20}}>
          {uniqueCuisine.map((item, i) => (
            <Pressable
              onPress={() => dispatch(filterByCuisine(item))}
              key={i}
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 15,
                padding: 10,
                borderColor: 'black',
                backgroundColor: data.cuisine.includes(item)
                  ? '#122c3e'
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: data.cuisine.includes(item) ? 'white' : 'black',
                }}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
            marginTop: 80,
            marginBottom: 10,
          }}>
          Protein
        </Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          {uniqueProtein.map((item, i) => (
            <Pressable
              onPress={() => dispatch(filterByProtein(item))}
              key={i}
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 15,
                padding: 10,
                borderColor: 'black',
                backgroundColor: data.protein.includes(item)
                  ? '#122c3e'
                  : 'transparent',
              }}>
              <Text
                style={{
                  color: data.protein.includes(item) ? 'white' : 'black',
                }}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            flex: 1,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Pressable
            onPress={() => {
              dispatch(clearFilters());
              navigation.goBack();
            }}
            style={{
              width: 150,
              height: 45,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: '#122c3e',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Cancel
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              width: 200,
              backgroundColor: '#122c3e',
              height: 45,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Apply Filters
            </Text>
          </Pressable>
        </View>
      </View>
    ),
    [data],
  );

  return memoizedView;
};

export default FilterScreen;

const styles = StyleSheet.create({});
