import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import rpx from '@/utils/rpx';
import {Button, Dialog, Paragraph} from 'react-native-paper';
import useDialog from '../useDialog';

interface ISimpleDialogProps {}
export default function SimpleDialog(props: ISimpleDialogProps) {
  const {dialogName, hideDialog, payload} = useDialog();
  return (
    <Dialog visible={dialogName === 'simple-dialog'} onDismiss={hideDialog}>
      <Dialog.Title>{payload?.title}</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{payload?.content}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={hideDialog}>取消</Button>
        <Button
          onPress={() => {
            payload?.onOk?.();
            hideDialog();
          }}>
          确认
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}

const style = StyleSheet.create({
  wrapper: {
    width: rpx(750),
  },
});