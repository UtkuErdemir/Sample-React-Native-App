import React, { useRef } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button } from './Button';
import SelectDropdown from 'react-native-select-dropdown';
import { FilterTextInput } from './FilterTextInput';
import { SegmentSelect } from './SegmentSelect';
import { ageList, genders } from '../utils/initialValues';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export function FilterComponent({changeFilter, filters, clearFilter}){
    const select = useRef();
    return(
      <View style={{ height: windowHeight * 0.26, paddingTop: '10%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 4 }}>
            <FilterTextInput placeholder={"Type a fullname."} value={filters.name.value} onChangeText={(value) => changeFilter("name", value)} width={windowWidth * 0.45} />
            <SegmentSelect width={windowWidth * 0.45} data={genders} selectedValue={filters.gender.value} setSelectedValue={value => {
              changeFilter('gender', value)
            }}></SegmentSelect>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: 4 }}>
            <FilterTextInput placeholder="Type a city or country" value={filters.location.value} onChangeText={(value) => changeFilter("location", value)} width={windowWidth * 0.45} />
            <SelectDropdown ref={select} buttonStyle={{
              borderRadius: 10,
              boxShadow: "20px 10px 10px black",
              elevation: 10,
              minHeight: 36,
              backgroundColor: "#f0f0f0",
              width: windowWidth * 0.45,
              color: "#cccccc",
              paddingLeft: 10,
            }} defaultValue={filters.age.value} data={ageList} onSelect={value => changeFilter("age", value)} />
          </View>
          <View style={{ width: "30%", alignSelf: 'flex-end', margin: 8, marginRight: 12 }}>
            <Button padding={8} color={"#43c8e9"} onPress={() => {clearFilter(); select.current.reset()}}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Clear Filter</Text>
            </Button>
          </View>
        </View>
    )
  }