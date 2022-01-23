import React from 'react';
import {renderCardItem} from '../common/components/Card';
import {renderEmpty} from '../common/components/Empty';
import Header from '../common/components/Header';
import useNotes from '../common/hooks/useNotes';
import Container from '../common/styled/Container';
import FlatList from '../common/styled/FlatList';


const Archived = () => {
  const {archived} = useNotes();
  return (
    <Container>
      <Header title={'Archived'} />
      <FlatList
        data={archived}
        renderItem={renderCardItem}
        ListEmptyComponent={renderEmpty}
        scrollEnabled={!!archived.length}
      />
    </Container>
  );
};

export default Archived;
