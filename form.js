

const form = document.getElementById('form');

function retrieveFormValue(event) {
        event.preventDefault();

const   id = form.querySelector('[name="plan"]'),
        lenX = form.querySelector('[name="number"]'),
        lenY = form.querySelector('[name="number1"]'),
        pLenX = form.querySelector('[name="number2"]'),
        pLenY = form.querySelector('[name="number3"]'),
        x2 = form.querySelector('[name="terms"]'),
        stepProfile = form.querySelector('[name="terms1"]'),
        perimetrVrst = form.querySelector('[name="terms4"]'),
        extensionL = form.querySelector('[name="number4"]')

const values = {
        id:id.value,
        lenX:"длина конструкции: " + lenX.value + " мм",
        lenY:"ширина конструкции: " + lenY.value + " мм",
        pLenX:"длина проема: " + pLenX.value + " мм",
        pLenY:"ширина проема: " + pLenY.value + " мм",
        x2: "сдвоенный профиль: " + x2.value,
        stepProfile:"шаг профиля: " + stepProfile.value + " мм",
        perimetrVrst:"материал периметра пола: " + perimetrVrst.value,
        extensionL: extensionL.value
    };

        console.log(values);

let valuesJson = JSON.stringify(values);
        console.log(valuesJson);
    // console.log(values.number);                                  //**вывод в таблицу */
    // for (key in values) {
    //     console.log(values[key]);
    // }
    
    // document.querySelector('.content').innerHTML = `<table  id="tab" class="data"></table>`
    // for (key in values ) {
    // let row = document.createElement('th');
    // row.innerHTML = `<th >${key}</th>
    //                  <th >${values[key]}</th>`;
    // document.querySelector('.data').appendChild(row);
    // console.log(row);}
    
function start(){
        let newStr = document.createElement(`section`);
        newStr.innerHTML = `<button id ="list"></button>`;   //**oneclick = "del();" */
        document.querySelector('.content').appendChild(newStr);

    for (key in values) {
        let newText = document.createElement(`ol`);
        newText.innerHTML = values[key];
        // console.log(values[key]);
        document.querySelector('.content').appendChild(newText);
        // delete values.perimetrVrst;                             //**удаление лишних пунктов меню */
    };

}
start();

let node = document.querySelector('.content');

let button = document.getElementById('list');
        button.addEventListener('click',del);

function del(){
    // node.querySelectorAll('*').forEach((n) => n.remove());     //*** 1 способ удаления*/
    // while(node.lastChild){
    // node.removeChild(node.lastChild);
    // }                                                          //**2 способ удаления */
    node.innerHTML = '';
}

}
form.addEventListener('submit',retrieveFormValue);


