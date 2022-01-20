import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

// StatusBar, current height of statusBar only for android
// SafeAreaView, only works for iOS
