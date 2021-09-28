const join_id = document.querySelector('#id');
const join_submit = document.querySelector('.join_submit');
const warning_requireds = document.querySelectorAll('.text_required');
const idCheck_false = document.querySelector('.idCheck_false');

join_id.onblur = () => {
    let test_id = 'hyeri1234'; // 이미 존재하는 아이디입니다.

    if(join_id.value.length == 0) { // 아무것도 입력되지 않으면
        warning_requireds[0].style.display = 'block';
    }else{
        warning_requireds[0].style.display = 'none';
        if(join_id.value == test_id) {
            warning_requireds[0].style.display = 'block';
        }else{
            warning_requireds[0].style.display = 'none';
        }
    }
}

join_submit.onclick = () => {
    alert(join_id.value + '계정을 생성하였습니다.')
    print();
}

const long_text = document.getElementsByClassName('long_text');
console.log(long_text[0].value);
console.log(long_text[1].value);
console.log(long_text[2].value);
console.log(long_text[3].value);
// long_text[4].style.display = 'none';
long_text[4].style.display = 'block';

const id_text = document.getElementById('id');
// id_text.style.display = 'none';
id_text.value = 'hyeri1234';

const inputs = document.getElementsByTagName('input');
console.log(inputs); /* input 쓴 요소들을 리스트 형태로 가져옴 */

const long_text2 = document.querySelectorAll('.long_text'); // class
const id_text2 = document.querySelector('#id');
const inputs2 = document.querySelectorAll('input'); // 여러 개의 객체를 가지고 옴

console.log(long_text2);
console.log(id_text2);
console.log(inputs2);