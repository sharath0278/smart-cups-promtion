$(document).ready(function () {
    // $("#btnSubmit").click(function () {
    //     alert("button");
    // });


    $('#quantity').change(function (event) {
        if (event.target.value >= 0) {
            setCost(event.target.value);
            setDiscount(event.target.value)
        }
    });

    $('#quantity').keydown(function (event) {
        if (event.target.value >= 0) {
            setCost(event.target.value);
            setDiscount(event.target.value)
        }

    });

    function setCost(v) {
        let cost = 599;
        $('#cost').text(cost * v)
    }

    function setDiscount(v) {
        let cost = 799.50;
        $('#discount').text(cost * v)
    }

    // function setimg(this){
    //     alert(this)
    // }


    $("#smallImg img").click(function () {
        let img = ($(this).attr("src"));
        $('#activeImg').attr('src', img)

    });


});

