'use strict';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ListView,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const imgWidth = (screenWidth - 6)/ 7 -2;
const imgUri = [
  require('../../Assets/Image/10.jpg'),
  require('../../Assets/Image/11.jpg'),
  require('../../Assets/Image/12.jpg'),
  require('../../Assets/Image/13.jpg'),
  require('../../Assets/Image/14.jpg'),
  require('../../Assets/Image/15.jpg'),
  require('../../Assets/Image/16.jpg'),
  require('../../Assets/Image/17.jpg'),
  require('../../Assets/Image/18.jpg'),
  require('../../Assets/Image/19.jpg'),
  require('../../Assets/Image/20.jpg'),
  require('../../Assets/Image/21.jpg'),
  require('../../Assets/Image/22.jpg'),
  require('../../Assets/Image/23.jpg'),
  require('../../Assets/Image/24.jpg'),
  require('../../Assets/Image/25.jpg'),
  require('../../Assets/Image/26.jpg'),
  require('../../Assets/Image/27.jpg'),
  require('../../Assets/Image/28.jpg'),
  require('../../Assets/Image/29.jpg'),
  require('../../Assets/Image/30.jpg'),
  require('../../Assets/Image/31.jpg'),
  require('../../Assets/Image/32.jpg'),
  require('../../Assets/Image/33.jpg'),
  require('../../Assets/Image/34.jpg'),
  require('../../Assets/Image/35.jpg'),
  require('../../Assets/Image/36.jpg'),
  require('../../Assets/Image/37.jpg'),
];    

export default class Brand extends Component {
  constructor(props){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    super(props);
    this.state={
      dataSource: ds.cloneWithRows(imgUri),
    }
  }
    _renderRow(data){
      return (
          <View style={{
              width:imgWidth,
              height: 40,
              marginBottom:1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#eee',
              justifyContent: 'center',

          }}>
              <Image style={{width: imgWidth -3, height: 38,resizeMode:'contain'}} source={data} />
          </View>
      );
    }
  render() {
    return(
      <View style={{
          flexDirection:'row',
          width:screenWidth -6,
         }}>
        <ListView
            contentContainerStyle={{paddingTop:1,borderWidth:1,borderColor: '#eee',marginTop:10,flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start'}}
            dataSource={this.state.dataSource}
            pageSize={7} // should be a multiple of the no. of visible cells per row
            scrollRenderAheadDistance={500}
            renderRow={(res) => this._renderRow(res)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  iconStyle:{
    width:26,
    height:26,
  },
  priceView:{
    flexDirection:'row',
  },
  priceTextSpecial:{
    color:'#FF8A01',
    fontSize:16,
  },
  priceText:{
    color:'#9b9a9a',
    lineHeight:22,
    textDecorationLine:'line-through'
  },
  pricePeoplePay:{
    color:'#9b9a9a',
    lineHeight:22,
  },
  listRowProductInfo:{
    flex:2,
    height:100,
    padding:5,
    paddingLeft:10,
  },
  listRowProduct2:{
      flex:3,
  },
  listRowProduct:{
    justifyContent:'center',
    flexDirection:'row',
    padding:5},
  textStyle:{
    color:'#999',
  },
  selectedTextStyle:{
    color:'black',
  },
  container: {
    flex:1,
    flexDirection:'row',
    paddingTop:30,
 
  },
  circleContainer: {
    position:'absolute',
    left:0,
    top:120,
  },
  circle: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#f4797e',
    marginHorizontal:5,
  },

  circleSelected: {
    width:6,
    height:6,
    borderRadius:6,
    backgroundColor:'#ffffff',
    marginHorizontal:5,
  },
  // wrapper: {
  //   height:123,
  //
  //  },
  paginationStyle: {
     position:'absolute',
     bottom:430,
    //flex:1,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
  listContainer: {
    flex:1,
  },
  list: {
    backgroundColor: '#eeeeee',
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowDetailText: {
    fontSize: 15,
    color: '#000',
    lineHeight: 20,
    height:70,
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  search:{
    marginBottom:10,

  },
  slide:{
    height:306/824*screenWidth,
    width:screenWidth,
  },
  slide1:{
    height:282/527*screenWidth,
    width:screenWidth,
  },
  slideImg:{
      flex:1,
      height:170,
      margin:1,
      borderWidth:1,
      borderColor:'#eee',
      resizeMode: 'stretch',

  },
  footerImg:{
      flex:1,
      height:120,
      margin:1,
      borderWidth:1,
      borderColor:'#eee',
      resizeMode: 'contain',
  },
});

//<Image style={{flex: 1}} source={require(data)} />