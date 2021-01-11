let ascBtn = document.getElementById("asc");
let dscBtn = document.getElementById("dsc");

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

window.onload = () => {

    actualArray.forEach(createDataAndAppend);
 }

function createDataAndAppend(item,index) {
    let months = document.getElementById('months');
    let node = document.createElement('li'); 
    let t = document.createTextNode(item);
    node.appendChild(t);
    months.appendChild(node);
 }
    
ascBtn.addEventListener('click', () => {
    actualArray.sort();
    actualArray.forEach(updateExistingList);
})

function updateExistingList(item,index) {
    let months = document.getElementById('months');
    months.getElementsByTagName('li').item(index).innerText = item;

}

dscBtn.addEventListener('click', () => {
    actualArray.sort();
    actualArray.reverse();
    actualArray.forEach(updateExistingList);
})

