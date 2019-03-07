import db from '../firebaseconfig';
const firebase = require('firebase/app');

/**
* A simple "hello world" function
*/
module.exports = async () => {
  b.collection('users').onSnapshot(querySnapshot => {
    var newArray = [];
    querySnapshot.forEach(userDoc => {
      newArray.push(userDoc.data());
      this.setState({people:newArray});
    });
  }
  return newArray;
};
