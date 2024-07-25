// Function to update the live preview based on user input
function updatePreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('projects').value;
    const certifications = document.getElementById('certifications').value;
    const languages = document.getElementById('languages').value;
    const references = document.getElementById('references').value;
    const template = document.getElementById('template').value;

    const previewDiv = document.getElementById('preview');

    // Generating HTML content for preview
    const htmlContent = `
        <h1>${name}</h1>
        <p>Email: ${email}</p>
        <h2>Summary</h2>
        <p>${summary}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Projects</h2>
        <p>${projects}</p>
        <h2>Certifications</h2>
        <p>${certifications}</p>
        <h2>Languages</h2>
        <p>${languages}</p>
        <h2>References</h2>
        <p>${references}</p>
    `;

    previewDiv.innerHTML = htmlContent;
}


function downloadResume() {
// Example: Could use libraries like jsPDF for PDF generation
    alert('Downloading resume...');
}

// Event listeners for input fields to update preview dynamically
document.getElementById('name').addEventListener('input', updatePreview);
document.getElementById('email').addEventListener('input', updatePreview);
document.getElementById('summary').addEventListener('input', updatePreview);
document.getElementById('skills').addEventListener('input', updatePreview);
document.getElementById('education').addEventListener('input', updatePreview);
document.getElementById('experience').addEventListener('input', updatePreview);
document.getElementById('projects').addEventListener('input', updatePreview);
document.getElementById('certifications').addEventListener('input', updatePreview);
document.getElementById('languages').addEventListener('input', updatePreview);
document.getElementById('references').addEventListener('input', updatePreview);
document.getElementById('template').addEventListener('change', updatePreview);

// Initial preview update on page load
updatePreview();
 