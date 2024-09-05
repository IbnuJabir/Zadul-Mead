"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { copyToClipboard } from "./CopyClipboard";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface DialogComponentProps {
  onClose: () => void;
}
export function DialogComponent({ onClose }: DialogComponentProps) {
  const textRef = useRef<HTMLInputElement>(null);
  const regRef = useSelector(
    (state: RootState) => state.register.registrationRef
  );
  console.log("regReg", regRef);
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Registration completed ✅</DialogTitle>
          <DialogDescription>
            Your registration was successful. Here is your registration
            reference. You will need this reference to view your registration
            information later.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Registration Reference
            </Label>
            <Input id="link" defaultValue={regRef} readOnly ref={textRef} />
          </div>
          <Button
            type="button"
            size="sm"
            className="px-3"
            onClick={() => copyToClipboard(textRef)}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface ErrorDialogComponentProps {
  onClose: () => void;
}

export function ErrorDialogComponent({ onClose }: ErrorDialogComponentProps) {
  const errorMessage = useSelector((state: RootState) => state.register.error);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-500">Error Occurred ❌</DialogTitle>
          <DialogDescription>
            {errorMessage ||
              "An unexpected error occurred. Please try again later."}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
