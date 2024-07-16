import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// This component can be used to make an action on press, it can be disabled until a defined state, you can also change text of this button
const CallToAction = ({disabledCondition, onPressAction, text}) => {
  return (
    <TouchableOpacity
      disabled={disabledCondition}
      // change the style of the component if it have been initialized disabled or not
      style={disabledCondition ? styles.disabledButton : styles.submitButton}
      onPress={() => {
        onPressAction();
      }}>
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingVertical: 5,
    marginVertical: 10,
    opacity: 0.3,
  },
  submitButton: {
    backgroundColor: '#78BD32',
    borderRadius: 5,
    paddingVertical: 5,
    marginVertical: 10,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    padding: 8,
  },
});
export default CallToAction;
