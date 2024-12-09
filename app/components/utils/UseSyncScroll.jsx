"use client";
import { useEffect } from "react";

const useSyncScroll = (sourceRef, targetRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (sourceRef.current && targetRef.current) {
        targetRef.current.scrollTop = sourceRef.current.scrollTop;
      }
    };

    const sourceElement = sourceRef.current;
    sourceElement?.addEventListener("scroll", handleScroll);

    return () => {
      sourceElement?.removeEventListener("scroll", handleScroll);
    };
  }, [sourceRef, targetRef]);
};

export default useSyncScroll;
