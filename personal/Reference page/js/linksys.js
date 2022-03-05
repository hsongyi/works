
$(() => { ///////// jQB ////////////////////


    $(".itembox")
        .click(function (e) {
            // 기본이동막기
            e.preventDefault();

            // 클릭된 a\요소의 텍스트
            let txt = $(this).text().toLowerCase().trim();
            console.log(txt);


        }); ///////// click ////////////



}); ///////////// jQB ////////////////////