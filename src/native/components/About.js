import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import twenty from '../../../docs/bobacup25.png';
import twentyselected from '../../../docs/bobacup25-selected.png';

import fifty from '../../../docs/bobacup50.png';
import fiftyselectd from '../../../docs/bobacup50-selected.png';

import seventy from '../../../docs/bobacup75.png';
import seventyselected from '../../../docs/bobacup75-selected.png';

import hundred from '../../../docs/bobacup100.png';
import hundredselected from '../../../docs/bobacup100-selected.png';

import none from '../../../docs/bobanone.png';
import little from '../../../docs/bobalil.png';
import more from '../../../docs/bobamore.png';
import ton from '../../../docs/bobaton.png';
import styles from './styles';

class About extends React.Component {
  state = {
    sweetness: '',
  };

  // Update sweetness onPress
  selectSweetness = sweetness => {
    this.setState({ sweetness });
  };

  render() {
    const { sweetness } = this.state;
    return (
      <View style={styles.main}>
        <Text style={styles.subtitle}>Select your sweetness</Text>

        <View style={styles.sweetness}>
          <TouchableOpacity onPress={() => this.selectSweetness('25')}>
            <Image
              style={styles.img}
              source={sweetness === '25' ? twentyselected : twenty}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('50')}>
            <Image
              style={styles.img}
              source={sweetness === '50' ? fiftyselectd : fifty}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('75')}>
            <Image
              style={styles.img}
              source={sweetness === '75' ? seventyselected : seventy}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('100')}>
            <Image
              style={styles.img}
              source={sweetness === '100' ? hundredselected : hundred}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Select your boba amount</Text>

        <View style={styles.bobaAmount}>
          <Image style={styles.img} source={none} />
          <Image style={styles.img} source={little} />
          <Image style={styles.img} source={more} />
          <Image style={styles.img} source={ton} />
        </View>
      </View>
    );
  }
}

export default About;
