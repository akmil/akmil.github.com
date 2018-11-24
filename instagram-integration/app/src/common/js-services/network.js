export default class Network {

    checkStatus(response) {
        if (response.status && response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    parseJSON(response) {
        return response.json();
    }

    // sendRequest1(url, formData) {
    //     return fetch(url, formData)
    //         .then(this.checkStatus)
    //         .then(this.parseJSON)
    //         .then(function (data) {
    //             console.log('request succeeded with JSON response', data);
    //         }).catch(function (error) {
    //             console.log('request failed', error);
    //         });
    // }

    sendRequest(url, formData) {
        console.log('sending', url, formData);

        return fetch(url, formData)
            .then(this.checkStatus)
            .then(this.parseJSON);

    }
}

