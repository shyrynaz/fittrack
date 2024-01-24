import { useState } from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
  TextInputProps
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const defaultContainerClasses =
  'flex h-16 rounded-lg flex-row items-center pl-3 gap-1.5 bg-gray-100 dark:bg-slate-800';
const defaultLabelClasses = 'text-base text-black dark:text-white';
const defaultInputClasses = 'h-full';

type TextContentType = TextInputProps['textContentType'];

interface InputProps {
  label?: string;
  icon?: 'envelope' | 'lock' | 'user';
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  textContentType?: TextContentType;
  value?: string;
  onChange?: (value: string) => void;
  containerClasses?: string;
  inputClasses?: string;
  labelClasses?: string;
}
export function Input({
  label,
  icon,
  placeholder,
  keyboardType = 'default',
  textContentType = 'none',
  value,
  onChange,
  containerClasses = defaultContainerClasses,
  inputClasses = defaultInputClasses,
  labelClasses = defaultLabelClasses
}: InputProps) {
  const [text, onChangeText] = useState('');

  return (
    <View className={containerClasses}>
      {label && <Text className={labelClasses}>{label}</Text>}
      {icon && (
        <FontAwesome5
          name={icon}
          size={20}
          color='gray'
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        className={inputClasses}
        keyboardType={keyboardType}
        onChangeText={onChange || onChangeText}
        placeholder={placeholder}
        value={value || text}
        textContentType={textContentType}
      />
    </View>
  );
}
