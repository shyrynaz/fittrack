import { View, Text } from 'react-native';
import React from 'react';
import Container from '@/components/Screen';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { Link } from 'expo-router';
import { Button } from '@/components/Button';
import Profile from '@/assets/svg/profile';
import { ScrollView } from 'react-native-gesture-handler';

const UserProfile = () => {
  return (
    <Container>
      <ScrollView>
        <View>
          <Profile />
        </View>
        <View className='px-5 flex-1'>
          <View className='flex flex-col items-center my-2'>
            <Text className='text-2xl text-black font-bold'>
              Lets create your profile
            </Text>
            <Text className='text-xl text-gray-500 leading-10'>
              It will help us to know more about you!
            </Text>
          </View>
          <View className='flex-1 mt-1 flex flex-col gap-1'>
            <Input placeholder='First Name' icon='user' />
            <Input placeholder='Last Name' icon='user' />
            <Input
              placeholder='Email'
              textContentType='emailAddress'
              icon='envelope'
            />
            <Input
              placeholder='Password'
              textContentType='password'
              icon='lock'
            />
          </View>
          <View className='bottom-0 mt-4'>
            <Button variant='default' label='Next' size='xl' />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default UserProfile;
