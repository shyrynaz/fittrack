import { View, Text } from 'react-native';
import React from 'react';
import Container from '@/components/ui/Screen';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link } from 'expo-router';

const Login = () => {
  return (
    <Container>
      <View className='px-5 flex-1'>
        <View className='flex flex-col items-center my-3'>
          <Text className='text-2xl text-gray-500'>Login</Text>
          <Text className='text-2xl text-black font-bold'>Welcome Back</Text>
        </View>
        <View className='flex-1 mt-10 flex flex-col gap-4'>
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
        <View className='bottom-10 mb-4'>
          <Button variant='default' label='Login' size='xl' icon='login' />
          <View className='border border-gray-200 my-4' />
          <View className='flex flex-row items-center justify-center '>
            <Link href='/(auth)/register'>
              <Text className='text-gray-800 text-lg'>
                Don't have an account yet?{' '}
                <Text className='font-bold text-purple-500'>Register</Text>{' '}
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
