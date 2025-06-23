import { useState } from "react";
import { patchDriveSyncAPI } from "../../Services/API";
import { toast } from "react-toastify";

const DriveSync = () => {
  const [driveEnabledStatus, setDriveEnabledStatus] = useState(false);

  const handleDriveSync = async() =>{
      const newDriveEnabledStatus = !driveEnabledStatus;
      setDriveEnabledStatus(newDriveEnabledStatus); //without creating this new stateVariable, since it holded the old value of driveEnabledStatus and this setDriveEnabledStatus just triggered re-rendering tara re-render ta sabai code run bhayesi matrai huncha so, old value nai bhayera toast ma problem aayo so new variable to hold value created
      try {
        //const resPatchDriveSyncAPI = await patchDriveSyncAPI(driveEnabledStatus);//yeha pani old value nai gayerako rahecha
        const resPatchDriveSyncAPI = await patchDriveSyncAPI(newDriveEnabledStatus);
        console.log("resPatchDriveSyncAPI⭕", resPatchDriveSyncAPI);
        // toast.success(`Drive Sync ${driveEnabledStatus == true ? "Enabled" : "Disabled"}`);
        toast.success(`Drive Sync ${newDriveEnabledStatus == true ? "Enabled" : "Disabled"}...`);
      } catch (error) {
        console.log("Failed to Sync with Drive!", error);
        toast.error(`Failed to Sync with Drive!`);
      }
  };

  return (
    <>
      <button
        type="button" //It tells the browser that this button is a normal button that doesn't submit a form
        onClick={handleDriveSync}
        className={`cursor-pointer relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
          driveEnabledStatus ? "bg-[#c27aff]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            driveEnabledStatus ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </>
  );
};

export default DriveSync;
