//lvl116
let total = {}
let edit = ''
function bothVersions(a){
    total = {}
    for(let i of a){
        edit = '\'' + i + '\''
        total[edit] = i.toUpperCase()
    }
    return total
}
console.log(bothVersions(['p', 'i'])) //{'p': 'P', 'i': 'I'}
//lvl117
function pages(a){
    return Math.min.apply(null, Object.values(a))
}
console.log(pages({
    'cyan': 20,
    'red': 40,
    'yellow': 10
})) //10
//lvl118
let numArr = []
let str = []
function resort(a){
    total = []
    total[0] = []
    numArr = []
    str = []
    for(let i of Object.keys(a)){
        total[0].push(i)
    }
    total[0].sort()
    total[1] = []
    for(let i of Object.values(a)){
        if(typeof i == 'number'){
            numArr.push(i)
        }else{
            str.push(i)
        }
    }
    str.sort()
    numArr.sort((a, b) => a-b)
    for(let i of str){
        total[1].push(i)
    }
    for(let i of numArr){
        total[1].push(i)
    }
    return total
}
console.log(resort({a: 2, b: 'e', c: 10, d: 'z'})) //[['a', 'b', 'c', 'd'], ['e', 'z', 2, 10]]
//lvl119
function compareObjects(a, b){
    total = true
    for(let i in Object.keys(a)){
        if(Object.keys(a)[i] !== Object.keys(b)[i]){
            total = false
        }
    }
    for(let i in Object.values(a)){
        if(Object.values(a)[i] !== Object.values(b)[i]){
            total = false
        }
    }
    return total
}
console.log(compareObjects({a: 2, b: 3}, {a: 2, d: 3})) //false
console.log(compareObjects({a: 2, b: 3}, {a: 2, b: 3})) //true
//lvl120
function expensiveOrders(orders, cost){
    total = {}
    for(let i in orders){
        if(cost < orders[i]){
            total[i] = orders[i]
        }
    }
    return total
}
console.log(expensiveOrders({
    milk: 3,
    bread: 1,
    tv: 500
}, 2)) //{milk: 3, tv: 500}
//Тесты
// 1)
//какие типы встроенных всплывающих окон в js вы знаете?
//alert(), confirm(), prompt()

// 2)
//выведите всплывающее окно с предупреждением 'Осторожно'
//alert('Остoрожно!')

// 3)
//выведите всплывающее окно с кнопками подтверждения и отмены
// let a = confirm('All your data will be cleaned.')

// 4)
//выведите всплывающее окно с вопросом и возможностью записать ответ
// let a = prompt('Enter your age.')

// 5)
//какое временное событие выполняется после ожидания указанного количества миллисекунд?
//setTimeOut()

// 6)
//какое временное событие непрерывно повторяет выполнение функции?
//setInterval()

// 7)
//выведите в консоли сообщение 'НАЧАЛО' с помощью setTimeout
setTimeout(() => {
    console.log('Начало')
}, 1)

// 8)
//выведите в консоли сообщение 'ПОВТОР' с помощью setInterval каждые 2 секунды
setInterval(() => {
    console.log('Повтор')
}, 2000)

// 9)
//что такое куки?
//Это данные, которые хранятся в вашем компьютере в небольших текстовых файлах.

// 10)
//как создать куки файл?
//С помощью document.cookie() = 

// 11)
//как изменить ранее записанный куки?
//С помощью document.cookie() =

// 12)
//как удалить ранее записанный куки?
//Указать в expires уже прошедшую дату.
// document.cookie = "username=John Dno; path=/;"
// document.cookie = "username=Turgut; expires=Wed, 19 Jul 2023 23:59:59 UTC;"