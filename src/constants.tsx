export const USERNAME = `demo-user`;
// See https://github.com/thoughtspot/node-token-auth-server-example
// for the implementation of the below endpoint.
export const TOKEN_SERVER = "https://node-token-auth-server-example-eta.vercel.app";
export const TOKEN_ENDPOINT = `${TOKEN_SERVER}/api/gettoken/${USERNAME}`;
// If you change this to `demo-user` the request starts failing with 403
export const TOKEN_ENDPOINT_API = `${TOKEN_SERVER}/api/v2/gettoken/ashish.shubham@thoughtspot.com`;
// export const TOKEN_ENDPOINT_URL = 'https://try-everywhere.thoughtspot.cloud/callosum/v1/session/login/token';
// export const TOKEN_ENDPOINT_URL = 'https://try-everywhere-internal.thoughtspotstaging.cloud/callosum/v1/session/login/token';
// export const TS_HOST = `https://try-everywhere-internal.thoughtspotstaging.cloud`;
export const TS_HOST = `https://try-everywhere.thoughtspot.cloud`;
// export const TS_HOST = `https://nebula-sage-embed.thoughtspotdev.cloud`;
// export const TS_HOST = `http://172.19.156.68:8088/`;
// export const TS_HOST = `http://localhost:3000/`;
