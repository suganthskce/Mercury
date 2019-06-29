import ExternalApiRequest from "./../../lib/externalApiRequest";
const connector = data => {
    const options = {
        api: "login",
        content: data
    };
    return ExternalApiRequest(options);
};

export { connector };
