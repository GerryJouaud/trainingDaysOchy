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
      <View style={styles.mainView}>
        <View style={styles.mainContainer}>
          <Text style={styles.sectionTitle}>{afterSelectionTitle}</Text>
          {/*Progress bar 2/2 */}
          <ProgressBar numberSuccessSteps={2} numberRemainingSteps={0} />

          {/*List of the selected items*/}
          <FlatList
            style={styles.boxSelectedItems}
            data={selectedItems}
            renderItem={({item}) => (
              <View style={styles.selectItemsList}>
                <Image
                  style={styles.selectedItemsListImages}
                  source={require('../assets/checkedRadiobtn.png')}
                />
                <Text style={styles.selectedItemsText}>{item}</Text>
              </View>
            )}
          />

          <CallToAction
            disabledCondition={null}
            onPressAction={() => alert('To be continued..?')}
            text="Next"
          />
        </View>
        <View>
          <CancelButton onPressAction={() => changeBoolean(!boolean)} />
        </View>
      </View>
    );
  } else {
    //------------- display before selection ---------------//
    return (
      <View style={styles.mainView}>
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
        </View>
        <View>
          <CancelButton onPressAction={() => alert('To be continued..?')} />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },
  boxSelectedItems: {
    marginVertical: 30,
  },
  selectItemsList: {
    padding: 10,
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 12,
  },
  selectedItemsText: {
    color: '#78BD32',
  },
  selectedItemsListImages: {
    marginRight: 90,
  },
  mainContainer: {
    backgroundColor: '#1a1814',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: '80%',
  },
  container: {
    width: '100%',
    height: '24%',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 100,
  },
  sectionTitle: {
    marginVertical: 20,
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  sectionDescription: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default CheckBoxList;
