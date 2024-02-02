import { View, Text, Dimensions } from 'react-native';
import React, { useMemo } from 'react';
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';
import Lift from '@/assets/svg/lift';

const { width: SCREEN_WIDTH, height } = Dimensions.get('window');

const CARD_WDTH = SCREEN_WIDTH * 0.86;

export type DataType = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

type ItemProps = {
  item: DataType;
  scrollX: Animated.SharedValue<number>;
  index: number;
};

const CarouselItem = ({ scrollX, index, item }: ItemProps) => {
  const rnStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * CARD_WDTH,
      index * CARD_WDTH,
      (index + 1) * CARD_WDTH
    ];
    const outputRange = [height * 0.4, height * 0.65, height * 0.4];
    const opacityRange = [0.6, 1, 0.6];
    return {
      marginRight: 0,
      width: CARD_WDTH,
      height: interpolate(
        scrollX.value,
        inputRange,
        outputRange,
        Extrapolation.CLAMP
      ),
      opacity: interpolate(
        scrollX.value,
        inputRange,
        opacityRange,
        Extrapolation.CLAMP
      )
    };
  }, []);
  return (
    <Animated.View
      style={rnStyle}
      className={'rounded-3xl bg-[#92A3FD] mx-1 p-4 '}
    >
      <View className='flex-1 items-center justify-center'>
        <Lift />
      </View>
      <View className='flex flex-col items-center justify-center gap-3 px-6 bottom-10'>
        <Text className='text-white font-bold text-center'>{item.title}</Text>
        <Text className='text-white text-center'>{item.description}</Text>
      </View>
    </Animated.View>
  );
};

export default CarouselItem;
