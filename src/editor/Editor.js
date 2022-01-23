import React from 'react';
import styled from 'styled-components/native';
import {ConditionRenderComponent} from '../common/components/ConditionRender';
import Container from '../common/styled/Container';
import ScrollView from '../common/styled/ScrollView';
import Parser from '../parser/Parser';
import Header from './components/Header';
import ToolBar from './components/ToolBar';
import useEditorLogic from './hooks/useEditorLogic';



const Editor= (props) => {
  const logic = useEditorLogic();
  return (
    <Container>
      <Header
        isArchived={logic.isArchived}
        isFavorite={logic.isFavorite}
        toggleNoteArchived={logic.toggleNoteArchived}
        toggleNoteFavorite={logic.toggleNoteFavorite}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ConditionRenderComponent renderIf={logic.isEditing}>
          <NoteTextInput
            multiline
            autoFocus
            placeholder={'Note'}
            testID={'note-input'}
            defaultValue={logic.note?.text}
            onChangeText={logic.handlerTextChange}
          />
        </ConditionRenderComponent>
        <ConditionRenderComponent renderIf={!logic.isEditing}>
          <Parser text={logic.note?.text} />
        </ConditionRenderComponent>
      </ScrollView>
      <ToolBar
        isEditing={logic.isEditing}
        toggleIsEditing={logic.toggleIsEditing}
      />
    </Container>
  );
};

const NoteTextInput = styled.TextInput.attrs(props => ({
  scrollEnabled: false,
  placeholderTextColor: props.theme.primaryText,
}))`
  color: ${props => props.theme.primaryText};
`;

export default Editor;
