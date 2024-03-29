document.getElementById('invert-colors').addEventListener('click', () => {
    document.body.classList.toggle('inverted');
});

document.getElementById('contact-me').addEventListener('click', (e) => {
    e.preventDefault();
    // Add your contact form handling logic here
    console.log('Contact form submitted');
});