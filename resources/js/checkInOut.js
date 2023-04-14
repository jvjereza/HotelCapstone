// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  // your firebase config here
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the form
const form = document.querySelector('#next form');

// Listen for form submit events
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the form from submitting normally
  
  // Get form values
  const checkinDate = form.querySelector('#checkin_date').value;
  const checkoutDate = form.querySelector('#checkout_date').value;
  const adults = form.querySelector('#adults').value;
  const children = form.querySelector('#children').value;
  
  // Get a reference to the database
  const database = firebase.database();
  
  // Create a new database entry with form data
  const newEntryRef = database.ref('availability-entries').push();
  newEntryRef.set({
    checkinDate: checkinDate,
    checkoutDate: checkoutDate,
    adults: adults,
    children: children
  }, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Form data saved successfully!');
      
      // Reset form fields
      form.querySelector('#checkin_date').value = '';
      form.querySelector('#checkout_date').value = '';
      form.querySelector('#adults').value = '';
      form.querySelector('#children').value = '';
    }
  });
});
