let pm = location.href.split("=")[1];
console.log(pm);

$(() => {

    $(".itembox")
        .click(function (e) { //

            e.preventDefault();

            let idvalue = $(this).children('img').attr('id');
            console.log(idvalue);
            location.href = "sub.html?cat=" + idvalue;

        }); ///////// click ////////////
    const data = info[pm];
    let title = $('.title');
    let img = $('.img');
    let pinfo = $('.info');
    let cbox = $('.contentBox');

    title.prepend(data["제목"]);
    pinfo.append(data["내용"]);
    img.append(data["이미지"]);
    cbox.prepend(data["슬라이드"])

    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

})//////// jqb

let info = {
    "c2": {
        "제목": "후지모리",
        "이미지": `<img src="./images/1/후지모리_1.jpeg" alt="후지모리" width="300">`
    },
    "c3": {
        "제목": "별게 다 영감",
        "이미지": `<img src="./images/2/별게다영감_1.jpeg" alt="별게다영감" width="320">`
    },
    "c4": {
        "제목": "디자인받고",
        "내용": `<p>‘디자인 받고’는 디자인과 관련이 없어 보이는 일상적인 단어들을 디자인과 연결해 이야기를 나누는 프로그램이다.<br> 과일, 청소, 꿈 등의 단어와 디자인을 연결해 생각해보고 다양한 관점으로 디자인을 바라보고 경험하는 것을 목표로 한다.<br> ‘디자인 받고’는 매주 월요일과 목요일 디자인방에서 진행되고 이야기 나눈 내용은 이후에 웹에 업로드된다. 자세한 진행 방법은 아래와 같다.<br><br>

        1 디자인과 연결지어 생각할 단어가 디자인방 SNS 계정에 올라온다.<br>
        2 사전에 공지된 단어를 디자인과 연결지어 생각한 뒤 하나의 질문으로 만든다.<br>
        3 각자가 생각한 질문에 대한 답을 능동적으로 탐구해 글과 이미지로 정리한다.<br>
        4 ‘디자인 받고’ 시간에 각자가 준비한 질문과 생각을 함께 공유한다.<br><br>
        
        ‘디자인 받고’는 디자인에 관심이 있는 누구나 참여할 수 있고, 매주 화요일 올라오는 구글 설문지를 통해 참여 신청을 받는다.</p>`,
        "슬라이드": `
        <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./images/3/디자인받고_1.jpeg" alt="슬라이드">
            </div>
            <div class="swiper-slide">
                <img src="./images/3/디자인받고_2.jpeg" alt="슬라이드">
            </div>
            <div class="swiper-slide">
                <img src="./images/3/디자인받고_3.jpeg" alt="슬라이드">
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>`
    },
    "c5": {
        "제목": "Sara Cwynar",
        "슬라이드": `
        <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
          <img src="./images/4/sara_cwynar_2.jpeg" alt="saracwynar"></div>
          <div class="swiper-slide">
          <img src="./images/4/sara_cwynar_1.jpeg" alt="saracwynar"></div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>`
    },
    "c6": {
        "제목": "AES+F",
        "내용": "<p>AES + F는 Tatiana Arzamasova, Lev Evzovich, Evgeny Svyatsky 및 Vladimir Fridkes의 네 명의 러시아 예술가 집단이다.</p>",
        "이미지": `<img src="./images/5/aesf_1.jpeg" alt="AES+F" width="350">`
    },
    "c7": {
        "제목": "노래의 의미",
        "이미지": `<img src="./images/6/노래의의미.png" alt="노래의의미" width="300">`
    },
    "c8": {
        "제목": "스펙타클의 사회",
        "이미지": `<img src="./images/7/스펙타클의사회.jpeg" alt="스펙타클의 사회" width="350">`
    },
    "c9": {
        "제목": "CCTV Camp",
        "내용": "<p>사람보다 카메라가 더 많은 이 시대에 영화란 과연 무엇일까?<br><br> 서울에서 제작한 신작에서 캠프는 구도심과 도시재생이 공존하고 있는 을지로의 대림상가 건물 옥상에 무인으로 작동하는 폐쇄회로 텔레비전 카메라를 세우고 그 카메라의 동작을 안무하듯 컴퓨터 소프트웨어로 제어하며 주변 지역의 이야기를 영상에 담아낸다.<br><br> 팬 틸트, 줌 기능을 이용하요 다양한 거리와 속도로 움직이는 카메라는 운동성, 율동감을 갖고 도시 경관을 포착한다. 날씨와 시간대에 따라 시시각각 달라지는 영상이 실시간으로 상영됨으로써 전시실과 을지로는 하나의 시공간을 이루게된다.<br> 이 라이브 스트리밍은 온라인 cctv.camp 에서도 볼 수 있다.<br><br>그리고 백남준아트센터와 커치비엔날레가 함깨 커미션하고 같은 방식의 카메라 세팅으로 뭄바이의 포시즌호텔에서 제작한 작품도 무빙 파로나마 섹션에서 볼 수 있다.<br><br> 백남준이 1960년대 폐쇄회로 텔레비전을 예술 매체로 개척한 지 60여년이 흐른 지금, CCTV 카메라로 새로운 영화 만들기의 가능성을 실험하는 이 작업을 위해 서울에서는 최태윤 작가와 서울 익스프레스의 전유진, 홍민기 작각 협업했다.</p>",
        "이미지": `<img src="./images/8/cctvcamp_1.png" alt="CCTVcamp" width="320">`
    },
    "c10": {
        "제목": "Cenit",
        "내용": "<p>만화 속 날개 달린 새를 보고, 태양을 보고, 식물을 보고, 그건 주인공의 시선 이었다가 독자의 시선이 되고, 만화적 표현이었다가 만화 속 배경이 됩니다.<br> 띄엄띄엄 놀듯이 큰 칸 속을 떠다니는 작은 칸들, 그중 하나에 시선이 머물러도 좋을 겁니다.</p>",
        "이미지": `<img src="./images/9/cenit.jpeg" alt="cenit" width="350">`

    },
    "c11": {
        "제목": "이정현",
        "이미지": `<img src="./images/10/이정현.jpeg" alt="이정현" width="300">`

    },
    "c12": {
        "제목": "파워오브도그",
        "이미지": `<img src="./images/11/파워오브도그.jpeg" alt="파워오브도그" width="350">`
    },
    "c13": {
        "제목": "패터슨",
        "이미지": `<img src="./images/12/패터슨.jpeg" alt="패터슨" width="350">`
    },
    "c14": {
        "제목": "진실의 색",
        "이미지": `<img src="./images/13/진실의색.jpeg" alt="진실의 색" width="350">`
    },
    "c15": {
        "제목": "찬실이",
        "이미지": `<img src="./images/14/찬실이.png" alt="찬실이" width="350">`

    },
    "c16": {
        "제목": "HHHA online",
        "이미지": `<img src="./images/15/hhhaonline.png" alt="hhhaonline" width="350">`
    },
    "c17": {
        "제목": "Cares of gaze",
        "이미지": `<img src="./images/16/caresofgaze.jpeg" alt="caresofgaze" width="330">`
    },
    "c18": {
        "제목": "몸짓들",
        "이미지": `<img src="./images/17/몸짓들.jpeg" alt="caresofgaze" width="350">`
    },
    "c19": {
        "제목": "Personal shopper",
        "이미지": `<img src="./images/18/personalshopper.jpeg" alt="personalshopper" width="330">`
    },
    "c20": {
        "제목": "Perform",
        "이미지": `<img src="./images/19/perform.jpeg" alt="perform" width="330">`
    },
    "c21": {
        "제목": "Jan Hakon Erichsen",
        "이미지": `<img src="./images/20/Jan Hakon Erichsen.jpg" alt="perform" width="330">`
    }
}