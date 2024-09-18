// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//Handle form submission
form.addEventListener("submit", function (event) {
    //addeventlistener waits for input
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("work experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n        <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing.");
    }
    resumeDisplayElement.style.display = 'block'; // Make it visible
});
