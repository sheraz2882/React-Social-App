import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'your-app.firebaseapp.com',
  databaseURL: 'https://react-social-app-94265-default-rtdb.firebaseio.com/',
  projectId: 'your-app',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'XXXX',
  appId: 'XXXX',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
