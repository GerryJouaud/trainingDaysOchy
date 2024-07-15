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
    marginTop: 5,
    marginHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
});
export default CancelButton;
