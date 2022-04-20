
document.addEventListener('DOMContentLoaded',()=>{

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button')


function onAdd() {

    //1. 사용자가 입력한 텍스트 받아오기
    const text = input.value;
    //1-1. 만약 아무것도 입력하지 않을시, 아이템이 추가되지 않게하기
    if(text === '') {
        input.focus(); // 포커스를 준 후,
        return; // 리턴하면 아래의 코드를 실행하지 않고 그대로 함수를 빠져나옴
    }
    console.log(text);
    //2. 새로운 아이템 만들기 (텍스트 + 삭제버튼)
    const item = createItem(text);
    //3. items라는 컨테이너 안에 새로만든 아이템 추가
    items.appendChild(item);
    //4. +를 누르면 input의 텍스트값을 초기화 한다 
    input.value = '';
    // -> 리스트 추가시 텍스트 칸을 비우고,
    //5. 새로 추가된 아이템으로 스크롤이 따라오도록 설정 (항상 중간으로 오도록!)
    item.scrollIntoView({block: 'center'})
    input.focus();
    // -> 텍스트 칸이 선택된 상태로 두기 위해서 포커스를 준다!
}

// 아이템 만들기

function createItem(text) {
    // input의 text값을 받아와서 리스트 요소들 만들기!
 const itemRow = document.createElement('li');
 itemRow.setAttribute('class', 'item__row');
 
 const item = document.createElement('div');
 item.setAttribute('class', 'item');

 const itemName = document.createElement('span');
 itemName.setAttribute('class','item__name');
 itemName.innerText = text;

 const itemDivider = document.createElement('div');
 itemDivider.setAttribute('class', 'divider');

 // 딜리트 버튼 누르면 리스트 삭제
 const deleteBtn = document.createElement('button');
 deleteBtn.setAttribute('class','delete');
 deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
 deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow);
 })
// 위에 생성해놓은 아이템을 추가
 item.appendChild(itemName);
 item.appendChild(deleteBtn);

 itemRow.appendChild(item);
 itemRow.appendChild(itemDivider);
 return itemRow;
}


// 버튼을 클릭하면 아이템이 추가되는 함수 만들기
addBtn.addEventListener('click',()=>{

onAdd();

})

// 엔터를 누르면 아이템이 추가되도록 해보기!
 input.addEventListener('keypress',(event)=>{
     console.log('key');
     if(event.key === 'Enter') {
         onAdd();
     }
 })

})//////// 자바스크립트 코드 블럭
