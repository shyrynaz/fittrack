import { View, Text, Pressable } from 'react-native';
import React from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProps
} from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';

type ModalProps = BottomSheetModalProps & {
  title?: string;
};

type ModalRef = React.ForwardedRef<BottomSheetModal>;

export const useModal = () => {
  const ref = React.useRef<BottomSheetModal>(null);
  const present = React.useCallback((data?: any) => {
    ref.current?.present(data);
  }, []);
  const dismiss = React.useCallback(() => {
    ref.current?.dismiss();
  }, []);
  return { ref, present, dismiss };
};

const Modal = React.forwardRef(
  (
    {
      snapPoints: _snapPoints = ['60%'],
      title,
      detached = false,
      ...props
    }: ModalProps,
    ref: ModalRef
  ) => {
    const detachedProps = React.useMemo(
      () => getDetachedProps(detached),
      [detached]
    );
    const modal = useModal();
    const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

    React.useImperativeHandle(
      ref,
      () => (modal.ref.current as BottomSheetModal) || null
    );

    const renderHandleComponent = React.useCallback(
      () => (
        <>
          <View className='mt-2 h-1 w-12 self-center rounded-lg bg-gray-400 dark:bg-gray-700' />
          <View className='flex-row py-4 px-2'>
            <View className='h-[24px] w-[24px]' />
            <View className='flex-1'>
              <Text className='text-center text-[16px] font-bold text-[#26313D]'>
                {title}
              </Text>
            </View>
            <Pressable
              className='h-[24px] w-[24px] items-center justify-center  '
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              accessibilityLabel='close modal'
              accessibilityRole='button'
              accessibilityHint='closes the modal'
              onPress={modal.dismiss}
            >
              <Ionicons name='close-sharp' size={24} color='#26313D' />
            </Pressable>
          </View>
        </>
      ),
      [title, modal.dismiss]
    );

    return (
      <BottomSheetModal
        {...props}
        {...detachedProps}
        ref={modal.ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={props.backdropComponent || renderBackdrop}
        handleComponent={renderHandleComponent}
      />
    );
  }
);

export const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
);

const getDetachedProps = (detached: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: { marginHorizontal: 16, overflow: 'hidden' }
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
};

export default Modal;
