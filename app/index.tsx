import { cn } from '@/lib/utils';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import {
  GestureDetector,
  Gesture,
  Directions
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight
} from 'react-native-reanimated';
import Track from '@/assets/svg/track';
import Burn from '@/assets/svg/burn';
import Eat from '@/assets/svg/eat';
import Sleep from '@/assets/svg/sleep';
import OnboardingNextButton from '@/components/OnboardingNextButton';

const onboardingSteps = [
  {
    icon: <Track />,
    title: 'Track Your Goal',
    description:
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
  },
  {
    icon: <Burn />,
    title: 'Get Burn',
    description:
      'Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever'
  },
  {
    icon: <Eat />,
    title: 'Eat Well',
    description:
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun"
  },
  {
    icon: <Sleep />,
    title: 'Improve Sleep  Quality',
    description:
      'Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning'
  }
];

const OnBoarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.push('/(auth)');
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <View className='flex-1 justify-center'>
      <GestureDetector gesture={swipes}>
        <View className='flex-1' key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            {data.icon}
          </Animated.View>

          <View className='m-auto mt-11 px-4'>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              className={'text-gray-900 text-xl my-2 font-bold'}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              className={'text-gray-500 text-base'}
            >
              {data.description}
            </Animated.Text>
          </View>
          <View className='absolute bottom-10 w-full justify-between px-4 flex-row gap-4 mt-16 items-center'>
            <Text onPress={endOnboarding} className=' text-gray-600 font-bold'>
              Skip
            </Text>
            <OnboardingNextButton
              percentage={(screenIndex + 1) * (100 / onboardingSteps.length)}
              onPress={onContinue}
            />
          </View>
        </View>
      </GestureDetector>
    </View>
  );
};

export default OnBoarding;
