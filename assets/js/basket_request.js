function action_in_basket(elem, action) {
    let data = action_to_basket(elem, action);
    let parentNode = elem.parentNode;
    let countNode = parentNode.querySelector(".card-num");
    if (countNode && data && data["count"]) {
        countNode.innerHTML = data["count"];
    }
}
var notData = ['class', 'id', 'onclick']

function action_to_basket(elem, action) {
    // Получить из addToBasketBtn value и записать в переменную id
    let requestData = {};

    for (let attr of elem.attributes){
        if (!notData.includes(attr.name)) {
            requestData[attr.name.replace('data-', '')] = attr.value
        }
    }

    // дожидаемся ответа с сервера

    let data = fetch("/basket/" + action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    // получаем ответ с сервера {"add": "{id}"} или {"delete": "{id}"} или {"delete_one": "{id}"}
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data
    })
    .catch((error) => {
        console.error("Error:", error);
    })

    let card_num = elem.parentElement.querySelector('.card-num');
    let card = elem.parentElement.parentElement.parentElement;
    if (action=='add_to_basket') {
        card_num.innerText = card_num.innerText*1 + 1

    }
    else if (action=='delete_from_basket') {
        card.remove();
    }
    else if (action=='delete_one') {
        card_num.innerText = card_num.innerText*1 - 1
    }

}

function checkedAll() {
    if (document.getElementById("select-all").checked) {
        document.getElementById("select-all").checked = true;
        $('.check-with-label').prop('checked', true);
    } else {
        document.getElementById("select-all").checked = false;
        $('.check-with-label').prop('checked', false);
    }
}

document.getElementById("select-all").click()

function checkedOne() {
    if ($('.check-with-label').is(':checked')) {
        if (document.getElementById("select-all").checked) {
            document.getElementById("select-all").checked = true;
        } else {
            document.getElementById("select-all").checked = false;
        }

    } else {
        document.getElementById("select-all").checked = false;
    }
}

function createOrder(elem) {
    // Получить из addToBasketBtn value и записать в переменную id
    let requestData = {};

    for (let attr of elem.attributes){
    // список ['class', 'id', 'onclick'] под названием notData
        if (!notData.includes(attr.name)){
            requestData[attr.name.replace('data-', '')] = attr.value
        }
    }


    var items = {};
    $('.card').each(function () {
        

    })
    requestData['items'] = items


    // дожидаемся ответа с сервера

    let data = fetch("/orders/create_order/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        // перенаправить на страницу с заказами

        window.location.href = "/orders/"
        return data
    })
    .catch((error) => {
        console.error("Error:", error);
    })


}