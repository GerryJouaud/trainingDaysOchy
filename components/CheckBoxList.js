import {Button, StyleSheet, View} from 'react-native';
import CheckBox from './CheckBox';

// This component needs to be initialized in CheckBoxList's props with a 'list of Options': {[{label:"",value:""}]}

const CheckBoxList = ({listOfOptions, selectedItems, onChange}) => {
  // true if there is no checkBox selected
  let emptyArray = selectedItems.length === 0;
  return (
    <View>
      <View style={styles.container}>
        {listOfOptions.map((item, index) => (
          <CheckBox
            key={index}
            item={item}
            selectedItems={selectedItems}
            onChange={onChange}
          />
        ))}
      </View>
      <Button
        title={'Submit'}
        // disabled the button if selectedItems is empty
        disabled={emptyArray}
        onPress={() => {
          // Display the selected days if there is selected items
          alert(`Selected: ${selectedItems}`);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CheckBoxList;
