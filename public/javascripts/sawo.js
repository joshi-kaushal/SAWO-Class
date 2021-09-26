// Fetching payload from sessionStorage
const payload = localStorage.getItem("payload");
// ! const payload = sessionStorage.getItem("payload");
if (payload) {
    // If the payload is available, that means the user has logged in already.
    // So redirecting back to "/login"
    window.location.href = "/users";
}
var config = {
    // should be same as the id of the container created on 3rd step
    containerID: "sawo-container",
    // can be one of 'email' or 'phone_number_sms'
    identifierType: "email",
    // Add the API key copied from 2nd step
    apiKey: "3d8c08a5-cb17-464e-8ab3-b7ef9e56436f",
    // Add a callback here to handle the payload sent by sdk
    onSuccess: (payload) => {
        // Storing the payload in sessionStorage
        // ! sessionStorage.setItem("payload", JSON.stringify(payload));
        localStorage.setItem("payload", JSON.stringify(payload));
        // Redirecting to "/success"
        window.location.href = "/users";
    },
};
var sawo = new Sawo(config);
sawo.showForm();

// SAWO Docs - https://docs.sawolabs.com/sawo/web-apps/node-js