import React from 'react';
import styled from 'styled-components/native';
import Parser from '../../parser/Parser';
import {getOpenEditor} from '../services/navigatorservice';


const Card= (props) => {
  return (
    <Container testID={'card'} activeOpacity={0.8} onPress={props.onPress}>
      <Parser maxHeight={200} text={props.item.text} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-horizontal: 7px;
  border-width: 1.5px;
  max-height: 200px;
  border-color: ${props => props.theme.surface};
`;

export const renderCardItem = ({item}) => {
  const openEditor = getOpenEditor(item.id);
  return <Card item={item} key={item.id} onPress={openEditor} />;
};

export default Card;
