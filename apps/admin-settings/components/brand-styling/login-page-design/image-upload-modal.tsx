import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/src/components/ui/dialog";
import Image from "next/image";
import React, { useRef, useState } from "react";

import { inter } from "@repo/ui/src/styles/font";

interface ImageUploadModalProps {
  open: boolean;
  onClose: () => void;
  onUpload: (_url: string) => void;
  title?: string;
  buttonLabel?: string;
  aspectRatio?: string;
  maxSizeMB?: number;
  initialPreview?: string | null;
}

export default function ImageUploadModal({
  open,
  onClose,
  onUpload,
  title = "Upload Image",
  buttonLabel = "Upload",
  aspectRatio = "100 × 100",
  maxSizeMB = 5,
  initialPreview = null,
}: ImageUploadModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(initialPreview);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      if (f.size > maxSizeMB * 1024 * 1024) {
        setError(`File size exceeds ${maxSizeMB}MB.`);
        return;
      }
      setFile(f);
      setPreview(URL.createObjectURL(f));
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const f = e.dataTransfer.files[0];
      if (f.size > maxSizeMB * 1024 * 1024) {
        setError(`File size exceeds ${maxSizeMB}MB.`);
        return;
      }
      setFile(f);
      setPreview(URL.createObjectURL(f));
      setError(null);
    }
  };

  const handleUpload = () => {
    if (file && preview) {
      onUpload(preview);
      setFile(null);
      setPreview(null);
      setError(null);
      onClose();
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    setError(null);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogContent className={`max-w-[380px] p-0 ${inter.className}`}>
        <DialogHeader>
          <DialogTitle className="pb-2 pt-6 text-center text-[16px] font-bold leading-[24px] text-[#333333]">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center px-6 pb-0">
          {!preview ? (
            <div
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#CBD5E1] py-8 transition-colors hover:border-[#1659E6]"
              onClick={() => inputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <Image
                src="/assets/svgs/add.svg"
                alt="Add"
                width={40}
                height={40}
                className="mb-2"
              />
              <div className="space-y-3 text-[14px] leading-[18px] text-[#232323]">
                <span className="cursor-pointer text-[#6D1580] underline">
                  Upload
                </span>{" "}
                image or drag image here.
                <br />
                <p className="text-center">
                  {aspectRatio}. {maxSizeMB}MB Max.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center pt-2">
              <div className="mb-4 flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-lg border bg-[#F5F5F5]">
                <Image
                  src={preview}
                  alt="Preview"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                className="mb-2 rounded border border-[#1659E6] px-4 py-1 text-[12px] font-medium leading-[18px] text-[#1659E6]"
                onClick={() => inputRef.current?.click()}
              >
                Change Image
              </button>
            </div>
          )}
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="mb-4 mt-2 text-center text-[12px] text-[#A3A3A3]">
            {aspectRatio}. {maxSizeMB}MB Max.
          </div>
          {error && <div className="mb-2 text-xs text-red-500">{error}</div>}
        </div>
        <DialogFooter className="border-t bg-white px-6 py-4">
          <button
            type="button"
            className="mr-2 h-10 flex-1 rounded-lg border border-[#EBEBEB] bg-white text-[12px] font-medium leading-[18px] text-[#333333]"
            onClick={() => {
              handleRemove();
              onClose();
            }}
          >
            Close
          </button>
          <button
            type="button"
            className={`h-10 flex-1 rounded-lg text-[14px] font-medium ${file ? "bg-[#1659E6] text-white" : "cursor-not-allowed bg-[#F5F5F5] text-[#C4C5C7]"}`}
            onClick={handleUpload}
            disabled={!file}
          >
            {buttonLabel}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
