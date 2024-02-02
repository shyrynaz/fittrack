import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet
} from 'react-native';
import React from 'react';
import Container from '@/components/ui/Screen';
import { useSharedValue } from 'react-native-reanimated';
import CarouselItem, { DataType } from '@/components/CarouselItem';
import { Link } from 'expo-router';
import { Button } from '@/components/ui/Button';
import Lift from '@/assets/svg/lift';
import Jump from '@/assets/svg/jump';
import Run from '@/assets/svg/run';

const carouselItems = [
  {
    title: 'Improve Shape',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    icon: <Lift />
  },
  {
    title: 'Lean & Tone',
    description:
      'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    icon: <Jump />
  },
  {
    title: 'Lose Fat',
    description:
      'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    icon: <Run />
  }
];

const Goal = () => {
  const scrollXOffset = useSharedValue(0);
  const renderItem = ({ item, index }: { item: DataType; index: number }) => (
    <CarouselItem item={item} scrollX={scrollXOffset} index={index} />
  );
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollXOffset.value = e.nativeEvent.contentOffset.x;
  };

  return (
    <Container>
      <View className='flex-1'>
        <View className='flex flex-col items-center my-3 mb-7 px-12'>
          <Text className='text-2xl text-black font-bold text-center'>
            What is your goal ?
          </Text>
          <Text className='text-lg text-gray-500 text-center'>
            It will help us to choose the best program for you
          </Text>
        </View>
        <FlatList
          data={carouselItems}
          renderItem={renderItem}
          keyExtractor={item => item.title.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          bounces={false}
          contentContainerStyle={styles.listStyle}
          scrollEventThrottle={16}
        />
        <View className='mt-5 bottom-5 px-8 mr-4'>
          <Link href='/(auth)/profile' asChild>
            <Button variant='default' label='Confirm' size='lg' />
          </Link>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listStyle: {
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Goal;
