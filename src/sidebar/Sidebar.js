const Sidebar = (props) => {
    const {uploadSection, setUploadSection, querySection, setQuerySection} = props;

    const openUpload = () => {
        setUploadSection(true);
        setQuerySection(false);
    }

    const openQuery = () => {
        setUploadSection(false);
        setQuerySection(true);
    }

    return(
        <div style={{width:"20dvw", height:"100dvh", backgroundColor: "#03111B"}} className={"tw-flex tw-flex-col tw-text-white"}>
            <div style={{width:"100%", alignItems:"center"}} className={"tw-flex tw-flex-row tw-justify-center tw-my-5"}>
                <span><svg width="90px" height="90px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V14.5M9 17H11.5M9 13H15M9 9H10M15.5 18.5H20.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
                <p>Form Analyzer</p>
            </div>

            <div style={{width:"100%"}}>
                <div id="uploadTab" style={{width:"100%"}} onClick={openUpload} className={uploadSection ? "tw-my-5 tw-px-10 tw-bg-white tw-bg-opacity-10 tw-border-t-4 tw-border-white tw-p-4" : "tw-my-5 tw-px-10 tw-p-4"}>Upload</div>
                <div id="queryTab" onClick={openQuery} className={querySection ? "tw-my-5 tw-px-10 tw-bg-white tw-bg-opacity-10 tw-border-t-4 tw-border-white tw-p-4" : "tw-my-5 tw-px-10 tw-p-4"}>Query</div>
            </div>

            <div style={{height:"100dvh"}} className={"tw-text-center tw-align-text-bottom tw-flex tw-flex-col-reverse tw-my-4"}>&copy; 2024 Mavericks - Global Code X Devclan</div>
        </div>
    )
}

export default Sidebar;