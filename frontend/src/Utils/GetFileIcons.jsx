 /* importing icons */
 import Pdf from "../assets/FileTypeIcons/pdfIcon.png"
 import ImgIcon from "../assets/FileTypeIcons/imgIcon.png";
 import TxtIcon from "../assets/FileTypeIcons/txtIcon.png";

 export const GetFileTypeIcons = (fileExt) => {
    if (fileExt == "pdf") {
      return Pdf;
    } else if (fileExt == "png" || fileExt == "jpeg") {
      return ImgIcon;
    } else {
      return TxtIcon;
    }
  };
