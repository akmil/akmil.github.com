/**
 * Created by Pavlo_Oliinyk1 on 2/3/2016.
 *
 Мотиви
 Програма повинна забезпечувати різні варіанти алгоритму або поведінки
 Потрібно змінювати поведінку кожного екземпляра класу
 Необхідно змінювати поведінку об'єктів на стадії виконання
 Введення інтерфейсу дозволяє класам-клієнтам нічого не знати про класи, що реалізують цей інтерфейс і інкапсулюють в собі конкретні алгоритми

 Спосіб вирішення
 Відділення процедури вибору алгоритму від його реалізації. Це дозволяє зробити вибір на підставі контексту.

 Учасники
 -Клас Strategy визначає, як будуть використовуватися різні алгоритми.
 -Конкретні класи ConcreteStrategy реалізують ці різні алгоритми.
 -Клас Context використовує конкретні класи ConcreteStrategy за допомогою посилання на конкретний тип абстрактного класу Strategy .
 Класи Strategy і Context взаємодіють з метою реалізації обраного алгоритму (в деяких випадках класу Strategy потрібно посилати запити класу Context ).
 -Клас Context пересилає класу Strategy запит, що надійшов від його класу-клієнта.

 Наслідки
 Шаблон Strategy визначає сімейство алгоритмів.
 Це дозволяє відмовитися від використання перемикачів і / або умовних операторів.
 Виклик всіх алгоритмів повинен здійснюватися стандартним чином (всі вони повинні мати однаковий інтерфейс).
 */
var Strategy = {
    zIndex : 0, //default
    showLayer: function(selectedImgElem){
        console.log("abstract showLayerAbove");
        return "abstract showLayerAbove";
    }
};

var Bottom = Object.create(Strategy);
    Bottom.showLayer = function(selectedImgElem){
        if (!selectedImgElem ) { alert('select some image'); return;}
        this.zIndex--;
        selectedImgElem.style.zIndex = this.zIndex;
        return "Bottom class showLayerAbove" + this.zIndex + selectedImgElem;
    };

var Top = Object.create(Strategy);
    Top.showLayer = function(selectedImgElem){
        if (!selectedImgElem ) { alert('select some image'); return;}
        this.zIndex++;
        selectedImgElem.style.zIndex = this.zIndex;
        return "Bottom showLayerBottom" + this.zIndex + selectedImgElem;
    };

var Caller = function(Strategy){
  this.callStrategy = function(selectedImgElem){
      Strategy.showLayer(selectedImgElem);
  }
};

/**
 * @param grouopName
 * @returns {*}
 */
var wrapper = document.getElementsByClassName("show-layers");
var imgList = document.getElementsByTagName("img");
var selectedImgElem;

function getRadioGroup(grouopName) {
    var i, radios = document.getElementsByName(grouopName);

    //clear class border
    for (i = 0; i < imgList.length; i++) {
        imgList[i].className = "";
    }

    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            //console.log('selected value  : '+radios[i].value );
            selectedImgElem = document.getElementById(radios[i].value);
            selectedImgElem.className = 'active';
            console.log('actimeElement: ' + selectedImgElem.className + 'radios[i].value '+ radios[i].value );
            return radios[i].value;
        }
    }
    return '';
}


/* add onclick buttons */
var btnTop = document.getElementById("set-top");
var btnBottom = document.getElementById("set-bottom");

btnTop.addEventListener("click", function(){
    var showTop = new Caller( Top );
    showTop.callStrategy(selectedImgElem);
    console.log(Top );
});

btnBottom.addEventListener("click", function(){
    var showBottom = new Caller( Bottom );
    showBottom.callStrategy(selectedImgElem);
    console.log( Bottom );
});
