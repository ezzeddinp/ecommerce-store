"use client";

import { useState, useEffect } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false); // declared state var

    useEffect(() => {
        setIsMounted(true); 
    }, []); // second arg empty array, also means the effect will only run once when the component is mounted

    if (!isMounted) {
        return null; // return false or the exact one is not rendering anything
    }

    return (
        <PreviewModal />
    );
}
 
export default ModalProvider;