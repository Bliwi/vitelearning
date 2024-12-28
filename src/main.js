import './style.css'; // Example

// Fetch the HTML file
fetch('/extra.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch extra.html');
    }
    return response.text();
  })
  .then(htmlContent => {
    // Create a container to hold the HTML content
    const container = document.createElement('div');
    container.innerHTML = htmlContent;

    // Append the content to the body
    document.body.appendChild(container);
  })
  .catch(error => {
    console.error('Error loading the HTML file:', error);
  });