import { View, Text } from 'react-native';
import React from 'react';
import Container from '@/components/ui/Screen';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Link } from 'expo-router';
import { Button } from '@/components/ui/Button';

const Register = () => {
  return (
    <Container>
      <View className='px-5 flex-1'>
        <View className='flex flex-col items-center my-3'>
          <Text className='text-xl text-gray-500'>Hey There,</Text>
          <Text className='text-2xl text-black font-bold'>
            Create an Account
          </Text>
        </View>
        <View className='flex-1 mt-10 flex flex-col gap-4'>
          <Input placeholder='First Name' icon='user' className='h-16' />
          <Input placeholder='Last Name' icon='user' className='h-16' />
          <Input
            placeholder='Email'
            textContentType='emailAddress'
            icon='envelope'
            className='h-16'
          />
          <Input
            placeholder='Password'
            textContentType='password'
            icon='lock'
            className='h-16'
          />
          <Checkbox
            className='mt-4'
            label='By continuing you accept our Terms of Use'
          />
        </View>
        <View className='bottom-10 mb-4'>
          <Link href='/(auth)/profile' asChild>
            <Button variant='default' label='Register' size='xl' icon='login' />
          </Link>
          <View className='border border-gray-200 my-4' />
          <View className='flex flex-row items-center justify-center '>
            <Link href='/(auth)/profile'>
              <Text className='text-gray-800 text-lg'>
                Already have an account?{' '}
                <Text className='font-bold text-purple-500'>Login</Text>{' '}
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Register;
