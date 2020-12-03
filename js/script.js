console.dir($("div"));
let x = $("div")
    .on("click", function () {
        $(this).toggleClass("active")
    })
    .html("Проверка метода HTML")
    .css({
        fontSize: "50px",
        color: "white",
        background: "#505050"
    })
    /* Вашим домашним заданием будет сделать методы которые будут удалять и добавлять классы (addClass, removeClass). Также сделать методы которые будут изменять ширину и высоту элементов, при этом если вы получаете просто число, то сами добавляете “px”, а если получаете строку, то просто передаете для ширины, но если вы ничего не получаете, то возвращаете ширину или высоту первого элемента. (height, width) */
   .addClass("justify-center")
    .removeClass("section")
    .width()
    .height()
    