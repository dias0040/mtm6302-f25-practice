//Variables

const items = [];

// functions

function addItem(param) {
  items.push(param);
  console. log(items);

    displaySpellbook();

}

function displaySpellbook() {
     const $items = document.getElementById('items');

    //  const templateHTML =  [];
    $items.innerHTML = '';
    const ol = document.createElement('ol');

    //  for (let i = 0; i < items.length; i++) {
    for (const item of items) {
    //   templateHTML.push(`<li>${items[i]}</li>`);

        const li = document.createElement('li');
        li.textContent = items[i];
        ol.appendChild(li);
     }

     $items.appendChild(ol);
     
    // $items.innerHTML = templateHTML.join('');
}