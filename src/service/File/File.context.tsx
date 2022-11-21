import React, {createContext, ReactElement, useState} from 'react';
import   * as Ac from './File.action';
interface IFileContext {
  uploadFileFn:(file) => void;
  isFiles:boolean;
}
export const FileContext = createContext<IFileContext>(
  {} as IFileContext,
);
export default function FileContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [isFiles, setFiles] = useState(false);


  // We can access navigation object via context
  function uploadFileFn(FileId:number) {
    Ac.uploadFileAc(FileId).then(res => {
      setFiles(true)
      
    });
  }
  
  return (
    <FileContext.Provider
      value={{
        uploadFileFn,
        isFiles
      }}>
      {children}
    </FileContext.Provider>
  );
}
