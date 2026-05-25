import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZWYIrBRentA97jk0meYfCQeO817rrSK8',
  authDomain: 'react-social-app-94265.firebaseapp.com',
  databaseURL: 'https://react-social-app-94265-default-rtdb.firebaseio.com/',
  projectId: 'react-social-app-94265',
  storageBucket: 'react-social-app-94265.firebasestorage.app',
  messagingSenderId: '729631089833',
  appId: '1:729631089833:web:eac71656bd658c4463b5b8',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
