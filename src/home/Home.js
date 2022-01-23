import React from 'react';
import {FlatList} from 'react-native';
import {renderCardItem} from '../common/components/Card';
import {renderEmpty} from '../common/components/Empty';
import Header from '../common/components/Header';
import useNotes from '../common/hooks/useNotes';
import Container from '../common/styled/Container';
import AddNoteButton from './components/AddNoteButton';



const Home= (props) => {
  const {active} = useNotes();
  return (
    <Container>
      <Header title={'Notes'} />
      <FlatList
        data={active}
        renderItem={renderCardItem}
        scrollEnabled={!!active.length}
        ListEmptyComponent={renderEmpty}
        keyExtractor={item => item.id}
      />
      <AddNoteButton />
    </Container>
  );
};

export default Home;
