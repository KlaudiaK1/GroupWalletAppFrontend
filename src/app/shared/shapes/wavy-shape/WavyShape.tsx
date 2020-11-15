import React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components/native';

const StyledTopContainer = styled.View<{width: number; height: number}>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const StyledBottomContainer = styled.View<{width: number; height: number}>`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-top: ${(props) => props.height - 92}px;
`;
const WavyShape = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <StyledTopContainer width={width} height={height}>
        <Svg width="100%" height="100%">
          <Path
            fill="#202f46"
            d="M-.5-20.346h500.7874v96.742C339.6575-29.795 160.13 160.4256-.5 68.1037z"
          />
        </Svg>
      </StyledTopContainer>
      <StyledBottomContainer width={width} height={height}>
        <Svg width="100%" height="100%">
          <Path
            fill="#202f46"
            d="M0 0h500.7874v65.1542C250.3937 38.1618 250.3937 91.216 0 59.5696z"
            transform="matrix(-1 0 0 -1 501.7874 70.5)"
          />
        </Svg>
      </StyledBottomContainer>
    </View>
  );
};

export default WavyShape;
