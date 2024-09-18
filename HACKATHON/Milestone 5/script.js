// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
//Handle form submission
form.addEventListener("submit", function (event) {
    //addeventlistener waits for input
    event.preventDefault(); // prevent page reload
    // collect input value
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value;
    // save form data in localstorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally
    // Generate the resume content dynamically
    var resumeHtml = "\n    <h2><strong>Editable Resume</strong></h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Phone Number:</strong><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n        <h3>Work Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // display the generated resume
    resumeDisplayElement.innerHTML = resumeHtml;
    resumeDisplayElement.style.display = 'block'; // Make it visible
    // generate a shareable URL with the username only
    //const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`
    var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
    // display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// HANDLE PDF DOWNLOAD
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// prefill the form based on the username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
