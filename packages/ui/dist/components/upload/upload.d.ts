import { DropzoneOptions } from 'react-dropzone';
import * as React from "react";
interface UploadProps extends Omit<DropzoneOptions, "onDrop"> {
    value?: File[];
    onValueChange?: (files: File[]) => void;
    className?: string;
    maxSizeInMB?: number;
    showList?: boolean;
}
declare const Upload: React.ForwardRefExoticComponent<UploadProps & React.RefAttributes<HTMLDivElement>>;
export { Upload, type UploadProps };
//# sourceMappingURL=upload.d.ts.map