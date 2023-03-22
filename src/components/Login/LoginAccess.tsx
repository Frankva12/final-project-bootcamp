import firebase from 'firebase/app';
import 'firebase/firestore';

async function login(username: string, password: string) {
  try {
    // Get a reference to the "users" collection in Firebase Firestore
    const usersRef = firebase.firestore().collection('users');

    // Query Firestore to find a user with the given username and password
    const querySnapshot = await usersRef.where('username', '==', username).where('password', '==', password).get();

    // If there is a match, return the user document
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      console.log('User signed in:', userDoc.data().username);
      return userDoc;
    } else {
      console.log('Invalid username or password');
      return null;
    }
  } catch (error) {
    console.error('Error signing in:', error);
    return null;
  }
}