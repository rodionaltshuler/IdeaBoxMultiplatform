import firebase from './firebase';

class ideasApi {

    static getAllIdeas() {
        return firebase.database().ref('/ideas').once('value')
            .then(function (snapshot) {
                    return snapshot.toJSON();
                }
            );
    }

    static submitIdea(idea, userUid) {

        console.log('Submitting ' + idea + ' with author ' + userUid);
        const newIdea = {
            title: idea,
            author: userUid,
            dateAdded: Math.floor(Date.now() / 1000)
        };

        return firebase.database().ref('/ideas').push(newIdea)
            .then((newRef) => {
                newIdea.id = newRef.key;
                return newIdea;
            })
            .catch(error => {
                console.log('Error setting new idea: ' + error.message);
                throw error;
            });

    }
}

export default ideasApi;
