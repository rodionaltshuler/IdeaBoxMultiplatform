import config from './config'
import * as firebase from "firebase";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

class ideasApi {


    static getAllIdeas() {
        return firebase.database().ref('/ideas').once('value')
            .then(function (snapshot) {
                    //here we have JSON we need
                    console.log('Snapshot: ' + JSON.stringify(snapshot));
                    return snapshot;
                }
            );

        /*console.log("Getting ideas from server");
         return fetch(config.baseUrl + '/ideas.json')
         .then(function (response) {
         return response.json();
         });*/
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
