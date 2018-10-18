'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ListView,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from '../../Utils/Dva';
const Config = require('../../Utils/Config');
const isIOS = Platform.OS === 'ios';
const window = Dimensions.get('window');

@connect(state => ({...(state.Home)}))
export default class Menu extends Component {
  constructor(props){
    super(props);
    this.handleBack = this._handleBack.bind(this);
    // this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state={
    //   menuDataSource: this.ds.cloneWithRows([{'uri':'Garment','name':'服装城'}]),
    // }
  }
  componentWillMount(){
    fetch(Config.DEFAULT_HOST + 'catalog/nav.json')
      .then(response => response.json())
      .then(res => this._getData(res));
  }
  _getData(res){
    // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  _handleBack(){
    var navigator = this.navigator;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }else{
      return false;
    }
  }
  _rowPressed(propertyGuid, rowID, uri){
    // var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[rowID];
    this.props.navigator.push({
      id:'list',
      uri: uri,
    });
  };
  _renderRow(title: string, sectionID: ?string, rowID: ?string): ?React.Element<Function> {
    return (
      <View key={sectionID}>
        <TouchableHighlight onPress={() => this._rowPressed(title.guid, rowID, title.uri_key)}>
          <View style={styles.row}>
            <Text style={styles.rowTitleText}>
              {title.name}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff',marginTop: isIOS ? 30 : 0}}>
        <View>
          <TouchableHighlight onPress={() => this.props.navigator.popToTop()}>
            <View style={styles.row}>
              <Text style={styles.rowTitleText}>
                首页
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separator} />
        </View>
        <View>
          <TouchableHighlight onPress={() => this.props.navigator.push({id:'',content:'list'})}>
            <View style={styles.row}>
              <Text style={styles.rowTitleText}>
                列表
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.separator} />
        </View>
        <ListView
          dataSource={ this.props.menuDataSource}
          removeClippedSubviews={true}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: 150,
    height: window.height,
    // backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 10,
  },
  row:{
    paddingLeft:20,
    paddingTop:10,
    borderBottomWidth:1,
    borderColor:'gray'
  },
  rowTitleText:{
    fontSize:15
  },
});
