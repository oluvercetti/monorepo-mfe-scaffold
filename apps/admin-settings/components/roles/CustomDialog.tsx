"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@repo/ui/src/components/ui/dialog";
import { Button } from "@repo/ui/src/components/ui/button";
import { AlertCircle } from "lucide-react";
import { ReactNode } from "react";

type DialogProps = {
  triggerText: string;
  title: string;
  description: string;
  footer?: ReactNode;
  closeBtnText: string;
  actionBtnText: string;
  actionBtnClick?: () => void;
};

const CustomDialog = ({
  triggerText,
  title,
  description,
  footer,
  closeBtnText,
  actionBtnText,
  actionBtnClick,
}: DialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-primary-100 rounded-full p-3">
            <AlertCircle className="text-primary-600 h-6 w-6" />
          </div>
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </div>
        <DialogFooter className="mt-6 gap-2">
          {footer || (
            <>
              {closeBtnText && (
                <DialogClose asChild>
                  <Button className="flex-1" variant="outline">
                    {closeBtnText}
                  </Button>
                </DialogClose>
              )}
              {actionBtnText && (
                <Button
                  onClick={actionBtnClick}
                  className="flex-1"
                  variant="default"
                >
                  {actionBtnText}
                </Button>
              )}
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
