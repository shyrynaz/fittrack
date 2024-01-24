import { View, Text, Pressable } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const OnboardingNextButton = ({
  percentage,
  onPress
}: {
  percentage: number;
  onPress: () => void;
}) => {
  const size = 60;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;

  const progressAnimation = useSharedValue(
    circumference - (circumference * percentage) / 100
  );

  useEffect(() => {
    progressAnimation.value = withSpring(
      circumference - (circumference * percentage) / 100
    );
  }, [percentage]);

  const handleClick = () => {
    onPress();
  };

  return (
    <Pressable onPress={handleClick}>
      <View className='relative'>
        <Svg width={size} height={size} className='relative'>
          <G rotation='-90' origin={center}>
            <Circle
              cx={center}
              cy={center}
              r={radius - 4}
              fill='#92A3FD'
              strokeWidth={0}
              stroke='white'
            />
            <Circle
              cx={center}
              cy={center}
              r={radius}
              fill='none'
              strokeWidth={strokeWidth}
              stroke='#92A3FD'
              strokeDasharray={circumference}
              strokeDashoffset={progressAnimation.value}
            />
          </G>
        </Svg>
        <Pressable
          style={{ position: 'absolute', top: 20, right: 22 }}
          onPress={onPress}
        >
          <FontAwesome5 name='chevron-right' size={18} color='white' />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default OnboardingNextButton;
