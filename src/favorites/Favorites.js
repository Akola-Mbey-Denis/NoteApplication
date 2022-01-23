import React from 'react';
import {renderCardItem} from '../common/components/Card';
import {renderEmpty} from '../common/components/Empty';
import Header from '../common/components/Header';
import useNotes from '../common/hooks/useNotes';
import Container from '../common/styled/Container';
import FlatList from '../common/styled/FlatList';


const Favorites= (props) => {
  const {favorites} = useNotes();
  return (
    <Container>
      <Header title={'Favorites'} />
      <FlatList
        data={favorites}
        renderItem={renderCardItem}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={!!favorites.length}
        keyExtractor={item=>item.id}
      />
    </Container>
  );
};

export default Favorites;
