import { RefObject } from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export const copyToClipboard = (textRef: RefObject<HTMLInputElement>) => {
  if (textRef.current) { // Ensure textRef.current is not null
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);

    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  } else {
    toast.error("Failed to copy: No text found");
  }
};
