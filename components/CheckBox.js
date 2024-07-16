import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CheckBox = ({item, selectedItems, onChange}) => {
  // copy of selectedItems to be manipulated easier
  let selectedItemsArray = [...selectedItems];

  // check if the item has been selected
  let active = selectedItemsArray.includes(item.value);

  return (
    <TouchableOpacity
      style={active ? styles.activeContainerCheckBox : styles.containerCheckBox}
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
      <Text style={active ? styles.activeCheckBoxText : styles.unactiveCheckBoxText}>
        {item.value.substring(0, 3)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeContainerCheckBox:{
    flex:1,
    backgroundColor: 'rgba(0,255,0,0.05)',

    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth:1,
    borderColor:'#78BD32',
    borderRadius:12,
    padding: 8,
    marginHorizontal:3,
  },
  containerCheckBox:{
    flex:1,
    alignItems: 'center',
    // 1 more padding cause of the border radius
    padding: 9,
    marginHorizontal:3,
  },
  unactiveCheckBoxText: {
    marginTop:10,
    color: 'white',
  },
  activeCheckBoxText: {
    marginTop:10,
    color: '#78BD32',
  },
});

export default CheckBox;
