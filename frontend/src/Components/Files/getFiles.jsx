import { useEffect, useState } from "react";
import { GetFileFromAPI } from "../../Services/API";
import { toast } from "react-toastify";

/* importing the utils functions */
import { GetFileTypeIcons } from "../../Utils/GetFileIcons"; /* since, GetFileTypeIcons is a function we can directly call it below */
import { GetFileSize } from "../../Utils/GetFileSize";

const GetFiles = ({filesRefetch}) => {
  const [filesArr, setFilesArr] = useState([]);
  useEffect(() => {
    const getFilesFunc = async () => {
      try {
        const resGetFileFromAPI = await GetFileFromAPI();
        console.log("resGetFileFromAPI", resGetFileFromAPI);
        toast.success("File Fetched Uploaded");
        setFilesArr(resGetFileFromAPI.data.data);
      } catch (error) {
        console.log("Failed to fetch file from API server!", error);
        toast.error("Files fetch failed!");
      } 
    };
    getFilesFunc(filesRefetch);
  }, [filesRefetch]); /* Note one thing, i need to fetch everytime the file is uploaded so, i need to put some dependency in here to fetch: if i put in filesArr it only changes after the fetch in the same above code by setFilesArr, but we need to fetch right 1st for that so, let's do smthing with callbacks */

  return (
    <div>
      {/* Header div */}
      <div className="border-b border-b-gray-400 mb-2">
        <div className="flex mx-8 justify-between text-base font-bold h-8">
          <p className="">File Name</p>
          <p>Last Modified</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {filesArr.map((eachElement) => (
          <div key={eachElement._id} className="border-b border-b-gray-300"> {/* as other div had margin, but i needed this border-b without space so i created the div without margin */}
            <div
              key={eachElement._id}
              className="flex mr-8 ml-4 justify-between text-md py-1 items-center"
            >
              {/* left-content div */}
              <div className="flex gap-2 items-center w-[70%]">
                <img
                  src={GetFileTypeIcons(eachElement.fileName.split(".")[1])}
                />
                {/* fileName and size div */}
                <div className="w-[calc(100%-40px)]"> {/* have to give this a fixed width so that the content didn't overflow */}
                  <p className="break-words w-full text-md">{eachElement.fileName}</p>
                  <p className="text-sm mt-0.5">{GetFileSize(eachElement.size)}</p>
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
    </div>
  );
};

export default GetFiles;
