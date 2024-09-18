// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

//Handle form submission
form.addEventListener("submit", (event: Event) => {
  //addeventlistener waits for input
  event.preventDefault(); // prevent page reload

  // collect input value
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (
    document.getElementById("work-experience") as HTMLInputElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate the resume content dynamically
  const resumeHtml = `
    <h2><strong>Editable Resume</strong></h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
    <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
    <p><strong>Phone Number:</strong><span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    
        <h3>Work Experience</h3>
    <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

  // display the generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtml;
  } else {
    console.error("The resume display element is missing.");
  }
  resumeDisplayElement.style.display = 'block'; // Make it visible

});
