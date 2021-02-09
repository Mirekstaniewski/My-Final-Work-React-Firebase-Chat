import  firebase from 'firebase';


const config = {
projectId:'react-firechat-7d614',
apiKey:'AIzaSyDDvtP8sfLlKQAcOik7MVVwObNGqFGRmBs',
databaseURL:'https://react-firechat-7d614-default-rtdb.europe-west1.firebasedatabase.app'
};
firebase.initializeApp(config);
export default firebase;