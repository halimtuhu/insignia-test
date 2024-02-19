'use client';

import React, { Fragment, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IconsX } from './icons/icons-x';
import { Transition } from '@headlessui/react';
import { TransitionFade } from './transitions/transition-fade';
import { TransitionSlideUp } from './transitions/transition-slide-up';

type ModalProps = {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ show, children, onClose }: ModalProps) {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById('portal');
  });

  const modal = (
    <Transition appear show={show} as={Fragment}>
      <div className="fixed inset-0 h-screen w-screen">
        <TransitionFade>
          <div className="bg-primary/75 absolute inset-0 h-full w-full"></div>
        </TransitionFade>
        <TransitionSlideUp>
          <div className="relative flex flex-col items-center gap-4 px-4 py-8">
            {children}
            <button
              onClick={onClose}
              className="text-accent flex h-8 w-8 items-center justify-center rounded-full"
            >
              <IconsX strokeWidth={4} />
            </button>
          </div>
        </TransitionSlideUp>
      </div>
    </Transition>
  );

  return ref.current ? createPortal(modal, ref.current) : null;
}
