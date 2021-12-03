import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NumberFormat from 'react-number-format';

const Number = ({value, style}) => {
  return (
    <NumberFormat
      value={value}
      thousandSeparator="."
      displayType="text"
      prefix="Rp "
      decimalSeparator=","
      renderText={value => <Text style={style}>{value}</Text>}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
