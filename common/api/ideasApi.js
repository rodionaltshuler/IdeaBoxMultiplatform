import config from './config'
import firebase from './firebase';

class ideasApi {


    static getAllIdeas() {
        return firebase.database().ref('/ideas').once('value')
            .then(function (snapshot) {
                    //here we have JSON we need
                    console.log('Snapshot: ' + JSON.stringify(snapshot));
                    return snapshot.toJSON();
                }
            );
    }

    static submitIdea(idea) {
        //TODO make real POST
        return fetch(config.baseUrl + '/ideas.json')
            .then(function (response) {
                return idea;
            });
    }
}

export default ideasApi;
