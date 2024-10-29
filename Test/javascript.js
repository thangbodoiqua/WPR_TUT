'use strict';
(function () { 
    const API = "https://pokeapi.co/api/v2/pokemon/ditto";

        window.addEventListener("load", init());

    function init() {
            
        fetch(API)
            .then((data) =>  console.log(data));
        
        fetch(API)
            .then((resolve) => console.log(resolve.json()));
        
            fetch(API)
            .then((resolve) => resolve.json())
            .then((data) => {
                console.log(data); // Bắt lấy dữ liệu đã chuyển đổi
            });
        }
    })();