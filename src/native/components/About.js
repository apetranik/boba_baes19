import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

import Bluetooth from 'Bluetooth.js';
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
    firmness: '',
    inProgress: false,
  };

  // Update sweetness onPress
  selectSweetness = (sweetness) => {
    this.setState({ sweetness });
  };

  selectFirmness = (firmness) => {
    this.setState({ firmness });
  };

  start = () => {
    this.setState({ inProgress: true });
  };

  back = () => {
    this.setState({ inProgress: false });
  };

  render() {
    const { sweetness, firmness } = this.state;
    if (this.state.inProgress) {
      return (
        <View>
          <TouchableOpacity>
            <Text onPress={() => this.back()}> Back</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.main}>
        <Bluetooth />
        <Text style={styles.subtitle}>Select your sweetness</Text>

        <View style={styles.sweetness}>
          <TouchableOpacity onPress={() => this.selectSweetness('25')}>
            <Image style={styles.img} source={sweetness === '25' ? twentyselected : twenty} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('50')}>
            <Image style={styles.img} source={sweetness === '50' ? fiftyselectd : fifty} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('75')}>
            <Image style={styles.img} source={sweetness === '75' ? seventyselected : seventy} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.selectSweetness('100')}>
            <Image style={styles.img} source={sweetness === '100' ? hundredselected : hundred} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Select your firmness</Text>

        <View style={styles.bobaAmount}>
          <TouchableOpacity
            onPress={() => this.selectFirmness('0')}
            style={firmness === '0' ? styles.selected_touch : styles.non_selected_touch}
          >
            <Text style={styles.textOptions}> Soft </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.selectFirmness('50')}
            style={firmness === '50' ? styles.selected_touch : styles.non_selected_touch}
          >
            <Text style={styles.textOptions}> Normal </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.selectFirmness('100')}
            style={firmness === '100' ? styles.selected_touch : styles.non_selected_touch}
          >
            <Text style={styles.textOptions}> Firm </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => this.start()} style={styles.start_button}>
          <Text style={styles.startText}> START BOBA </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default About;
