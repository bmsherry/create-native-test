import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Home from "./components/Home";
import ScanScreen from "./components/common/ScanScreen";

/**
 * 全局路由
 */
const getRouter = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} initial hideNavBar />
        <Scene
          key="ScanScreen"
          component={ScanScreen}
          backButtonTintColor="#ffffff"
          title="扫描二维码"
          titleStyle={{
            color: "#ffffff"
          }}
          navTransparent
          backTitle="返回"
          backButtonTextStyle={{ color: "#ffffff" }}
        />
      </Scene>
    </Router>
  );
};

export default getRouter;
