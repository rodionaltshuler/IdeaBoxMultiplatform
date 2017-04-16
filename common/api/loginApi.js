import firebase from './firebase';

class loginApi {

    static loginAnonymously() {
        console.log('loginAnonymously');
        return firebase.auth().signInAnonymously()
            .then(user => {
                return user;
            })
            .catch(function (error) {
                console.log('error logging in: ' + error.message);
                throw new Error(
                    {
                        message: error.message,
                        code: error.code
                    }
                )
            });
    }
}

export default loginApi;
