import firebase from './firebase';
import updateTypes from './../actions/updateTypes';

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
        const ref = firebase.database().ref('/ideas/' + idea.id + '/upvotes');

        //If idea already upvoted, cancel it
        if (idea.upvotes && idea.upvotes[userUid]) {
            return ref.child(userUid).remove()
                .then(() => {
                    delete(idea.upvotes[userUid]);
                    return idea;
                })
                .catch(error => {
                    console.log('Error removing upvote: ' + error.message);
                    throw error;
                });
        }

        const updateUpvotes = {[userUid]: true};
        return ref.update(updateUpvotes)
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

        const ref = firebase.database().ref('/ideas/' + idea.id + '/downvotes');

        //If idea already downvoted, cancel it
        if (idea.downvotes && idea.downvotes[userUid]) {
            return ref.child(userUid).remove()
                .then(() => {
                    delete(idea.downvotes[userUid]);
                    return idea;
                })
                .catch(error => {
                    console.log('Error removing downvote: ' + error.message);
                    throw error;
                });
        }

        const updateDownvotes = {[userUid]: true};

        return ref.update(updateDownvotes)
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

    static subscribeForIdeasUpdate(updateListener) {
        const ref = firebase.database().ref('/ideas');

        console.log('Subsrcibing for realtime ideas update');

        Object.keys(updateTypes).forEach(key => {
            const updateType = updateTypes[key];
            console.log('UpdateType.name: ' + updateType.name);
            ref.on(updateType.name, (childSnapshot) => {
                updateListener(updateType, Object.assign(childSnapshot.toJSON(), {id: childSnapshot.key}));
            });
        });


    }

    static unsubscribeFromIdeasUpdates() {
        const ref = firebase.database().ref('/ideas');
        ref.off();
    }

}

export default ideasApi;
