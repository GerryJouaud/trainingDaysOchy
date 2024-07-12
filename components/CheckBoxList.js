import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from './CheckBox';

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
          {/*progress bar 100%*/}
          <View style={styles.progressBarBox}>
            <View style={styles.progressBarFull} />
            <View style={styles.progressBarFull} />
          </View>
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
        {/*//Button Next*/}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            alert('To be continued..?');
          }}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
        {/*Button cancel*/}
        <View>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              changeBoolean(!boolean);
            }}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    //------------- display after selection ---------------//
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.sectionTitle}>{beforeSelectionTitle}</Text>
        {/*Progress bar 50%*/}
        <View style={styles.progressBarBox}>
          <View style={styles.progressBarFull} />
          <View style={styles.progressBarEmpty} />
        </View>
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
        {/*Button Next*/}
        <TouchableOpacity
          disabled={emptyArray}
          style={emptyArray ? styles.disabledButton : styles.submitButton}
          onPress={() => {
            changeBoolean(!boolean);
          }}>
          <Text style={styles.submitButtonText}>Next</Text>
        </TouchableOpacity>
        <View>
          {/*Button Cancel*/}
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              alert('To be continued..?');
            }}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  progressBarBox: {
    width: '100%',
    flexDirection: 'row',
  },
  progressBarEmpty: {
    marginVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 2,
    width: '50%',
    borderColor: 'black',
    backgroundColor: 'grey',
  },
  progressBarFull: {
    marginVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    padding: 2,
    width: '50%',
    borderColor: 'black',
    backgroundColor: 'green',
  },
  cancelButton: {
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 5,
    marginHorizontal: 20,
    color: 'white',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 5,
    marginHorizontal: 20,
    opacity: 0.3,
  },
  submitButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 5,
    marginHorizontal: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
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
