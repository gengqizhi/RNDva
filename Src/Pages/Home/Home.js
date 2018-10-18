import React, { Component } from 'react';
import {
  BackHandler,
  DrawerLayoutAndroid,
  Platform,
  ListView,
  ToastAndroid,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import CookieManager from 'react-native-cookies';
import Menu from './Menu';//导入 菜单 组件
import Content from './Content';
import Config from '../../Utils/Config';
import base64 from '../../Utils/Base64';
import localStorage from '../../Utils/LocalStorage';

import { connect } from '../../Utils/Dva';
import { scaleSize,deviceWidth } from '../../Utils/ScreenUtil';
// import icon from '../../Assets/Image/home.png';

@connect(state => ({...(state.Home)}))
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('../../Assets/Image/home.png')} style={[styles.icon, { tintColor: tintColor }]} />
    ),
  };

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    /**
     * 在组件中dispatch action
     * 一定要写namespace
     */
    this.props.dispatch({type: 'Home/FetchHomeName'});
    // fetch(Config.DEFAULT_HOST).then(() => this._setCsrf());
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    // if(this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
    //   this.props.navigator.pop();
    //   return false;
    // }
    // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //   //最近2秒内按过back键，可以退出应用。
    //   return false;
    // }
    // this.lastBackPressed = Date.now();
    // ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    // return true;
  };

  _updateMenuState(isOpen) {
    this.props.dispatch({type: 'Home/Set', msg: {isOpen}});
  }

  _onMenuItemSelected = (item) => {
    this.props.dispatch({type: 'Home/Set', msg: {isOpen:false}});
  };

  goNext() {
    this.props.dispatch({type:'Home/Login',msg:{loginButtonText:'登录成功！'}});
    return;
    /**
     * 页面跳转，传值
     */
    this.props.navigation.navigate('HomeNext', { loginButtonText: '我是下一页, 11111' });
  }

  _setCsrf(){
    // CookieManager.get(Config.DEFAULT_HOST, (err, res) => {
      // console.log('res.PHPSESSID:', res.PHPSESSID);
      // var request = new XMLHttpRequest();
      // request.onreadystatechange = (e) => {
      //   if (request.readyState !== 4) {
      //     return;
      //   }
      //   if (request.status === 200) {
      //     // console.log('request.responseText:', request.responseText);
      //     localStorage.setCsrf(request.responseText);
      //   } else {
      //     console.warn('getCsrf-requestWarn:', e);
      //   }
      // };
      // request.open('GET', `${Config.DEFAULT_HOST}api/rest/`);
      // request.setRequestHeader('Authorization','Csrf ' + base64(res.PHPSESSID));
      // request.send();
    // });
  }

  render() {
    const menu =
      <Menu
        onItemSelected={this._onMenuItemSelected}
        navigator={this.props.navigator}
      />;
    if(Platform.OS === 'android'){
      return(
        <DrawerLayoutAndroid
          ref={(drawer) => { this.drawer = drawer; }}
          drawerWidth={160}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => menu}
        >
          <Content/>
        </DrawerLayoutAndroid>
      );
    }
    return (
      <SideMenu
        menu={menu}
        isOpen={this.props.isOpen}
        onChange={(isOpen) => this._updateMenuState(isOpen) }
      >
        <Content/>
        <Text style={{padding:20,fontSize:24,backgroundColor:'#0f0'}} onPress={()=>this.goNext()}>{this.props.loginButtonText}</Text>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
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
  icon: {
    width: scaleSize(40),
    height: scaleSize(40),
  },
});

module.exports = Home;
