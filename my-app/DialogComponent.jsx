/* componente para utilizar Radix UI com Tailwind CSS*/
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const DialogComponent = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-bold">Dialog Title</Dialog.Title>
          <Dialog.Description className="mt-2">
            This is the dialog description.
          </Dialog.Description>
          <Dialog.Close className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogComponent;