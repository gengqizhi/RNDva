'use strict';
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;

class ad extends Component {

  render() {
    return(
      <View style={{flexDirection:'row',width:screenWidth - 6}}>
        <View style={{flex:1, height:100, padding:5, borderWidth:1,borderRightColor:'transparent', borderColor:'#eee'}}>
          <Text style={{fontSize:12, color:'#007DC8'}}>防水智能水环</Text>
          <Text style={{fontSize:12, textDecorationLine:'line-through', color:'#000'}}>专柜价:￥269</Text>
          <Text style={{fontSize:12, color:'red'}}>防水智能水环</Text>
          <View style={[{flex: 1}]}>
            <Image style={{flex: 1, height: 100, resizeMode: 'contain'}} source={require('../../Assets/Image/2.jpg')} />
          </View>
        </View>
        <View style={{flex:1, height:100, padding:5, borderWidth:1, borderRightColor:'transparent', borderColor:'#eee'}}>
          <Text style={{fontSize:12, color:'#007DC8'}}>护肤美妆</Text>
          <Text style={{fontSize:12, textDecorationLine:'line-through', color:'#000'}}>专柜价:￥269</Text>
          <Text style={{fontSize:12, color:'red'}}>找回初我</Text>
          <View style={[{flex: 1}]}>
            <Image style={{flex: 1, height: 100, resizeMode: 'contain'}} source={require('../../Assets/Image/hf.jpg')} />
          </View>
        </View>
        <View style={{flex:1, height:100, padding:5, borderWidth:1, borderColor:'#eee'}}>
          <Text style={{fontSize:12, color:'#007DC8'}}>防水智能水环</Text>
          <Text style={{fontSize:12, textDecorationLine:'line-through', color:'#000'}}>专柜价:￥269</Text>
          <Text style={{fontSize:12, color:'red'}}>防水智能水环</Text>
          <View style={[{flex: 1}]}>
            <Image style={{flex: 1, height: 100, resizeMode: 'contain'}} source={require('../../Assets/Image/2.jpg')} />
          </View>
        </View>
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

module.exports = ad;
