import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {style} from './Style';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import {commonStyle} from '../../common/CommonStyle';
import Trending from './components/Trending';
import Category from './components/Category';

export default function Home() {
  return (
    <SafeAreaView style={commonStyle.screenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.homeContainer}>
        <Header />
        <Toolbar />
        <Trending />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}
