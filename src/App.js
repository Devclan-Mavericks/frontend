import { useEffect, useState } from 'react';
import Upload from './uploadSection/Upload';
import Sidebar from './sidebar/Sidebar';
import Query from './querySection/Query';
import  {Toaster} from 'react-hot-toast';



function App() {
  const [uploadSection, setUploadSection] = useState(true);
  const [querySection, setQuerySection] = useState(false);
  const [filename, setFilename] = useState("")

  return (
   <div className={"tw-flex tw-flex-row"}>
    <div>
      <Sidebar uploadSection={uploadSection} setUploadSection={setUploadSection} querySection={querySection} setQuerySection={setQuerySection}/>
    </div>
    {uploadSection && <Upload setFilename={setFilename} setQuerySection={setQuerySection} setUploadSection={setUploadSection}/>}
    {querySection && <Query filename={filename}/>}
    <Toaster position="bottom-center" color="#1dd463" />
   </div>
  );
}

export default App;
