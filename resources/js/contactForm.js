// Initialize Firebase
var firebaseConfig = {
    // your firebase config here
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the form
  var form = document.querySelector('#next form');
  
  // Listen for form submit events
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the form from submitting normally
    
    // Get form values
    var name = form.querySelector('#name').value;
    var phone = form.querySelector('#phone').value;
    var email = form.querySelector('#email').value;
    var message = form.querySelector('#message').value;
    
    // Get a reference to the database
    var database = firebase.database();
    
    // Create a new database entry with form data
    var newEntryRef = database.ref('contact-form-entries').push();
    newEntryRef.set({
      name: name,
      phone: phone,
      email: email,
      message: message
    }, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Form data saved successfully!');
        
        // Reset form fields
        form.querySelector('#name').value = '';
        form.querySelector('#phone').value = '';
        form.querySelector('#email').value = '';
        form.querySelector('#message').value = '';
        
        // Focus on first form field
        form.querySelector('#name').focus();
      }
    });
  });
  