
export const GetFileSize = (sizeInBytes) => {
    const KB = 1024;
    const MB = 1024 ** 2; 
    const GB = 1024 ** 3; 

    if(sizeInBytes < KB){
        return `${sizeInBytes} bytes`;
    }else if(sizeInBytes >= KB && sizeInBytes <MB){
        return `${(sizeInBytes/KB).toFixed(1)} KB`;
    }else if(sizeInBytes >= MB && sizeInBytes < GB){
        return `${(sizeInBytes/MB).toFixed(1)} MB`;
    }else{
        return `${(sizeInBytes/GB).toFixed(1)} GB`;
    }
};

