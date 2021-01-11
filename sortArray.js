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

/* 
    On load of window display all the data from array to list.
*/
window.onload = () => {

    actualArray.forEach(createDataAndAppend);
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

/**
 * 
 * @param {*} item 
 * @param {*} index 
 */
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

