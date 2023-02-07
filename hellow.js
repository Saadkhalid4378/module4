(function (window) {
    varhellowgreeter ={};
    hellowgreeter.name = "name"
    var greeting = "hellow";
    hellowgreeter.sayhellow = function () {
        console.log (greeting + hellowgreeter.name);

    }
    window.hellowgreeter = hellowgreeter ;

})(window);
