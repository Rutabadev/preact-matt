import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC5kr-nIUsvceFL3VZ_vTeAgxTYhOTgZsM',
	authDomain: 'matthieu-f1348.firebaseapp.com',
	databaseURL: 'https://matthieu-f1348.firebaseio.com',
	projectId: 'matthieu-f1348',
	storageBucket: 'matthieu-f1348.appspot.com',
	messagingSenderId: '450842159454'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;
