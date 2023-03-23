//@ts-nocheck
import React from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Text from './Text';
import * as Colors from '../config/colors';

const CELL_COUNT = 4;

const CodeInput = ({value, setValue}) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        h2
        medium
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onFocus={Keyboard}
      editable={true}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      renderCell={renderCell}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    width: '20%',
    borderWidth: 1,
    backgroundColor: '#F6FAFF',
    borderColor: '#F6FAFF',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    paddingVertical: 13,
  },
  cellTxt: {
    alignItems: 'center',
    fontSize: 20,
    color: Colors.text,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default CodeInput;
