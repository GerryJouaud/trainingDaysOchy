import {StyleSheet, View} from 'react-native';

// This progress bar need to be initialized with the number of Successful steps and the nummber of Remaining steps
// example: props initialized with {numberSuccessSteps= 3} and {numberRemainingSteps= 1} will make a 75% progress bar
const ProgressBar = ({numberSuccessSteps, numberRemainingSteps}) => {
  // The two arrays that will contain the Full&EmptyBar
  const SuccessStepsArray = [];
  const RemainingStepsArray = [];
  // two for loop to push the good amount of progressbar we want into the arrays
  for (let i = 0; i < numberSuccessSteps; i++) {
    SuccessStepsArray.push(
      <View key={i + 'success'} style={styles.progressBarFull} />,
    );
  }
  for (let i = 0; i < numberRemainingSteps; i++) {
    RemainingStepsArray.push(
      <View key={i + 'remaining'} style={styles.progressBarEmpty} />,
    );
  }
  // return them in a view
  return (
    <View style={styles.progressBarBox}>
      {/*Decomposition of the two arrays and concats them*/}
      {[...SuccessStepsArray, ...RemainingStepsArray]}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarBox: {
    width: '100%',
    flexDirection: 'row',
  },
  progressBarEmpty: {
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    padding: 2,
    // Flex : 1 means that they will fit equals as many as they are in the parent's container
    flex: 1,
    borderColor: 'black',
    backgroundColor: 'grey',
  },
  progressBarFull: {
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    padding: 2,
    flex: 1,
    borderColor: 'black',
    backgroundColor: '#78BD32',
  },
});
export default ProgressBar;
