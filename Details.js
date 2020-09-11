import React, {Component}  from 'react'
import {View,Text,SafeAreaView,Dimensions}  from 'react-native'
import { Button, Card,Icon } from 'react-native-elements';
import MapView,{ Marker } from 'react-native-maps';

class DetailsScreen extends Component{

  constructor(props){
    super(props);
    
    this.state={

    }
  }



  render(){

    const {params} = this.props.route
    console.log('params',params)
    const data= params.title.item
    const marker ={
      latlng:{
        latitude: 17.3850,
         longitude: 78.4867,
      },
      title:'Sai',
      description:'ksjfnskjfns kjsndfkljs skjdfnksjf skjvnskjv'
    }
    const region ={
      latitude: 17.3850,
      longitude: 78.4867,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    return(
      <SafeAreaView>

         <Card
  title= {data.emp_designation}
  image= {{uri:data.emp_photo_path}}>
  <Text style={{marginBottom: 10,marginTop:10}}>
    {data.emp_experience}
  </Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4}}>
          <Text>
          Name
          </Text>
          <Text>
          {data.emp_name}
          </Text>
      </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4}}>       
          <Text>
          Employe Id
          </Text>
          <Text>
          {data.emp_id}
          </Text>
      </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:30}}>
          <Text>
          Employe Salary
          </Text>
           <Text>
           {data.emp_salary}
          </Text>
      </View>
       
<MapView style={{width: Dimensions.get('window').width-( 5*Dimensions.get('window').height/6),
    height: Dimensions.get('window').height-( 3*Dimensions.get('window').height/4)}}
    region={region}>
<Marker
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    >
    <MapView.Callout tooltip style={{backgroundColor:'#fff'}}>
                                     
                                          <View style={{padding:6}}>
                                              <Text style={{textAlign:'center'}}>{data.emp_name}</Text>
                                             <Text style={{textAlign:'center'}}>{data.emp_designation}</Text>
                                           <Text style={{textAlign:'center'}}>Emp ID: {data.emp_id}</Text>
                                          </View>
                            
                                    </MapView.Callout>
    </Marker>
        </MapView>
       
</Card>

      </SafeAreaView>

    )
  }
}

export default DetailsScreen