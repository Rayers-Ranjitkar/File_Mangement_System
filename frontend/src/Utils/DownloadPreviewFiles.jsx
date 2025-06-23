import { GetDownloadFileAPI } from "../Services/API";
import { toast } from "react-toastify";

//Handle file download func
export const handleFileDownload = async (fileId, fileName) => {
  try {
    const resGetDownloadFileAPI = await GetDownloadFileAPI(fileId);
    const blob = new Blob([
      resGetDownloadFileAPI.data,
    ]); /* Why make a blob during download? as inside  resGetDownloadFileAPI.data there is a file but we are getting the binary file as string so New Blob() ley tyo data lai raw file-like container that holds data of any type (binary, text, etc.) ma convert garedincha*/

    console.log("resGetDownloadFileAPI🔰", resGetDownloadFileAPI);
    toast.success("File Downloaded Sucessfully");

    const url = URL.createObjectURL(blob); //Browsers can’t directly download JavaScript objects + You're not getting a real file on disk. + You're getting binary data (a stream) in memory (via Blob). So, So we must create a fake file URL and simulate a download. //const url = URL.createObjectURL(blob);    does  blob:http://localhost:3000/5eec39bb-bab2-4f63-82f0-c488bdf785cf and Tells the browser=> “Hey, here's a Blob in memory — assign it a temporary URL that your system can treat like a downloadable file.”

    const a = document.createElement("a"); //creating an anchor tag
    a.href = url; //<a href="" > assigning this programatically
    a.download = fileName; //Setting What name should it be saved as in your PC after downloading
    a.click(); //Simulating the download

    URL.revokeObjectURL(url); // Tells the browser -> "I no longer need that blob URL you created earlier — you can free up the memory now."
  } catch (error) {
    console.log("Failed to download file from API server!", error);
    toast.error("Download Failed. File not found!");
  }
};

//Handle file preview Func
export const handleFilePreview = async (fileId, mimeType) => {
  try {
    const resGetDownloadFileAPI = await GetDownloadFileAPI(fileId);
    const blob = new Blob([resGetDownloadFileAPI.data], {
      type: mimeType,
    }); /* without sending this MIME type browser doesn't know how to render that binary string response.data content as pdf or img so it reders it as it binary nai so problem */
    const url = URL.createObjectURL(blob); //Till here same and now we open that URL rather than creating anchor tag (a link to download) and downloading

    window.open(url, "_blank"); // opening in new tab //"_blank" is the target that tells the browser to open the given URL in a new tab or window Without it, the URL would open in the same tab, replacing your current page.
    
    // Revoking it after 5 min as revoking it quickly would close the preview to free the memory
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 5 * 60 * 1000);
  } catch (error) {
    console.error("Preview failed", error);
    toast.error("Preview Failed. File not found!");
  }
};
