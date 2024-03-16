import Form from "../svg/Form";

const Sidebar = (props) => {
    const { uploadSection, setUploadSection, querySection, setQuerySection } = props;

    const openUpload = () => {
        setUploadSection(true);
        setQuerySection(false);
    }

    const openQuery = () => {
        setUploadSection(false);
        setQuerySection(true);
    }

    return (
        <div style={{ width: "20dvw", height: "100dvh", backgroundColor: "#03111B" }} className={"tw-flex tw-flex-col tw-text-white"}>
            <div style={{ width: "100%", alignItems: "center" }} className={"tw-flex tw-flex-row tw-justify-center tw-my-5"}>
                <Form />
                <p>Turnzer</p>
            </div>

            <div style={{ width: "100%" }}>
                <div style={{ borderLeftStyle: uploadSection ? "solid" : "none", borderColor: "white", borderWidth: uploadSection ? "6px" : "0" }} onClick={openUpload} className={uploadSection ? "tw-my-5 tw-px-10 tw-bg-white tw-bg-opacity-10 tw-border-t-4 tw-border-white tw-p-4" : "tw-my-5 tw-px-10 tw-p-4"}>Upload</div>
                <div style={{ borderLeftStyle: querySection ? "solid" : "none", borderColor: "white", borderWidth: querySection ? "6px" : "0" }} id="queryTab" onClick={openQuery} className={querySection ? "tw-my-5 tw-px-10 tw-bg-white tw-bg-opacity-10 tw-border-t-4 tw-border-white tw-p-4" : "tw-my-5 tw-px-10 tw-p-4"}>Query</div>
            </div>

            <div style={{ height: "100dvh" }} className={"tw-text-center tw-align-text-bottom tw-flex tw-flex-col-reverse tw-my-4"}>&copy; 2024 Mavericks - Global Code X Devclan</div>
        </div>
    )
}

export default Sidebar;