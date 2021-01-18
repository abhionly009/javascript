let actualArray = [ 'Jan',
    'April',
    'May',
    'July',
    'Aug',
    'Sept',
    'Feb',
    'Jun',
    'Oct',
    'Dec',
    'Nov',
    'March'];


/**
 * used ES6 syntax for creating copy of array with value.(Spread operator [...name])
 * benefit of copying value of if you are going to change anything into actual array it will 
 * not affect your copy.
 * 
 * Note if you are using simple copy like this copyOfArray = actualArray;
 * then it will copy the reference of original array not value, later if you are updating anything in original array it will impact 
 * to your copy as well.
 */
let copyOfArray = [...actualArray];    

/* 
    On load of window display all the data from array to list.
*/
window.onload = () => {

    actualArray.forEach(createDataAndAppend);
 }


function createArraysData() {
    copyOfArray.forEach(updateExistingList);
}

/* 
create li node and append value to it and append to 
*/ 
function createDataAndAppend(item,index) {
    let months = document.getElementById('months');
    let node = document.createElement('li'); 
    let t = document.createTextNode(item);
    node.appendChild(t);
    months.appendChild(node);
 }

/* add on click event on asc button and sort existing array.*/
document.getElementById("asc").addEventListener('click', () => {
    actualArray.sort();
    actualArray.forEach(updateExistingList);
})


function updateExistingList(item,index) {
    let months = document.getElementById('months');
    months.getElementsByTagName('li').item(index).innerText = item;

}

/* add on click event on dsc button and sort existing array.*/
document.getElementById("dsc").addEventListener('click', () => {
    actualArray.sort();
    actualArray.reverse();
    actualArray.forEach(updateExistingList);
})

/**
 * add on click listener on normal button and display orinal array.
 */
document.getElementById('normal').addEventListener('click', () => {
    createArraysData();
})