import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CheckBox = ({daysOfTheWeek, checkedDay, onChange}) => {
  // copy of checkedDay to manipulate easier
  let daysSelected = [...checkedDay];

  return (
    <View style={[styles.container]}>
      {/*iteration of every day*/}
      {daysOfTheWeek.map((day, index) => {
        // check if the day have been selected
        let active = daysSelected.includes(day.value);
        return (
          <TouchableOpacity
            // ternary that define the style of the component if it's checked or not
            style={active ? [styles.activeCheckBox] : styles.checkBox}
            key={index}
            onPress={() => {
              // if already selected, day is filtered out of daysSelected array
              if (active) {
                daysSelected = daysSelected.filter(
                  dayFiltered => dayFiltered !== day.value,
                );

                // re-render the array
                return onChange(daysSelected);
              }
              // if it wasn't selected, add the day in the array
              daysSelected.push(day.value);
              // re-render the array
              onChange(daysSelected);
            }}>
            <Text key={index}>{day.label}</Text>
          </TouchableOpacity>
        );
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
  activeCheckBox: {
    marginHorizontal: 2,
    padding: 1,
    backgroundColor: '#06b6d4',
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
