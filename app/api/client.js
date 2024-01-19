import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://cross-platform.rp.devfactory.com",
});

export default apiClient;

// apiClient.get('/for_you').then(response => {
//     if(!response.ok) {
//         response.problem CLIENT_ERROR/SERVER_ERROR/TIMEOUT_ERROR/NETWORK_ERROR
//     }
// })
