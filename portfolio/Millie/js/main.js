// 헤더 이동 스크롤 액션

window.addEventListener('scroll', () => {

    const target = document.querySelector('.header');
    const banner = document.querySelector('.mbx_2');
    const atags = document.querySelector('.atags a')
    const logo = document.querySelector('.nav img')
    let targetY = target.getBoundingClientRect();
    let bannerY = banner.getBoundingClientRect();


    if (targetY.y > bannerY.y) {
        target.style.backgroundColor = "#ffffff95";
        target.style.transition = "All .5s ease"
        atags.style.color = '#333333';
        logo.src = "./images/blacklogo1.png";
        logo.style.width = "25px";
    } //////// if 
    else target.style.backgroundColor = '#a7a39aad',
        atags.style.color = '#ffffff',
        logo.src = "./images/logo1.png",
        logo.style.width = "60px";
})

window.addEventListener('load', () => {

    const scAct = document.querySelectorAll('.scAct')
    let scTop;
    let scPos = [];
    let winH = window.innerHeight;

    for (i = 0; i < scAct.length; i++) {
        scPos[i] = scAct[i].offsetTop;
    }

    const scAction = seq => {
        if (scTop > scPos[seq] - winH +50 &&
            scTop < scPos[seq]) {
            scAct[seq].classList.add("on")
        }

        ///////// if 
    }; /////////// scAction 함수 ////////////////////
    /////////////////////////////////////////////////

    window.addEventListener("scroll", () => {
        scTop = this.scrollY;
        scPos.forEach((val, idx) => scAction(idx));
    })

    // Qna 클릭함수
    let arrow = document.querySelectorAll('.arrow');
    let uparrow = document.querySelectorAll('.arrow-up')
    let qnabox = document.querySelectorAll('.QnAbox');
    console.log(arrow.length, qnabox.length);
})


// 카테고리 js

$(document).ready(function () {

    $('.btn').first().addClass('active')

    $('.btn').on('click', function (e) {
        e.preventDefault();
        console.log('clicked!')
        $(this).addClass('active')
            .siblings().removeClass('active');

        let x = $(this).attr('id');

        console.log(x);

        switch (x) {
            case 'list1':
                $('#stock').css({
                    display: 'flex'
                }).siblings().css({
                    display: 'none'
                })
                break
            case 'list2':
                $('#English').css({
                    display: 'flex'
                }).siblings().css({
                    display: 'none'
                })
                break
            case 'list3':
                $('#classic').css({
                    display: 'flex'
                }).siblings().css({
                    display: 'none'
                })
                break
            case 'list4':
                $('#interior').css({
                    display: 'flex'
                }).siblings().css({
                    display: 'none'
                })
        }



    }) /////click 함수
    $('#tab1').css({
        backgroundColor: '#eeeeee'
    })
    $('.tab').on('click', function () {
        $(this).css({
            backgroundColor: '#eeeeee'
        }).siblings().css({
            backgroundColor: '#ffffff'
        })
        let x = $(this).attr('id');
        console.log(x);

        switch (x) {
            case 'tab1':

        }
        const data = info[x];
        let title = $('#tabCont');
        let frame = $('.frame');
        let txt = $('.mtxt2');

        title.html(data["제목"]);
        frame.html(data["프레임"]);
        txt.html(data["내용"]);
    })

    // tab메뉴


})

let info = {
    "tab1": {
        "제목": `<h1>오디오북</h1> <h2>세상에서 가장 <br> 교양있는 수면제</h2>`,
        "프레임": `<img src="./images/mobile1.png" alt="모바일프레임">
        <div class="frameimg">
            <img src="./images/abook1.png" alt="frameimg">`,
        "내용": `<h3>하루의 시작과 마무리를 오디오북과 함께</h3>
        <p>지하철에서도, 잠들기 전에도 독서하세요</p>`
    },
    "tab2": {
        "제목": `<h1>밀리뷰어</h1> <h2> 독서를 위한 <br> 가장 완벽한 도구 </h2>`,
        "프레임": `<img src="./images/mobile1.png" alt="모바일프레임">
        <div class="frameimg">
            <img src="./images/viewer1.png" alt="frameimg">`,
        "내용": `<h3>어느 기기에서도 OK</h3>
        <p>스마트폰,태블릿,PC,E ink 기기까지</p>`
    },
    "tab3": {
        "제목": `<h1>투데이</h1> <h2>쓱 - 훑어만 봐도 <br> 독서 트렌드를 한 눈에</h2>`,
        "프레임": `<img src="./images/mobile1.png" alt="모바일프레임">
        <div class="frameimg">
            <img src="./images/today1.png" alt="frameimg">`,
        "내용": `<h3>이럴 땐 이런 책</h3>
        <p>내 상황에 딱 맞는 회원들의 추천 책</p>`
    }
}