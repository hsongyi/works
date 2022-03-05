
let pm = location.href.split("=")[1];
console.log(pm);

$(() => {

    $(".collection")
        .click(function (e) { //

            e.preventDefault();

            let idvalue = $(this).attr('id');
            console.log(idvalue);
            location.href = "collection_sub.html?cat=" + idvalue;

        }); ///////// click ////////////
    const data = info[pm];
    let title = $('.title');
    let img = $('.itembox');

    title.prepend(data["제목"]);
    img.append(data["이미지"]);

    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

})//////// jqb

let info = {
    "c1": {
        "제목": "2022 Winter collection",
        "이미지": `                    <li>
        <img src="./images/csub101.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub102.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub103.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub104.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub105.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub106.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub107.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub108.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub109.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub110.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub111.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub112.jpg" alt="신상품"><br>
    </li>`
    },
    "c2": {
        "제목": "2022 Autumn collection",
        "이미지": `<li>
        <img src="./images/csub201.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub202.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub203.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub204.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub205.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub206.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub207.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub208.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub209.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub210.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub211.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub212.jpg" alt="신상품"><br>
    </li>`
    },
    "c3": {
        "제목": "2022 Summer collection",
        "이미지": `<li>
        <img src="./images/csub301.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub302.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub303.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub304.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub305.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub306.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub307.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub308.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub309.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub310.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub311.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub312.jpg" alt="신상품"><br>
    </li>`
    },
    "c4": {
        "제목": "2022 Spring collection",
        "이미지": `<li>
        <img src="./images/csub401.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub402.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub403.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub404.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub405.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub406.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub407.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub408.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub409.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub410.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub411.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub412.jpg" alt="신상품"><br>
    </li>`
    },
    "c5": {
        "제목": "2021 Winter collection",
        "이미지": `<li>
        <img src="./images/csub501.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub502.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub503.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub504.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub505.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub506.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub507.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub508.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub509.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub510.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub511.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub512.jpg" alt="신상품"><br>
    </li>`
    },
    "c6": {
        "제목": "2021 Autumn collection",
        "이미지": `<li>
        <img src="./images/csub601.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub602.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub603.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub604.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub605.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub606.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub607.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub608.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub609.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub610.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub611.jpg" alt="신상품"><br>
    </li>
    <li>
        <img src="./images/csub612.jpg" alt="신상품"><br>
    </li>`
    }
}
