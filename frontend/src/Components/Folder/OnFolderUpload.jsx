const OnFolderUpload = () => {
  return (
    <>
      <div className="h-35 w-50 flex flex-col gap-1 items-center rounded-xl px-2 pt-2 border-2 border-gray-400 bg-white z-999 relative ">
        {/* Input box */}
        <input
          type="text"
          placeholder="Folder Name"
          className="w-[90%] mb-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {/* Purple button */}
        <button className="bg-[#a04beb] text-white py-2 rounded-md hover:bg-purple-700 transition w-[80%]"> {/* The transition class by itself applies a default smooth transition to common properties , transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1); */}
          Create Folder
        </button>
      </div>
    </>
  );
};

export default OnFolderUpload;
