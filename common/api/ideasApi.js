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

    static upvote(idea, userUid) {
        const updateUpvotes = { [userUid]: true };
        return firebase.database().ref('/ideas/' + idea.id + '/upvotes')
            .update(updateUpvotes)
            .then(() => {
                idea.upvotes = Object.assign({}, idea.upvotes, updateUpvotes);
                console.log('Idea updated after upvote: ' + JSON.stringify(idea));
                return idea;
            })
            .catch(error => {
                console.log('Error upvoting an idea: ' + error.message);
                throw error;
            });
    }

    static downvote(idea, userUid) {
        const updateDownvotes = { [userUid]: true };
        return firebase.database().ref('/ideas/' + idea.id + '/downvotes')
            .update(updateDownvotes)
            .then(() => {
                idea.downvotes = Object.assign({}, idea.downvotes, updateDownvotes);
                console.log('Idea updated after downvote: ' + JSON.stringify(idea));
                return idea;
            })
            .catch(error => {
                console.log('Error downvoting an idea: ' + error.message);
                throw error;
            });
    }



}

export default ideasApi;
