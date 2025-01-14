"use strict";
(function () {

    window.addEventListener("load", init);

    async function init() {
        try {
            // Await m3 to resolve first
            let result = await m3();
            result = await m1(result);
            result = await m2(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    function m1(value) {
        return value + " lemon squeezy!";
    }

    function m2(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value + " I'm gettin the hang of it now");
            }, 2000);
        });
    }

    function m3() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("easy peasy");
            }, 1000);
        });
    }

})();