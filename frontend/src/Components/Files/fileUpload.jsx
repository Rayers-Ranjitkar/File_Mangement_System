import { TbFileUpload } from "react-icons/tb";
import { useRef } from "react";
import { postFileUploadToAPI } from "../../Services/API";
import { toast } from "react-toastify";

const FileUpload = ({setFilesRefetch}) => {
  const fileInputRef = useRef();
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  //When the file is uploaded in the input box, upload it to the API server
  const handleFileChange = (event) => {
    console.log("Uploaded file: ", event);

    //Creating FormData to post binaryContent + normal content (Multipart data) to the server + contentType: MultiPart data banayedincha
    const fileData = event.target.files[0];
    const formData = new FormData(); //returns empty formData Obj
    formData.append("file", fileData); //The binary file data is hidden and not shown in the console and when we do this -> the browser reads the file’s binary data internally and encodes it properly in the multipart/form-data request. You don’t have to manually extract the binary data yourself.

    try {
      const uploadFilesFunc = async () =>{
      const resPostFileUploadToAPI = await postFileUploadToAPI(formData);
      console.log("resPostFileUploadToAPI",resPostFileUploadToAPI);
      toast.success("File Successfully Uploaded");
      setFilesRefetch(prev => !prev); //changing the state of FilesRefetch as it will trigger re-fetch in getFiles as there we've used it as a dependency
      }
      uploadFilesFunc();
    } catch (error) {
        console.log("Failed to upload file to the server!",error)
        toast.error("Files upload failed!");
    }
  };

  return (
    <>
      <div
        onClick={handleFileUpload}
        className="h-10 w-10 border-1 border-gray-600 rounded-full p-2 cursor-pointer"
      >
        <TbFileUpload className="h-full w-full object-cover" />
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default FileUpload;
