import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default function SplashScreen() {
  return (
    <Container>
      <Text>SplashScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
