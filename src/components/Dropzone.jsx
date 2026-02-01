import { useCallback, useEffect } from "react" 

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowLeft, 
    faPaperclip,
    faClose, 
    faPlus 
} from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone';

export function DropzoneComponent({ setFiles, files }) {


    const onDrop = useCallback(acceptedFiles => {

        if(acceptedFiles?.length){

            const mappedFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));

            const existingFileNames = files.map(file => file.name);
            const newFiles = mappedFiles.filter(file => !existingFileNames.includes(file.name));

            setFiles(prevFiles => {
                const existingFileNames = prevFiles.map(file => file.name);
                const filteredNewFiles = newFiles.filter(file => !existingFileNames.includes(file.name));
                return [...prevFiles, ...filteredNewFiles];
            });
        }
        // This is where you process the files. 
        // You can set them to state, log them, or prepare for upload.
        // console.log(acceptedFiles); 
    }, [setFiles]);



    // ============= Functions ================
        function cleanUpPreviews(setFiles){
            
            return () => {
                setFiles.forEach(file => URL.revokeObjectURL(file.preview));
            };
        }
    // ============= Functions END ============



    // ============= Removing single file ==============
        const removeFile = (fileName) => {
            setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        };
    // ============= Removing single file END ==========
    


    // ============= Hooks =============
        useEffect(() => {

            cleanUpPreviews(files)

        }, [setFiles]);
    // ============= Hooks END =========


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] }
    });

    return (
        <div>
            <div className="flex items-center justify-center w-full" {...getRootProps()}>
                <input {...getInputProps()} />
                <label className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                    {
                        isDragActive ?
                        <p>Release to drop the files here</p> :
                        <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                            <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                    }
                </label>
            </div>
            <div className="mt-4 mb-4 flex flex-wrap gap-4 justify-center">
                {files.map(file => (
                    <div key={file.name} className="relative w-32 h-32 border rounded overflow-hidden flex items-center justify-center">
                        <img 
                            src={file.preview}
                            alt={file.name}
                            className="object-cover w-full h-full rounded"
                        />
                        <button
                            type="button"
                            className="absolute top-1 right-1 bg-red-600 text-white text-sm rounded-full p-1"
                            onClick={() => removeFile(file.name)}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}