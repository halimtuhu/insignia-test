import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

type Props = {
  children: React.ReactNode;
};

export function TransitionSlideUp({ children }: Props) {
  return (
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out  duration-300"
      enterFrom="opacity-0 -translate-y-4"
      enterTo="opacity-100 translate-y-0"
      leave="transform transition ease-in-out duration-300"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-4"
    >
      {children}
    </Transition.Child>
  );
}
