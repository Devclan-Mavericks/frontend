import { useState } from 'react';
import Upload from './uploadSection/Upload';
import Sidebar from './sidebar/Sidebar';
import Query from './querySection/Query';

function App() {
  const [uploadSection, setUploadSection] = useState(true);
  const [querySection, setQuerySection] = useState(false);

  return (
   <div className={"tw-flex tw-flex-row"}>
    <Sidebar uploadSection={uploadSection} setUploadSection={setUploadSection} querySection={querySection} setQuerySection={setQuerySection}/>
    {uploadSection && <Upload/>}
    {querySection && <Query/>}
   </div>
  );
}

export default App;
