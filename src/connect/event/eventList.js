import ExternalApiRequest from "./../../lib/externalApiRequest";
const connector = () => {
    const options = {
        api: "eventList",
        content: {}
    };
    return ExternalApiRequest(options);
};

export { connector };
