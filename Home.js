import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
// import { Dropdown } from 'react-native-material-dropdown';
import { Container, Content, Picker } from 'native-base';
const Item = Picker.Item;
let dList = []

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      empArray: [
        {
          emp_name: 'Deepak',
          emp_id: '1',
          emp_address: '',
          emp_department: 'Project Development',
          emp_designation: 'Full Stack Developer',
          emp_experience:
            'Have 10 years of experience in MERN Stack Development.',
          emp_salary: '24 LPA', 
          emp_photo_path: 'https://randomuser.me/api/portraits/women/38.jpg',
          emp_lat_lng:{latitude: 17.3850,
         longitude: 78.4867,
            
          }
          
        },

        {
          emp_name: 'Sai',
          emp_id: '12',
          emp_address: '',
          emp_department: 'QA',
          emp_designation: 'QA',
          emp_experience:
            'Have 5 years of experience in Quality Assurance.',
          emp_salary: '12 LPA', 
          emp_photo_path: 'https://randomuser.me/api/portraits/women/68.jpg',
          emp_lat_lng:{latitude: 12.9716,
         longitude: 77.5946,
            
          }
        },
        {
          emp_name: 'Lokesh',
          emp_id: '123',
          emp_address: '',
          emp_department: 'Project Development',
          emp_designation: 'Front-End-Developer',
          emp_experience:
            'Have 7 years of experience in Big Data and Analytics.',
          emp_salary: '16 LPA',
          emp_photo_path: 'https://randomuser.me/api/portraits/women/65.jpg',
          emp_lat_lng:{latitude: 13.0827,
         longitude: 80.2707,
            
          }
        },
        {
          emp_name: 'Hari',
          emp_id: '12345',
          emp_address: '',
          emp_department: 'HR',
          emp_designation: 'Backend',
          emp_experience:
            'Have 11 years of experience in Talent Acquisition.',
          emp_salary: '15 LPA',
          emp_photo_path: 'https://randomuser.me/api/portraits/men/60.jpg',
          emp_lat_lng:{latitude: 19.0760,
         longitude: 72.8777,
            
          }
        },
      ],
      dupempArray:[
        {
          emp_name: 'Deepak',
          emp_id: '1',
          emp_address: '',
          emp_department: 'Project Development',
          emp_designation: 'Full Stack Developer',
          emp_experience:
            'Have 10 years of experience in MERN Stack Development.',
          emp_salary: '24 LPA', 
          emp_photo_path: 'https://randomuser.me/api/portraits/women/38.jpg',
          emp_lat_lng:{latitude: 17.3850,
         longitude: 78.4867,
            
          }
          
        },

        {
          emp_name: 'Sai',
          emp_id: '12',
          emp_address: '',
          emp_department: 'QA',
          emp_designation: 'QA',
          emp_experience:
            'Have 5 years of experience in Quality Assurance.',
          emp_salary: '12 LPA', 
          emp_photo_path: 'https://randomuser.me/api/portraits/women/68.jpg',
          emp_lat_lng:{latitude: 12.9716,
         longitude: 77.5946,
            
          }
        },
        {
          emp_name: 'Lokesh',
          emp_id: '123',
          emp_address: '',
          emp_department: 'Project Development',
          emp_designation: 'Front-End-Developer',
          emp_experience:
            'Have 7 years of experience in Big Data and Analytics.',
          emp_salary: '16 LPA',
          emp_photo_path: 'https://randomuser.me/api/portraits/women/65.jpg',
          emp_lat_lng:{latitude: 13.0827,
         longitude: 80.2707,
            
          }
        },
        {
          emp_name: 'Hari',
          emp_id: '12345',
          emp_address: '',
          emp_department: 'HR',
          emp_designation: 'Backend',
          emp_experience:
            'Have 11 years of experience in Talent Acquisition.',
          emp_salary: '15 LPA',
          emp_photo_path: 'https://randomuser.me/api/portraits/men/60.jpg',
          emp_lat_lng:{latitude: 19.0760,
         longitude: 72.8777,
            
          }
        },
      ],
      selected: 'All',
    };
  }

  removeDuplicates = (data) => {
    console.log('inremove dup',data)
    return data.filter((value, index) => data.indexOf(value) === index);
    // this.setState({
    //   depArray:newData
    // })

  };

  componentDidMount() {

    let depArray = ['All'];

    this.state.empArray.map((item, index) => {
      depArray.push(item.emp_department);
    });

  dList=this.removeDuplicates(depArray)

  }

  onPressDropDown = (value) => {
      console.log('selected value',value)
      if(value=='ALL'){
        let empArray= this.state.empArray
        this.setState({
          dupempArray:empArray,
          selected:value
        })
      }
      else{
const newData = this.state.empArray.filter((item) => {
      // console.log('item in map',item)
      const itemData = `${item.emp_department.toUpperCase()}`;
      const textData = value.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dupempArray: newData,
      selected:value
    });
      }
    

  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      empArray: newData,
    });
  };

 

  renderHeader = () => {
    return (
      <Picker
        iosHeader="Select one"
        mode="dropdown"
        selectedValue={this.state.selected}
        onValueChange={this.onPressDropDown.bind(this)}>
          <Item label='All Departments' value ='ALL'/>
           <Item label= 'Project Development' value= 'Project Development' />
            <Item label= 'QA' value='QA' />
             <Item label= 'HR' value='HR' />
          

      </Picker>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '95%',
          backgroundColor: '#CED0CE',
          marginHorizontal: '14%',
        }}
      />
    );
  };

  renderItem = (title) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Details', { title })}>
      <ListItem
        leftAvatar={{ source: { uri: title.item.emp_photo_path } }}
        title={title.item.emp_name}
        subtitle={title.item.emp_department}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <FlatList
          data={this.state.dupempArray}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    padding:10
  },
});
