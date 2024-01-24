import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  type PressableProps
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  BottomSheetFlatList,
  type BottomSheetModal
} from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import Modal, { useModal } from '@/components/ui/Modal';
import { cn } from '@/lib/utils';

export type Option = { label: string; value: string | number };

export interface SelectProps {
  value?: string | number;
  icon?: 'users';
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: Option[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}

const Select = (props: SelectProps) => {
  const {
    value,
    label,
    disabled,
    error,
    options = [],
    onSelect,
    placeholder,
    icon
  } = props;

  const modal = useModal();

  const onSelectOption = React.useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect]
  );

  const textValue =
    value !== undefined
      ? options?.filter(t => t.value === value)?.[0]?.label ?? placeholder
      : placeholder;
  return (
    <>
      <View className='mb-0'>
        {label && <Text className='text-md text-gray-300'>{label}</Text>}
        <TouchableOpacity
          className='mt-0 flex-row h-12 items-center py-3 px-2 text-[16px] rounded-md bg-gray-100'
          disabled={disabled}
          onPress={() => modal.present()}
        >
          <View className='flex-1 flex flex-row items-center gap-4'>
            <Feather
              name={icon}
              size={16}
              color='gray'
              className='text-gray-200'
            />
            <Text className={value ? 'text-gray-600' : 'text-gray-400'}>
              {textValue}
            </Text>
          </View>

          <Feather
            name={'chevron-right'}
            size={16}
            color='gray'
            className='text-gray-200'
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <Options
        ref={modal.ref}
        options={options}
        onSelect={onSelectOption}
        value={value}
      />
    </>
  );
};

const Option = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
  }) => {
    return (
      <Pressable
        className={cn(
          'flex-row items-center border-b-[1px] border-neutral-200 bg-white py-3 px-3 dark:border-charcoal-700 dark:bg-charcoal-800',
          selected && 'bg-purple-100 dark:bg-neutral-700'
        )}
        onPress={props.onPress}
        {...props}
      >
        <Text className='flex-1 text-md text-gray-700 '>{label}</Text>
        {selected && <Feather name='check' fill='fill-black dark:fill-white' />}
      </Pressable>
    );
  }
);

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: string | number;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

export const Options = React.forwardRef<BottomSheetModal, OptionsProps>(
  ({ options, onSelect, value }, ref) => {
    const height = options.length * 70 + 100;
    const snapPoints = React.useMemo(() => [height], [height]);
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const renderSelectItem = React.useCallback(
      ({ item }: { item: Option }) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value === item.value}
          onPress={() => onSelect(item)}
        />
      ),
      [onSelect, value]
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: 'white'
        }}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
        />
      </Modal>
    );
  }
);

export default Select;
