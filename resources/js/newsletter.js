function submitNewsletter(event) {
    event.preventDefault();
  
    const email = document.getElementById('newsletterEmail').value;
  
    fetch('https://us-central1-your-project-name.cloudfunctions.net/sendNewsletterEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        console.log('Email sent:', response);
        alert('Thank you for subscribing to our newsletter!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred. Please try again later.');
      });
  
    // Clear the input field after submission
    document.getElementById('newsletterEmail').value = '';
  }
  