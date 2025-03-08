"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function UploadDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const files = e.dataTransfer.files;
        if (files?.[0]) {
            handleFileSelect(files[0]);
        }
    };

    const handleFileSelect = (file: File) => {
        if (file.size > 2 * 1024 * 1024) {
            alert("File size should not exceed 2MB");
            return;
        }
        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }
        setSelectedFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile) return;

        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                onOpenChange(false);

                // Navigate to results page with the prediction data
                router.push(`/results?plant=${encodeURIComponent(data.predicted_class)}&results=${encodeURIComponent(JSON.stringify(data.search_results))}`);
            } else {
                throw new Error("Upload failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to upload image");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Upload Plant Image</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div
                        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors
              ${dragActive ? "border-green-500 bg-green-50" : "border-gray-300"}
              ${selectedFile ? "bg-gray-50" : ""}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            id="file-upload"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        />
                        <div className="text-center">
                            {selectedFile ? (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-sm text-gray-500">{selectedFile.name}</span>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => setSelectedFile(null)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    {selectedFile.type.startsWith("image/") && (
                                        <img
                                            src={URL.createObjectURL(selectedFile)}
                                            alt="Preview"
                                            className="max-h-32 mx-auto rounded"
                                        />
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="mt-4">
                                        <span className="text-sm font-semibold text-gray-600">
                                            Click to upload or drag and drop
                                        </span>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Supported: PNG, JPG (Max 2MB)
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!selectedFile || isLoading}>
                            {isLoading ? "Uploading..." : "Upload"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}