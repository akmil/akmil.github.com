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

    sendRequest(URL, OPTS, cbError) {
        return fetch(URL, OPTS)
            .then(response => Promise.all([response, response.json()]))
            .then(([response, json]) => {
                if (!response.ok) {
                    cbError(json); // update view
                    this.checkStatus(response);
                    // throw new Error(json.status.message);
                }
                return json;
            });
    }

    /*
    parseJSON(response) {
        return response.json();
    }

    sendRequest1(url, formData, cbError) {
        console.log('sending', url, formData);
        this.cbError = cbError;
        return fetch(url, formData)
            .then(function(response) {
                if (response.status === 400) {
                    cbError(response.json());
                    return response.json()
                }
            })
            .then(this.checkStatus.bind(this))
            .then(this.parseJSON);
    }
    */
}

