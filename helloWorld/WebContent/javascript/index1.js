const choi = {
    name: '최선영', 
    age: 20,
    score: 90
}

const han = {
    name: '한동일', 
    age: 21,
    score: 89
}

const yun = {
    name: '윤희성', 
    age: 22,
    score: 58
}

const persons = [choi, han, yun];

// createTable(); 
// hosting. createTable과 createTr이라는 function 두개를 한번에 뒀을 때, 
//어느 위치에서도 createTable(); 생성이 가능하다.

function createTable(){
    let tag = '<table border="1">';
    tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th><tr></thead>';
    tag += '<tbody>'
    for(let person of persons) {
        // if(person.score >= 60) {
        //     tag += '<tr class="pass">';
        // } else {
        //     tag += '<tr class="fail">';
        // }

        // for(let field in person) { //field 갯수 만큼 가지고 온다.
        //     tag += '<td>' + person[field] + '</td>';
        // }
        // if(person.score >= 60) {
        //     tag += '<td class="pass">Pass</td>';
        // } else {
        //     tag += '<td class="fail">Fail</td>';
        // }
        // tag += '</tr>';
        tag += createTr(person);
    }
    tag = tag + '</tbody></table>';
    document.write(tag);
}

function createTr(person) {
    let tag = '<tr>';
    for (let field in person) {
        tag += '<td>' + person[field] + '</td>';
    }
    if(person.score >= 60) {
        tag += '<td class="pass">pass</td>';
    } else {
        tag += '<td class="fail">fail</td>';
    }
    tag += '</tr>';
    return tag;
}

createTable();
//물론 가장 마지막에 function을 호출하는 것이 가장 안정적이다.



