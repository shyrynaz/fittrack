import { View, Text, Dimensions } from 'react-native';
import React, { useMemo } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated';
import Lift from '@/assets/svg/lift';

const { width: SCREEN_WIDTH, height } = Dimensions.get('window');

const CARD_WDTH = SCREEN_WIDTH * 0.9;

export type DataType = {
  title: string;
  icon: string;
  image: string;
  ar: number;
  description: string;
};

type ItemProps = {
  item: DataType;
  scrollX: Animated.SharedValue<number>;
  index: number;
};

const CarouselItem = ({ scrollX, index, item }: ItemProps) => {
  const inputRange = useMemo(
    () => [(index + 0.5) * CARD_WDTH, (index + 1) * CARD_WDTH],
    [index]
  );
  const outputRange = useMemo(() => [CARD_WDTH, index + 1], []);
  const rnStyle = useAnimatedStyle(() => {
    return {
      marginRight: 0,
      width: interpolate(
        scrollX.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      ),
      height: height * 0.6
    };
  }, [inputRange, outputRange]);
  return (
    <Animated.View
      style={rnStyle}
      className={'rounded-3xl bg-[#92A3FD] mx-1 p-4 h-14'}
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
