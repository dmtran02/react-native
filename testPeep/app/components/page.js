import React, {Component} from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default () =>  <Icon name="alarm" size={80} color="#bf1313" />;