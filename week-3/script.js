console.log( document.getElementById("color-button") );

// Step 4: Select Elements Using the DOM Methods
// getElementById
const colorButton = document.
getElementById("color-button");

console.log(colorButton);

// querySelector

const resetButton = document.
querySelector ("#reset-button");

console.log(resetButton);

// querySelectorAll

const boxes = document.
querySelectorAll(".box");

console.log(boxes);

// 5.1 Change Text Content and Style
/** Event listener for colorButton **/

colorButton.addEventListener('click', () => {
    // textContent

    const colorfulText = document.
    getElementById ('colorful-text')
    
    colorfulText.textContent = 
    "You changed my color!";

    // Style

   colorfulText.style.
   backgroundColor = "green";
});


// 5.2 Toggle Highlight and Update the state of the button
// classList

const box = document.getElementById
('box1');

box.classList.add('highlight');

// Manipulate custom attribute

console.log(box.getAttribute
    ('data-state') > 0 );

box.setAttribute('data-state', box.
    getAttribute('data-state') > 0 );

const dataState = box.id;

// Update innerHTML to show state

box.innerHTML = `<p>State: ${box.getAttribute('data-state')} </p>`;

/**  Event listener for box **/
document.getElementById('reset-button').addEventListener('click', () => {
// Remove highlight class

// Reset data-satate attribute

// Clear innerHTML

// Reset colorfulText

// Reset color

});

