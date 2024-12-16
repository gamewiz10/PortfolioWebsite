fetch('Big Texts/introduction.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about-section').innerHTML = data;
    })
    .catch(error => console.error('Error loading about section:', error));