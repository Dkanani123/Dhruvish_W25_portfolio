// Fetch project data from the server
fetch('/api/projects')
  .then(response => response.json())
  .then(data => {
      const projectContainer = document.getElementById('project-cards');
      data.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');
          projectCard.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank">View Project</a>
          `;
          projectContainer.appendChild(projectCard);
      });
  })
  .catch(err => console.error('Error fetching projects:', err));

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent!');
});
