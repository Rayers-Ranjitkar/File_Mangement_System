import { useState } from "react";

const DriveSync = () => {
  const [driveEnabled, setDriveEnabled] = useState(false);
  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={driveEnabled}
        onClick={() => setDriveEnabled(!driveEnabled)}
        className={`cursor-pointer relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
          driveEnabled ? "bg-[#c27aff]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            driveEnabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </>
  );
};

export default DriveSync;
