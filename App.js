import {Text, StyleSheet, View} from 'react-native';
import CheckBox from './components/CheckBox';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}> Your Goal</Text>
      <Text style={styles.sectionDescription}>How many training session ?</Text>
      <CheckBox
        daysOfTheWeek={[
          {label: 'Monday'},
          {label: 'Tuesday'},
          {label: 'Wednesday'},
          {label: 'Thursday'},
          {label: 'Friday'},
          {label: 'Saturday'},
          {label: 'Sunday'},
        ]}></CheckBox>
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
