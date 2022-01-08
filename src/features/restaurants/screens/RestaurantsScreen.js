import React from 'react';
import {
  StatusBar, // current height of statusBar only for android
  SafeAreaView, //only works for iOS
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`};
`;

const SearchBarContainer = styled.View`
  padding: 20px;
`;

const RestaurantsListContainer = styled.View`
  background-color: orange;
  flex: 1;
  padding: 20px;
`;

export const RestaurantsScreen = () => (
  <SafeAreaContainer>
    <SearchBarContainer>
      <Searchbar />
    </SearchBarContainer>
    <RestaurantsListContainer>
      <RestaurantInfoCard />
    </RestaurantsListContainer>
  </SafeAreaContainer>
);
