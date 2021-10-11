let message = ['Hello', 'Good Morning', 'Hi'];

let ulTag = document.createElement('ul');   //document=object, createElement=method
//ulTag.innerHTML = '<li>Hello</li>';

for(let i=0; i<message.length; i++){
    let liTag = document.createElement('li');   //<li></li>
    liTag.innerHTML = message[i];
    ulTag.appendChild(liTag);
}

//div에 자손으로 ulTag 붙여주기
let divShow = document.getElementById('show');
divShow.appendChild(ulTag);


let fruits = [{
    name: '사과',
    price: 1000
}, {
    name: '바나나',
    price: 2000
}, {
    name:'체리',
    price: 3000
}];


//div 찾기
let divFruit = document.getElementById('fruit');

//ulTag2 만들기
let ulTag2 = document.createElement('ul');

//li 만들어서 화면에 넣기
for (let fruit of fruits){
    let li= document.createElement('li');
    li.innerHTML= fruit.name +',' + fruit.price;
    ulTag2.appendChild(li); //li를 ulTag2 하위태그로 붙여넣기
}

//ulTag2를 div 하위태그에 붙여주기
divFruit.appendChild(ulTag2);


//div찾기
let multi = document.getElementById('multi');
let t = document.createElement('table');
t.setAttribute('border', '1');

let num = 3; // ?단

//thead 영역
let tr=document.createElement('tr');
let td=document.createElement('td');
td.innerHTML = num+'단';
tr.appendChild(td);
t.appendChild(tr);

//tbody영역
for(let i=2; i<=9; i++){
    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerHTML = num + '*' + i + '=' + (num*i);
    tr.appendChild(td);
    t.appendChild(tr);
}

//만든 테이블을 div_multi에 붙여주기
multi.appendChild(t);
