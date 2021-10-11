'hello'.slice(0,3); //0~2까지
'hello'.substring(0,3); //0~3까지
'hello'.substr(0,3); //0부터 시작해서 3번째 문자열까지 출력

// 970101-2345678
// 990301-1234567
// 000503-3456789
// 010901-4567890

function checkGender(birthInfo){ //입력된 주민번호로 남여 구분하는 함수.
    //2000년 01.01 이전 출생자 주민번호 뒷자리 (1:남, 2:여)
    //2000년 01.01 이후 출생자 주민번호 뒷자리 (3:남, 4:여)

    let b1=birthInfo.substring(7,8);
    if(b1==1){
       console.log('2000년 이전 출생 남자');
       return '남자'
    } else if(b1==2){
        console.log('2000년 이전 출생 여자');
        return '여자'
    } else if(b1==3){
        console.log('2000년 이후 출생 남자');
        return '남자'
    } else if(b1==4){
        console.log('2000년 이후 출생 여자');
        return '여자'
    } 
}

document.write(checkGender('970101-2345678'));
document.write(checkGender('990301-1234567'));
document.write(checkGender('000503-3456789'));
document.write(checkGender('010901-4567890'));

//교수님 방법
// let today = new Date();
// console.log(today.getFullYear);
// let year = birthInfo.substr(0,2);
// birthInfo=birthInfo.replace('-','');
// let s = birthInfo.charAt(6);
// let returnMessage='';
// if ((s=='1' && parseInt(year)>21) || (s=='3' && parseInt(year)<=21){
//     returnMessage = '남자';
// } else if ((s=='2' && parseInt(year)>21) || (s=='4' && parseInt(year)<=21){
//     returnMessage = '여자';
// } else{
//     return Message = error;
//}
//return v;
//console.log(checkGender('970101-2345678'));
//console.log(checkGender('990301-1234567'));
//console.log(checkGender('000503-3456789'));
//console.log(checkGender('010901-4567890'));

