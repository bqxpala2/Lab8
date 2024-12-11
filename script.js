// Задание 1
// Создаем символьные свойства
const accountType = Symbol('тип счета');
const specialization = Symbol('специализация');
const citizenship = Symbol('гражданство');

// Создаем объект "Клиент банка"
const bankClient = {
    Имя: 'Маркарян Артур Артурович',
    Возраст: 20,
    Номер_карты: '2200 1234 5678 9012',
    [accountType]: 'Дебетовый',
    Баланс: 150000
};

// Создаем объект "Работник клиники"
const clinicEmployee = {
    Имя: 'Петрова Юлия Алексеевна',
    Возраст: 43,
    Должность: 'Врач',
    [specialization]: 'Терапевт',
    Опыт: 5
};

// Создаем объект "Гражданин РФ"
const citizen = {
    Имя: 'Андреев Андрей Андреевич',
    Возраст: 23,
    Номер_паспорта: '4619 730793',
    [citizenship]: 'РФ',
    Место_рождения: 'Екатеринбург'
};

// Функция для отображения свойств объекта
function displayObjectProperties(object, containerId) {
    const container = document.querySelector(`#${containerId} .properties`);
    
    for (let prop in object) {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <span class="property-name">${prop}:</span>
            <span class="property-value">${object[prop]}</span>
        `;
        container.appendChild(propertyDiv);
    }

    // Отображаем символьные свойства
    const symbols = Object.getOwnPropertySymbols(object);
    symbols.forEach(symbol => {
        const propertyDiv = document.createElement('div');
        propertyDiv.className = 'property';
        propertyDiv.innerHTML = `
            <span class="property-name">${symbol.description}:</span>
            <span class="property-value">${object[symbol]}</span>
        `;
        container.appendChild(propertyDiv);
    });
}

// Отображаем свойства всех объектов
displayObjectProperties(bankClient, 'bankClient');
displayObjectProperties(clinicEmployee, 'clinicEmployee');
displayObjectProperties(citizen, 'citizen');


// Задание 2
function checkNumber() {
    const number = +prompt('Загадайте цифру до 9', '');

    switch (number) {
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
            alert('Вы ввели число 2');
            break;
        case 3:
            alert('Вы ввели число 3');
            break;
        case 4:
            alert('Вы ввели число 4');
            break;
        case 5:
            alert('Вы ввели число 5');
            break;
        case 6:
            alert('Вы ввели число 6');
            break;
        case 7:
            alert('Вы ввели число 7');
            break;
        case 8:
        case 9:
            alert('Вы ввели число 8, а может и 9');
            break;
        default:
            alert('Вы ввели неверное число');
    }
}
// Задание 3
function checkQuarter() {
    const min = +prompt('Введите число от 0 до 59', '');
    
    // Определяем четверть часа через целочисленное деление
    const quarter = Math.floor(min / 15);
    
    switch (quarter) {
        case 0:
            alert('Число ' + min + ' попадает в первую четверть часа (0-14 минут)');
            break;
        case 1:
            alert('Число ' + min + ' попадает во вторую четверть часа (15-29 минут)');
            break;
        case 2:
            alert('Число ' + min + ' попадает в третью четверть часа (30-44 минут)');
            break;
        case 3:
            alert('Число ' + min + ' попадает в четвертую четверть часа (45-59 минут)');
            break;
        default:
            alert('Введите число от 0 до 59!');
    }
}

// Задание 4
function checkString() {
    const str = document.getElementById('numberString').value;
    const phoneNumber = '89118257890'; // Ваш номер телефона
    
    // Проверяем первый символ
    const firstChar = str.charAt(0);
    switch (firstChar) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '9':
            alert('Телефонный номер начинается не с 8');
            break;
        default:
            alert('нет');
    }
    
    // Проверяем наличие номера телефона
    if (str.includes(phoneNumber)) {
        alert('Строка содержит ваш номер телефона');
    } else {
        alert('Строка не содержит ваш номер телефона');
    }
}
