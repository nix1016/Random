// Single element
/* console.log(document.getElementById('my-form'));
console.log(document.querySelector('#my-form')); // select by id
console.log(document.querySelector('.container')); // select by class
console.log(document.querySelector('h1')); // select by tag
*/

// Multiple element
/* console.log(document.querySelectorAll('.item')); // returns a node list which can run array methods on
console.log(document.getElementsByClassName('item')); // returns HTMLCollection can't run array methods on
console.log(document.getElementsByTagName('li')); */

const items = document.querySelectorAll('.items');

console.log(items);
items.forEach(item => console.log(item));

const ul = document.querySelector('.items');

// ul.remove(); /* removes all ul */
// ul.lastElementChild.remove(); /* removes last element of ul */
console.log(ul.firstElementChild);
ul.firstElementChild.textContent = 'Hello'; /* change text content of first list to hello */
console.log(ul.children[1]);
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener('click', (e) => { // can change click to mouseover, mouseout, etc
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>bye</h1>';
})