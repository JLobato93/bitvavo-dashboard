import { initializeApp, ServiceAccount } from 'firebase-admin/app';
import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import firebaseCredentials from './firebase-credentials.json';

const serviceAccount = firebaseCredentials as admin.ServiceAccount;
initializeApp({
    credential: admin.credential.cert(<ServiceAccount>serviceAccount),
});

export const db = getFirestore();
