import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CheckBox = ({item, selectedItems, onChange}) => {
  // copy of selectedItems to be manipulated easier
  let selectedItemsArray = [...selectedItems];

  // check if the item has been selected
  let active = selectedItemsArray.includes(item.value);

  return (
    <TouchableOpacity
      // ternary that defines the style of the component if it's checked or not
      style={active ? [styles.activeCheckBox] : styles.checkBox}
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
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    marginHorizontal: 2,
    padding: 1,
    backgroundColor: '#DDDDDD',
    borderRadius: 3,
  },
  activeCheckBox: {
    marginHorizontal: 2,
    padding: 1,
    backgroundColor: '#06b6d4',
    borderRadius: 3,
  },
});

export default CheckBox;
