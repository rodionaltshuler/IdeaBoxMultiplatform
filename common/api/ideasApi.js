import config from './config'
class ideasApi {

    static getAllIdeas() {
        console.log("Getting ideas from server");
        return fetch(config.baseUrl + '/ideas.json')
            .then(function (response) {
                return response.json();
            });
    }
}

export default ideasApi;
