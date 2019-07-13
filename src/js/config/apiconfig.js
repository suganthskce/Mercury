const ApiConfig = {
    login: {
        url: "/rms/sign-in",
        method: "POST",
        server: "rms_srv"
    },
    register: {
        url: '/rms/register',
        method: 'POST',
        server: 'rms_srv'
    },
    forget: {
        url: '/ums/v1/reset-password',
        method: 'POST',
        server: 'rms_srv'
    },
    eventList: {
        url: '/rms/event/list',
        method: 'POST',
        server: 'rms_srv'
    }
};

export default ApiConfig;
