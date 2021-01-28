var list = [];
document.getElementById('add').addEventListener('click', () => {
    let data = document.getElementById('data');
    let input = data.value;

    if (input.length>0) {
        let data_list = document.getElementById('data-list');
        let node = document.createElement('li'); 
        node.setAttribute('class', 'li');
        node.setAttribute('id', input);
        let header3 = document.createElement('span');
        header3.setAttribute('class', 'header3');
        header3.textContent = capitalizeFirstLetter(input);
        // let dele = document.createElement('button');
        
        // dele.setAttribute('class', 'btn');  
        // dele.textContent = 'Delete';
        node.appendChild(header3);
        // node.appendChild(dele);
        data_list.appendChild(node);
        list.push(input);

    } else {
        alert('Enter something in input first');
    }
    data.value = '';


    document.getElementById('data').focus();

})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
document.getElementById('data-list').addEventListener('click', e => {
    console.log(e.target);
})

