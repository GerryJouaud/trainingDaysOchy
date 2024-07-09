import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CheckBox = ({daysOfTheWeek}) => {
  return (
    <View style={[styles.container]}>
      {daysOfTheWeek.map(day => {
        return <Text style={styles.checkBox}>{day.label}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    marginHorizontal: 2,
    padding: 1,
    backgroundColor: '#DDDDDD',
    borderRadius: 3,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 32,
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
export default CheckBox;
