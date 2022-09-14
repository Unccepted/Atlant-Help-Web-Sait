let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
//addEventListener for two button
btn1.addEventListener("click", ShowChildNeeds);
btn2.addEventListener("click", ShowSoldierNeeds);
//find changingPart
let chPart = document.querySelector(".changingPart");
//soldier array
let arr = ['Тактична форма горка - 4 комплекти;', 'Наколінники, налокітники – 4 комплекти;', 'Балістичні кевларові шоломи – 4 шт.', 'Плитоноски – 4 шт.;', 'Розгрузки – 4 шт.;', 'Тактичні окуляри – 4 шт.;', 'Тактичні рукавиці – 4 пари;', 'Ремені тактичні для автомата – 4 шт.;']
let arrChild = ['Дитячих памперсів різних розмірів;', 'Дитячого харчування;']

// Write list of need of soldier
function ShowSoldierNeeds() {
    chPart.innerHTML = "";
    let topic = document.createElement("h3");
    topic.innerHTML = "Збір коштів для придбання амуніції бійцям 81-ї окремої аеромобільної десантно-штурмової бригади ЗСУ:";
    chPart.appendChild(topic);

    let flexDiv = document.createElement('div');
    flexDiv.setAttribute("class", 'row');
    chPart.appendChild(flexDiv);

    let ul = document.createElement('ul');
    ul.style.width = '50%';
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += '<li>' + arr[i] + '</li>';
    }

    flexDiv.appendChild(ul);
    let imgIcon = document.createElement('img');
    imgIcon.setAttribute('id', 'solderImg');
    imgIcon.setAttribute('src', '/images/Soldier-1.png');
    imgIcon.style.height = "200px";
    imgIcon.style.margin = "auto";

    flexDiv.appendChild(imgIcon);

    let pText = document.createElement('p');
    pText.innerHTML += '<strong>' + 'Загальна сума вищевказаної амуніції становить близько 105400 грн.' + '</strong>';
    chPart.appendChild(pText);
}

function ShowChildNeeds() {
    chPart.innerHTML = "";
    let topic = document.createElement("h3");
    topic.innerHTML = "Просимо Вас, надати гуманітарну допомогу в якості:";
    chPart.appendChild(topic);

    let flexDiv = document.createElement('div');
    flexDiv.setAttribute("class", 'row');
    chPart.appendChild(flexDiv);

    let ulDiv = document.createElement('div');
    ulDiv.setAttribute('class', ' leftPart');
    //need to check size of sreen to set correct width for div
    /*    if (Window.width < 768) {
            ulDiv.style.width = '50%';
        }
        else ulDiv.style.width = '100%';*/
    let ul = document.createElement('ul');
    for (let i = 0; i < arrChild.length; i++) {
        ul.innerHTML += '<li>' + arrChild[i] + '</li>';
    }

    ulDiv.appendChild(ul);
    flexDiv.appendChild(ulDiv);
    let imgIcon = document.createElement('img');
    imgIcon.setAttribute('id', 'solderImg');
    imgIcon.setAttribute('src', '/images/childrenIcon.png');
    imgIcon.style.height = "200px";
    imgIcon.style.marginLeft = "auto";
    imgIcon.style.marginRight = "auto";
    flexDiv.appendChild(imgIcon);

    let pText = document.createElement('p');
    pText.innerHTML += ' Для дітей які вимушено переселенні з зони бойових дій, дітям інвалідам, дітям, сім’ї яких опинились у складних життєвих обставинах.' + '<strong>' + ' Діти дуже потребують цієї допомоги, так як вони позбавленні можливості у придбанні вищевказаних речей у зв’язку з війною на території України.' + '</strong>';
    ulDiv.appendChild(pText);

}
