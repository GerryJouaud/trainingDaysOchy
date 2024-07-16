import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// This component can be used to go back in the app, use the onPressAction to change a state or go to a specific link
const CancelButton = ({onPressAction}) => {
  return (
    <TouchableOpacity
      style={styles.cancelButton}
      onPress={() => {
        onPressAction();
      }}>
      <Text style={styles.cancelButton}>Cancel</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cancelButton: {
    borderRadius: 5,
    paddingVertical: 5,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
    fontSize:25,
    padding:8,

  },
});
export default CancelButton;
