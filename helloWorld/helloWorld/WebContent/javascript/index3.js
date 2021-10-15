//<div id="show">
let messages = ['Hello', 'Good Moring', 'Hi'];  //배열변수

let ulTag = document.createElement('ul');   //ul
// ulTag.innerHTML = '<li>Hello</li>';
// console.log(ulTag);

for(let i = 0; i<messages.length; i++) {
    let liTag = document.createElement('li');   //<li></li>
    liTag.innerHTML = messages[i];
    ulTag.appendChild(liTag);
}

// div 에 자손으로 ulTag 붙여주기.
let divShow = document.getElementById('show');
// console.log(divShow);
divShow.appendChild(ulTag);



//<div id="fruit">

// const apple = {
//     name: '사과',
//     price: 1000
// };

let fruits = [{
    name: '사과',
    price: 1000
}, {
    name: '바나나',
    price: 2000
}, {
    name: '체리',
    price: 3000
}];     // 이런 형식으로도 배열을 추가할 수 있다.

let ulTag2 = document.createElement('ul');  
let divFruit = document.getElementById('fruit');

for(let fruit of fruits) {
//for(let i = 0; i<fruits.length ;i++) {
    let li = document.createElement('li');
    li.innerHTML = fruit.name + ', ' + fruit.price;
    //li.innerHTML = fruits[i].name + ',' + fruits[i].price;
    ulTag2.appendChild(li);
}
divFruit.appendChild(ulTag2);



//<div id="multi"> div 찾기
let multi = document.getElementById('multi');
let t = document.createElement('table');
t.setAttribute('border',1);

let num = 2; //몇 단인가?

let tr = document.createElement('tr');
let td = document.createElement('td');
td.innerHTML = num + '단';
tr.appendChild(td);
t.appendChild(tr);

for(let j = 2; j<=9 ; j++) {
    for(let i = 1; i<=9 ; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        // td.innerHTML = '2' + '*' + i + '=' + (2*i);
        td.innerHTML = j + '단';
        td.innerHTML = j + '*' + i + '=' + (j*i);
        tr.appendChild(td);
        t.appendChild(tr);
    }
}
multi.appendChild(t);