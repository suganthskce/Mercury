const cookieDomain = process.env.COOKIE_DOMAIN || 'technogramsolutions.com';
const serviceDomain = 'localhost:8080';
const serviceProtocol = 'http';
const baseUrl = process.env.STATIC_BASE_URL || "//static.technogramsolutions.com";


const config = {
    isRelativeUrl: false,
    cookieDomain,
    serviceDomain, serviceProtocol,
    baseUrl
};

module.exports = config;
