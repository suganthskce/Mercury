import ExternalApiRequest from "./../../lib/externalApiRequest";
const registerConnect = data => {
    const options = {
        api: "register",
        content: data
    };
    return ExternalApiRequest(options);
};

export default registerConnect;
