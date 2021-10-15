'hello'.slice(0 ,3);    //0번째 부터 3번째 까지.
'hello'.substring(0,3); //slice와 비슷하지만, 음수값 사용 불가능
'hello'.substr(1,2);    //1번째 글짜부터 2개.

// 970101-2345678
// 990301-1234567
// 000503-3456789
// 0109014567890

function checkGender(birthInfo) {
    //2000년 01.01 이전 출생자 주민번호 뒷자리(1: 남자, 2: 여자)
    //2000년 01.01 이후 출생자 주민번호 뒷자리(3: 남자, 4: 여자)

    let substr = birthInfo.substr(7,1);
    let substr2 = birthInfo.substr(6,1);

    if(birthInfo.includes('-')) {
        if(substr < 3) {
            if((substr%2)==1) {
                console.log('남자');
            } else {
                console.log('여자');
            }
        } else {
            if((substr%2)==1) {
                console.log('남자');
            } else {
                console.log('여자');
            }
        }
    } else {
        if(substr2 < 3) {
            if((substr2%2)==1) {
                console.log('남자');
            } else {
                console.log('여자');
            }
        } else {
            if((substr2%2)==1) {
                console.log('남자');
            } else {
                console.log('여자');
            }
        }
    }
    return '남자' | '여자';

    // let today = new Date();
    // console.log(today.getFullYear());
    // let year = birthInfo.substr(0,2);
    // birthInfo = birthInfo.replace('-', '');
    // let s = birthInfo.charAt(6);
    // let returnMessage = '';
    // if ((s == '1' && parseInt(year) > 21) || (s == '3' && parseInt(year) <= 21)) {
    //     returnMessage = '남자';
    // } else if ((s == '2' && parseInt(year) > 21) || (s == '4' && parseInt(year) <= 21)) {
    //     returnMessage = '여자';
    // } else {
    //     returnMessage = 'error';
    // }
    // // return v;
}

checkGender('970101-2345678');
checkGender('990301-1234567');
checkGender('000503-3456789');
checkGender('0109014567890');

const cars = ["Saab", "Volvo", "BMW"];
cars[0]; 




