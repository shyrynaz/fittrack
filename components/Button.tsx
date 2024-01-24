import { type VariantProps, cva } from 'class-variance-authority';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-[#92A3FD]',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        ghost: 'bg-slate-700',
        link: 'text-primary underline-offset-4'
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
        xl: 'h-16 px-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground text-white font-bold',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline'
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
      xl: 'text-2xl'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string;
  labelClasses?: string;
  icon?: 'login';
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      {...props}
      className={cn(buttonVariants({ variant, size, className: labelClasses }))}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={size === 'xl' ? 24 : 16}
          color='white'
          className='mr-2'
        />
      )}
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export { Button, buttonVariants, buttonTextVariants };
