"use client";

import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import IconButton from "./icon-button";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-50" />

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-105"
                                enterTo="opacity-100 scale-110"
                                leave="ease-in duration-500"
                                leaveFrom="opacity-100 scale-110"
                                leaveTo="opacity-0 scale-105"
                            >
                                <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-md text-left align-middle">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-black px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt8 md:p-6 lg:p-8">
                                        <div className="absolute right-4 top-4">
                                            <IconButton onClick={onClose} icon={<X size={10} className="dark:text-black" />} />
                                        </div>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
            </Dialog>
        </Transition>
    )
};

export default Modal;