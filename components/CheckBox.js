import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CheckBox = ({item, selectedItems, onChange}) => {
  // copy of selectedItems to be manipulated easier
  let selectedItemsArray = [...selectedItems];

  // check if the item has been selected
  let active = selectedItemsArray.includes(item.value);

  return (
    <TouchableOpacity
      // style={active ? [styles.activeCheckBox] : styles.checkBox}
      onPress={() => {
        // if already selected, item is filtered out of selectedItemsArray
        if (active) {
          selectedItemsArray = selectedItemsArray.filter(
            itemFiltered => itemFiltered !== item.value,
          );
        } else {
          // if it wasn't in selectedItemsArray, add the item in it
          selectedItemsArray.push(item.value);
        }
        // apply the changes
        onChange(selectedItemsArray);
      }}>
      <Image
        source={
          // ternary that defines the image of the component if it's checked or not
          active
            ? require('../assets/checkedRadiobtn.png')
            : require('../assets/unCheckRadioBtn.png')
        }
        style={styles.checkBox}
        resizeMode="contain"
      />
      {/*{require('../assets/test.png')}*/}
      <Text style={active ? styles.activeCheckBox : styles.checkBox}>
        {item.value.substring(0, 3)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    color: 'white',
    alignItems: 'center',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  activeCheckBox: {
    color: '#78BD32',
    alignItems: 'center',
    marginHorizontal: 10,
    textAlign: 'center',
  },
});

export default CheckBox;
