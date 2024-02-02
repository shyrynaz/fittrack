import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Container from '@/components/ui/Screen';
import { Input } from '@/components/ui/Input';
import { Link } from 'expo-router';
import { Button } from '@/components/ui/Button';
import Profile from '@/assets/svg/profile';
import { ScrollView } from 'react-native-gesture-handler';
import Select from '@/components/ui/Select';

const UserProfile = () => {
  const [gender, setGender] = useState<string | number | undefined>();
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
            <Text className='text-xl text-gray-500'>
              It will help us to know more about you!
            </Text>
          </View>
          <View className='flex-1 mt-1 flex flex-col gap-4'>
            <Select
              placeholder='Choose gender'
              icon='users'
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' }
              ]}
              value={gender}
              onSelect={option => setGender(option)}
            />
            <Input
              placeholder='Date of Birth'
              icon='calendar-alt'
              textContentType='birthdate'
            />
            <View className='flex flex-row gap-2'>
              <Input
                placeholder='Your Weight'
                icon='weight'
                className='flex-1'
              />
              <View className='w-16 flex-0 bg-[#C58BF2] flex items-center justify-center rounded-lg'>
                <Text className='text-white'>KG</Text>
              </View>
            </View>

            <View className='flex flex-row gap-2'>
              <Input
                placeholder='Your Height'
                icon='arrows-alt-v'
                className='flex-1'
              />
              <View className='w-16 flex-0 bg-[#C58BF2] flex items-center justify-center rounded-lg'>
                <Text className='text-white'>CM</Text>
              </View>
            </View>
          </View>
          <View className='bottom-0 mt-8'>
            <Link href='/(auth)/goal' asChild>
              <Button variant='default' label='Next' size='lg' />
            </Link>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default UserProfile;
