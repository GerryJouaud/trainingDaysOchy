import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import CheckBox from './CheckBox';
import CallToAction from './CallToAction';
import CancelButton from './CancelButton';
import ProgressBar from './ProgressBar';

// This component needs to be initialized in CheckBoxList's props with:
// - list of Options': {[{label:"",value:""}]}
// - title before and after selection of items
// - description before selection of items

const CheckBoxList = ({
  beforeSelectionTitle,
  beforeSelectionDescription,
  afterSelectionTitle,
  boolean,
  changeBoolean,
  listOfOptions,
  selectedItems,
  onChange,
}) => {
  // true if there is no checkBox selected
  let emptyArray = selectedItems.length === 0;

  // display the correct view in function of the state of submited Selection
  if (boolean) {
    //------------- display after submited selection ---------------//
    return (
      <View style={styles.mainContainer}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitle}>{afterSelectionTitle}</Text>
          {/*Progress bar 2/2 */}
          <ProgressBar numberSuccessSteps={2} numberRemainingSteps={0} />
        </View>
        {/*List of the selected items*/}
        <FlatList
          data={selectedItems}
          renderItem={({item}) => (
            <View style={styles.selectItemsList}>
              <Image
                style={styles.selectItemsListImages}
                source={require('../assets/checkedRadiobtn.png')}
              />
              <Text style={styles.selectItemsText}>{item}</Text>
            </View>
          )}
        />

        <CallToAction
          disabledCondition={null}
          onPressAction={() => alert('To be continued..?')}
          text="Next"
        />
        <View>
          <CancelButton onPressAction={() => changeBoolean(!boolean)} />
        </View>
      </View>
    );
  } else {
    //------------- display before selection ---------------//
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTitle}>{beforeSelectionTitle}</Text>
        {/* Progress bar 1/2 */}
        <ProgressBar numberSuccessSteps={1} numberRemainingSteps={1} />
        <Text style={styles.sectionDescription}>
          {beforeSelectionDescription}
        </Text>
        {/*Creation of each CheckBox item*/}
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

        {/*This CTA will not be clickable until a check box will be selected*/}
        <CallToAction
          disabledCondition={emptyArray}
          // change boolean here display the second step of the selection
          onPressAction={() => changeBoolean(!boolean)}
          text="Next"
        />
        <View>
          <CancelButton onPressAction={() => alert('To be continued..?')} />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  selectItemsList: {
    padding: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectItemsText: {
    color: '#78BD32',
  },
  selectItemsListImages: {
    marginRight: 10,
  },
  mainContainer: {
    backgroundColor: '#1a1814',
    borderRadius: 15,
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 'auto',
  },
  containerList: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    color: 'grey',
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
