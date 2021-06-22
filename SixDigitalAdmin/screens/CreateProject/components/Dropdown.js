/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Pressable, Text} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import color from '../../../style/color';
export function Dropdown({
  options,
  placeholder,
  label,
  message,
  messageType,
  onChange,
  menuHeight,
  value,
  ...boxProps
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const onChangeHandler = key => {
    setIsOpen(!isOpen);
    setSelectedItem(options?.find(item => item.key === key));
    onChange(key);
  };

  return (
    <View>
      {!!label && (
        <View style={{margin: 10}}>
          <Text style={{color: 'gray'}}>{label}</Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: SCREEN_HEIGHT * 0.06,
          borderRadius: SCREEN_HEIGHT * 0.03,
          fontSize: SCREEN_HEIGHT * 0.02,
        }}>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={{
            flexGrow: 1,
            padding: 10,
            backgroundColor: 'whiite',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text>{selectedItem ? selectedItem?.text : placeholder}</Text>
        </Pressable>
      </View>

      {isOpen && (
        <View style={{zIndex: 1}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              backgroundColor: 'white',
              height: 200,
              width: '100%',
              top: -10,
            }}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  }}
                />
              )}
              data={options}
              extraData={options}
              keyExtractor={item => item.key}
              renderItem={({item}) => (
                <Pressable
                  style={{padding: 10}}
                  onPress={() => onChangeHandler(item.key)}>
                  <Text style={{color: color.primary}}>{item.text}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
}
