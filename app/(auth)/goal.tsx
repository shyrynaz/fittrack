import {
  View,
  Text,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet
} from 'react-native';
import React, { useRef, useState } from 'react';
import Container from '@/components/ui/Screen';
import { useSharedValue } from 'react-native-reanimated';
import CarouselItem, { DataType } from '@/components/CarouselItem';
import { Link } from 'expo-router';
import { Button } from '@/components/ui/Button';

const carouselItems = [
  {
    title: 'Improve Shape',
    description:
      'I have a low amount of body fat and need / want to build more muscle',
    icon: '',
    image:
      'https://images.unsplash.com/photo-1678436748951-ef6d381e7a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D',
    ar: 0.7
  },
  {
    title: 'Lean & Tone',
    description:
      'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    icon: '',
    image:
      'https://images.unsplash.com/photo-1680813977591-5518e78445a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ar: 0.67
  },
  {
    title: 'Lose Fat',
    description:
      'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    icon: '',
    image:
      'https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ar: 0.8
  }
];

const goal = () => {
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
          keyExtractor={item => item.image.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          bounces={false}
          contentContainerStyle={styles.listStyle}
          scrollEventThrottle={16}
        />
        <View className='mt-5 bottom-10 px-12'>
          <Link href='/(auth)/profile' asChild>
            <Button variant='default' label='Confirm' size='xl' icon='login' />
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
  listStyle: { paddingHorizontal: 16 }
});

export default goal;
