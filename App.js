import {Text, StyleSheet, View} from 'react-native';
import CheckBoxList from './components/CheckBoxList';
import {useState} from 'react';

function App() {
  // 'useState' Hook, with an empty array as initial state
  const [value, setValue] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Goal</Text>
      <Text style={styles.sectionDescription}>How many training sessions?</Text>
      <CheckBoxList
        listOfOptions={[
          {label: 'Monday', value: 'Monday'},
          {label: 'Tuesday', value: 'Tuesday'},
          {label: 'Wednesday', value: 'Wednesday'},
          {label: 'Thursday', value: 'Thursday'},
          {label: 'Friday', value: 'Friday'},
          {label: 'Saturday', value: 'Saturday'},
          {label: 'Sunday', value: 'Sunday'},
        ]}
        selectedItems={value}
        onChange={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
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
export default App;
