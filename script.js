"use strict";

// 1
// Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
// расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.

// {
//     let Calculation = function () {
//         this.get = function () {
//             this.a = +prompt('Введите значение А')
//             this.b = +prompt('Ведите значение B')
//             this.oper = prompt('Ведите действие +,-,*,/')

//             this.action();
//         };
//         this.action = function () {
//             switch (this.oper) {
//                 case '+':
//                     this.result = this.a + this.b;
//                     break;
//                 case '-':
//                     this.result = this.a - this.b;
//                     break;
//                 case '*':
//                     this.result = this.a * this.b;
//                     break;
//                 case '/':
//                     this.result = this.a / this.b;
//                     break;
//                 default: this.result = alert('Вы ввели не верное действие'); 
//                          alert('Попробуйте ещё раз')
//                 Calk.get();
//             }
//             this.show();
//         };
//         this.show = function () {
//             alert(this.a + '  ' + this.oper + '  ' + this.b + '  ' + '=' + this.result);
//         }


//     }
//     let Calk = new Calculation();
//     Calk.get();
// }


// 2.
//  Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.


// let Bulb = function () {
//     this.question = function () {
//         this.a = confirm('Включить лампочку?');

//         this.ONOFF();
//     }

//     this.ONOFF = function () {
//         if (this.a == true) {
//             alert('Лампочка включена');
//             this.parameter();
//         }
//         else { NewBulb.question(); }
//     };

//     this.parameter = function () {
//         this.power = +prompt('Мощность лампочки');
//         this.hour = +prompt('Время горения в часах');
//         this.price == 22;

//         this.calc();

//     }

//     this.calc = function () {
//         this.result = (this.power/1000)* this.hour*22
//         alert('Сгорело электроэнергии на ' + this.result + " рублей" )
//     }


// };

// let NewBulb = new Bulb();
// NewBulb.question();

// 3
// Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

// Не делал , т.к эта задача идентична второй. 

// 4

// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.
// {


// Не могу понять почему обькт this.fierW = {}; и this.priceW = {}; не записываются. 


let Auto = function () {
    this.choice = function () {
        this.marka = prompt('Машина на которой вы поедите будет: BMW, FORD, OPEL');
        this.brend();
    }

    this.fierW = {};
    this.priceW = {};
        console.log(this.fierW);
   

    this.brend = function (){
        switch(this.marka)
        {
            case 'BMW':
                this.fierW.fier = 12;
                this.priceW.price = 0.12;
                document.write ('Вы выбрали '+ this.marka); 
                this.motor();
                break;
            case 'FORD':
                this.fierW.fier = 10;
                this.priceW.price = 0.1;
                document.write ('Вы выбрали '+ this.marka) ;
                this.motor();
                break;
            case 'OPEL': 
                this.fierW.fier = 8;
                this.priceW.price = 0.08;
                document.write ('Вы выбрали '+ this.marka);
                this.motor();
                break;
            default: 
               alert ('У нас нету такого авто');
            this.choice() ;
        };
    };

    this.motor = function () {
        this.start = confirm('Заводим двигатель?')
        if (this.start == true) {
            this.question();
        }
        else { this.choice() }
    };

    this.question = function(){
       this.way = prompt ('Сколько км проедите?')
       document.write ( "<br/>" + ' Вы проедите '+ this.way + ' км') 
       this.speed = prompt (' С какой скоростью поедем?')
       document.write ( "<br/>" + ' Вы поедите со скоростью '+ this.speed+' км/ч') 
       this.show();
    };


    this.show = function(){
        document.write("<br/>" + 'До места назначения вы добрались за ' + ((this.way/ this.speed*60).toFixed(2))+' минут')
        document.write("<br/>" + 'Вы заплатите '+(this.priceW.price*this.way)+' рублей')
        document.write("<br/>" + 'Вы сожгёте ' + ((((this.fierW.fier/this.way)*100).toFixed(2))  +' литров'))
    };
};

let newauto = new Auto();
newauto.choice();








