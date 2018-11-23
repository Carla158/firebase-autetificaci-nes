var config = {
    apiKey: "AIzaSyDRckNnUMAHqxotLfFWscz0oPv9_1nGP5k",
    authDomain: "auth-c6d94.firebaseapp.com",
    databaseURL: "https://auth-c6d94.firebaseio.com",
    projectId: "auth-c6d94",
    storageBucket: "auth-c6d94.appspot.com",
    messagingSenderId: "7045299411"
};

firebase.initializeApp(config)

const login = async (provider) => {
    try {

        const auth = await firebase
            .auth()
            .signInWithPopup(provider)

        const token = auth.token
        const user = auth.user
        const name = document.getElementById('name')
        const photo = document.getElementById('photo')

        name.innerHTML = user.email;
        photo.src = user.photoURL;

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
        alert("Ha ocurrido un error :(")
    }
}

document.getElementById('facebook-login')
    .addEventListener('click', () => login(new firebase.auth.FacebookAuthProvider()))
document.getElementById('google-login')
    .addEventListener('click', () => login(new firebase.auth.GoogleAuthProvider()))