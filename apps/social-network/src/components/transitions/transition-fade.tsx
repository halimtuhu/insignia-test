import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

type Props = {
  children: React.ReactNode;
};

export function TransitionFade({ children }: Props) {
  return (
    <Transition.Child
      as={Fragment}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  );
}
