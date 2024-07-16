import {StyleSheet, View} from 'react-native';
import CheckBoxList from './components/CheckBoxList';
import {useState} from 'react';
import CancelButton from './components/CancelButton';

function App() {
  // 'useState' Hook, with an empty array as initial state
  const [value, setValue] = useState([]);
  // boolean to switch between two display
  const [boolean, changeBoolean] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <CheckBoxList
        //initialisation of the checkBoxList's options
        listOfOptions={[
          {label: 'Monday', value: 'Monday'},
          {label: 'Tuesday', value: 'Tuesday'},
          {label: 'Wednesday', value: 'Wednesday'},
          {label: 'Thursday', value: 'Thursday'},
          {label: 'Friday', value: 'Friday'},
          {label: 'Saturday', value: 'Saturday'},
          {label: 'Sunday', value: 'Sunday'},
        ]}
        beforeSelectionTitle={'Your Goal'}
        beforeSelectionDescription={'How many training sessions ?'}
        afterSelectionTitle={'Day(s) selected'}
        //use state
        selectedItems={value}
        onChange={setValue}
        // boolean setted with submit button
        boolean={boolean}
        changeBoolean={changeBoolean}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    paddingVertical: 100,
    paddingHorizontal: 20,
    height: '100%',
  },
});
export default App;
