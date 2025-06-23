import { useEffect, useState } from "react";
import { GetFileFromAPI } from "../../Services/API";
import { toast } from "react-toastify";
import { GoDownload } from "react-icons/go";


/* importing the utils functions */
import { GetFileTypeIcons } from "../../Utils/GetFileIcons"; /* since, GetFileTypeIcons is a function we can directly call it below */
import { GetFileSize } from "../../Utils/GetFileSize";
import { handleFileDownload } from "../../Utils/DownloadPreviewFiles";
import { handleFilePreview } from "../../Utils/DownloadPreviewFiles";

const GetFiles = ({ filesRefetch }) => {
  const [filesArr, setFilesArr] = useState([]);
  useEffect(() => {
    const getFilesFunc = async () => {
      try {
        const resGetFileFromAPI = await GetFileFromAPI();
        console.log("resGetFileFromAPI", resGetFileFromAPI);
        // toast.success("File Fetched Sucessfully");
        setFilesArr(resGetFileFromAPI.data.data);
      } catch (error) {
        console.log("Failed to fetch file from API server!", error);
        toast.error("Files fetch failed!");
      }
    };
    getFilesFunc();
  }, [
    filesRefetch,
  ]); /* Note one thing, i need to fetch everytime the file is uploaded so, i need to put some dependency in here to fetch: if i put in filesArr it only changes after the fetch in the same above code by setFilesArr, but we need to fetch right 1st for that so, let's do smthing with callbacks */

  return (
    <>
      <div className="flex flex-col gap-2">
        {filesArr.map((eachElement) => (
          <div key={eachElement._id} className="border-b border-b-gray-300">
            {" "}
            {/* as other div had margin, but i needed this border-b without space so i created the div without margin */}
            <div
              key={eachElement._id}
              className="flex mr-8 ml-4 justify-between text-md py-1 items-center"
            >
              {/* left-content div */}
              <div className="flex gap-2 items-center w-[70%]">
                <img
                  className="cursor-pointer"
                  src={GetFileTypeIcons(eachElement.fileName.split(".")[1])}
                  onClick={()=>{handleFilePreview(eachElement._id,eachElement.mimeType)}} /* without sending this MIME type browser doesn't know how to render that binary string response.data content as pdf or img so it reders it as it binary nai so problem */
                />
                {/* fileName, Size, downloadIcon div */}
                <div className="w-[calc(100%-40px)]">
                  {" "}
                  {/* have to give this a fixed width so that the content didn't overflow */}
                  <p className="break-words w-full text-md cursor-pointer" onClick={()=>{handleFilePreview(eachElement._id,eachElement.mimeType)}}>
                    {eachElement.fileName}
                  </p>
                  {/* File size and icon span */}
                  <span className="flex gap-2 items-center">
                    <p className="text-sm mt-0.5">
                      {GetFileSize(eachElement.size)}
                    </p>
                    <GoDownload
                      className="cursor-pointer text-gray-700 hover:text-gray-900 transition shadow-sm hover:shadow-md rounded"
                      onClick={() => {
                        handleFileDownload(eachElement._id,eachElement.fileName);
                      }}
                    />
                  </span>
                </div>
              </div>
              {/* right-content div */}
              <div>
                <p className="text-sm">{eachElement.uploadDate.slice(0, 10)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFiles;
