import React, {useEffect} from 'react';
import Logo from '../common/assets/logo.svg';
import {navigateToBottomTab} from '../common/services/navigatorservice';
import Container from '../common/styled/Container';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigateToBottomTab();
    }, 1500);
  }, []);

  return (
    <Container>
      <Logo width={200} height={200}/>
    </Container>
  );
};

export default Splash;
