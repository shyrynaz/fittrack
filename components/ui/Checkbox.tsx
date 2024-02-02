import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../../lib/utils';

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  checkboxClasses?: string;
  checkedClasses?: string;
  labelClasses?: string;
}
function Checkbox({
  label,
  className,
  checkboxClasses = 'w-6 h-6 border border-gray-400 rounded bg-white flex justify-center items-center dark:bg-black dark:border-gray-200',
  checkedClasses = 'bg-black dark:bg-white',
  labelClasses = 'text-gray-500 dark:text-white',
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(prev => !prev);
  };

  return (
    <View
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    >
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(checkboxClasses, {
            'bg-black dark:bg-white': checked
          })}
        >
          {checked && (
            <Text className='text-white dark:text-black text-xs'>✓</Text>
          )}
        </View>
      </TouchableOpacity>
      {label && <Text className={labelClasses}>{label}</Text>}
    </View>
  );
}

export { Checkbox };
