const choi ={
    name: '최선영',
    age: 20,
    score: 90
}

const han ={
    name:'한동일',
    age: 21,
    score:89
}

const yun={
    name:'윤희성',
    age: 22,
    score:58
}

const persons =[choi,han,yun];

//createTable();  //hoisting (끌어올림)

function createTable(){

    let tag='<table border="1">';
    tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead>';
    tag += '<tbody>';
        for(let person of persons){ 
            // if(person.score >=60){
            //     tag+='<tr class = "Pass">';
            // } else{
            //     tsg+='<tr class = "Fail">'
            // }
            // for (let field in person){  //field 갯수
            //     tag += '<td>'+person[field]+'</td>';
            // }
            // if(person.score >=60){
            //     tag+='<td class = "pass">Pass</td>';
            // } else{
            //     tsg+='<td class = "fail">Fail</td>'
            // }
            // tag += '</tr>'
            tag += createTr(person);
        }
        tag += '</tbody></table>';
        document.write(tag);
}

//createTable();