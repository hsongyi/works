$(document).ready(function () {


    $('input[type="checkbox"][name="form"]').change(function () {
        if ($(this).prop('checked')) {
            $('input[type="checkbox"][name="form"]').prop('checked', false);
            $(this).prop('checked', true);
        }

        if ($(this).prop('checked', false)) {
            $('.itembox').css({
                display: 'none'
            })
            $(this).prop('checked', true);
        }
    });

    if ($("input:checkbox[id='all']").prop("checked", false)) {
        $('.all').css({
            display: 'none'
        })
    }

    $("input:checkbox[name=form]").on('change', function () {
        let x = $(this).attr("value");
        console.log(x)

        let target = $(this).attr("id");
        console.log(target)

        switch (target) {
            case "All":
                $('.itembox').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_1":
                $('.list_1').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_2":
                $('.list_2').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_3":
                $('.list_3').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_4":
                $('.list_4').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_5":
                $('.list_5').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_6":
                $('.list_6').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_7":
                $('.list_7').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_8":
                $('.list_8').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_9":
                $('.list_9').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_10":
                $('.list_10').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_11":
                $('.list_11').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_12":
                $('.list_12').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_13":
                $('.list_13').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_14":
                $('.list_14').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_15":
                $('.list_15').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_16":
                $('.list_16').css({
                    display: 'block'
                })
                break
        }
        switch (target) {
            case "list_17":
                $('.list_17').css({
                    display: 'block'
                })
                break
            default:
                $('itembox').siblings().css({
                    display: 'none'
                })
        }

    }) ////////////////체크박스 필터 함수 /////


}) //// 제이쿼리 코드구역 ///