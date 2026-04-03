//index.js
//1. 글쓰기 폼 초기 숨기기
//2. +버튼 클릭시 글쓰기 폼 보이기
//3. 글쓰기 폼에 할일 입력 후 엔터 클릭시
//4. 폼에 할일이 없다면 '<p>입력하세요</p>' 경고 출력
//5. 폼에 할일이 있다면 글쓰기폼 닫히고 기존 할일 목록에 목록 추가하기
const plusBtn =  document.querySelector('#wrap #write_fab')
const writeFrm =  document.querySelector('#wrap #write_form')
const enterBtn =  document.querySelector('.write_box #confirm_btn')
const writeBox =  document.querySelector('.write_box #write_contents')
console.log(plusBtn, writeFrm, enterBtn, writeBox)

writeFrm.style.display='none'; //1

plusBtn.addEventListener('click', function(e){ //2
    e.preventDefault();
    writeFrm.style.display='block';
});

const where = document.querySelector('#write_form .write_box')
/* const errp = document.createElement('p')
errp.innerHTML = '<p>할일을 입력하세요</p>';
where.appendChild(errp);
errp.style.display='none'; */

enterBtn.addEventListener('click', function(){
    if(writeBox.value == ''){
/*     errp.style.display='block'; */
        const newP = document.createElement('p');
        newP.innerHTML = '할일을 <em>입력</em>하세요';
        where.appendChild(newP);
        newP.style.display='block';
        newP.style.color='red';
    };
    //할일을 적은 상태일 경우
    if(writeBox.value != ''){//textarea의 값이 빈값이 아닌경우 참
        const allcon = document.querySelector('#all_con'); //ol선택 :자식으로 요소 삽입 위해 부모 선택
        const li = document.createElement('li'); //생성 위치 (클릭 이벤트 내부)
        const dateA = document.createElement('a'); //클릭할때마다 생성
        const a = document.createElement('a'); //클릭할때마다 생성

        dateA.classList.add('date') //기존 css의 디자인 통일을 위해 같은 이름 등록
        li.classList.add('contents4'); //기존 class와 일치시키기 위해(css디자인 적용) 같은 클래스명 부여
        li.classList.add('contents'); //기존 class와 일치시키기 위해(css디자인 적용) 같은 클래스명 부여

        dateA.textContent = '04.03'; // 문자열로 오늘날짜 대입
        dateA.href = '#'; //a 태그 생성시 속성 없이 기본생성됨 -> href 속성 추가 대입으로 클릭이펙트 생성
        a.innerHTML = writeBox.value; //create 생성이 아닌 기존태그값을 대입

        li.appendChild(dateA); //li부모 안 마지막 자식 위치에 날짜A 삽입 (먼저 시작하는 순서)
        li.appendChild(a); //날짜 다음 순서로 뒤로 넣어야하는 create 객체 삽입
        allcon.appendChild(li);//allcon > li > dataA + a
        
        writeFrm.style.display='none'; //등록 후 글쓰기 팝업창 숨김
    };
});