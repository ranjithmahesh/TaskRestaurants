import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{}}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 22, color: 'black'}}>Good Morning</Text>
        <Text style={{fontSize: 22, color: 'black'}}>Mr.Ranjith!</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          shadowColor: '#333333',
          shadowOffset: {width: 50, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          marginTop: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign
            name="search1"
            size={25}
            color="gray"
            style={{opacity: 0.3}}
          />
          <TextInput
            placeholder="Search"
            style={{fontSize: 14, opacity: 0.3, marginLeft: 10}}
            placeholderTextColor={'gray'}
          />
        </View>
        <AntDesign
          name="filter"
          size={24}
          color="black"
          onPress={() => navigation.navigate('Filter')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
