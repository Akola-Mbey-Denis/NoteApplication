import React from 'react';
import styled from 'styled-components/native';
import Icon from '../../common/components/Icon';
import {colors} from '../../common/constants';
import useTheme from '../../common/hooks/useTheme';


const ToolBar = (props) => {
  const {theme} = useTheme();
  return (
    <SafeAreaView>
      <Content>
        <ToggleEdit testID={'toggle-edit'} onPress={props.toggleIsEditing}>
          <Icon
            size={25}
            type={'MaterialIcons'}
            color={props.isEditing ? colors.danger : theme.primaryText}
            name={props.isEditing ? 'edit-off' : 'edit'}
          />
        </ToggleEdit>
      </Content>
    </SafeAreaView>
  );
};

const ToggleEdit = styled.TouchableOpacity``;

const SafeAreaView = styled.SafeAreaView``;

const Content = styled.KeyboardAvoidingView`
  width: 100%;
  padding: 17px;
  flex-direction: row;
  justify-content: flex-end;
`;

export default ToolBar;
