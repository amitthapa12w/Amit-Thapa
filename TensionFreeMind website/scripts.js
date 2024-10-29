// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Appointment form submission
  document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
  
    if (name && email && date) {
      alert(`Appointment successfully booked for ${name} on ${date}`);
      // Reset form fields after submission
      document.getElementById('appointment-form').reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
  