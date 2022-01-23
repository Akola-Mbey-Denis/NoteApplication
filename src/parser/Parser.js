import React from 'react';
import HTMLView from 'react-native-htmlview';
import styled from 'styled-components/native';
import parseMarkdown from './helpers/parseMarkdown';



const Parser = (props )=> {
  const parseText = parseMarkdown(props.text);
  return <Text value={parseText} maxHeight={props.maxHeight} />;
};


const Text = styled(HTMLView).attrs(props => ({
  textComponentProps: {
    style: {
      color: props.theme.primaryText,
    },
  },
  rootComponentProps: {
    overflow: 'hidden',
    maxHeight: props.maxHeight,
  },
}))``;

export default React.memo(Parser);
