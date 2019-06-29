const ApiConfig = {
    login: {
        url: "/ums/v1/sign-in",
        method: "POST",
        server: "rms_srv"
    },
    register: {
        url: '/ums/v1/register',
        method: 'POST',
        server: 'ums_srv'
    },
    forget: {
        url: '/ums/v1/reset-password',
        method: 'POST',
        server: 'ums_srv'
    },

};

export default ApiConfig;
