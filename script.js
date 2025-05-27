let isDropdownOpen = false; // Initialize dropdown state

function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = isDropdownOpen ? 'none' : 'block';
    isDropdownOpen = !isDropdownOpen; // Toggle state
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'none';
    isDropdownOpen = false; // Reset state
}

// for Typewriter effect

const texts = [
    "Dedicated,",
    "Versatile,",
    "Innovative,",
    "and Creative Graphic Designer.",
]

let speed = 80;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.opacity = '0.8'; // Example
    });
    icon.addEventListener('mouseout', () => {
        icon.style.opacity = '1';
    });
});

window.onload = typeWriter;


emailjs.init("dtang.graphics@gmail.com"); // Replace with your user ID

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm('dtang.graphics@gmail.com', 'Tang Designs', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message, please try again.');
        });
});
