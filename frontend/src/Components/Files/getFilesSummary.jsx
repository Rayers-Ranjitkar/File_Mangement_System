import { IoSearchOutline } from "react-icons/io5";
import { GetFilesSummaryAPI } from "../../Services/API";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetFileSize } from "../../Utils/GetFileSize";

const GetFilesSummary = ({filesRefetch, viewMode, foldersNum}) => {
  const [filesSummary,setFilesSummary] = useState({});
  useEffect(() => {
    const GetFilesDataSummary = async () => {
      try {
        const resGetFileSummaryAPI = await GetFilesSummaryAPI();
        console.log("resGetFileSummaryAPI", resGetFileSummaryAPI);
        toast.success("Files Summary Fetched !");
        setFilesSummary(resGetFileSummaryAPI.data.data);
      } catch (error) {
        console.log("Failed to fetch files summary!", error);
        toast.error("Failed to fetch files summary!");
      }
    };
    GetFilesDataSummary();
  }, [filesRefetch]);

  return (
    <>
      <div className="font-jakarta mt-10 ml-8 flex flex-col gap-2.5">
        <h1 className="text-3xl font-bold">{viewMode == "files"? "My Files":"My Folders"}</h1>
        <span className="flex gap-4">
          <p>{/* 118 Items */}{viewMode == "files"?`${filesSummary.totalFiles} Items`:`${foldersNum} Items`}</p>
          <p>{/* 30MB Used */}{`${GetFileSize(filesSummary.totalStorage)} Used`}</p>
          <p>{/* 18% Available */}{`${100-(GetFileSize(filesSummary.totalStorage).slice(0,-2))}% Available`}</p> {/* slice(0,-2) => 2.5MB (M=-2,B=-1) so, (starting,last) last element is exclusive and is excluded */}
        </span>
        {/* input-box span */}
        <span className="relative">
          <input
            placeholder="Search files and folders..."
            className="border-1 rounded-full w-[65%] h-8 pl-9 border-gray-600"
          />
          <IoSearchOutline className="absolute bottom-1.5 left-2 h-5 w-5" />
        </span>
      </div>
    </>
  );
};

export default GetFilesSummary;
