// Глобальные переменные
let codeEditor = null;
let prettierPlugins = [];

// Данные курса
const courseData = [
    {
        id: 'basics',
        title: 'Основы JavaScript',
        lessons: [
            {
                title: 'Введение в JavaScript',
                content: `
                    <h3>Введение в JavaScript</h3>
                    <p>JavaScript - это язык программирования, который делает веб-страницы интерактивными. Представьте, что HTML - это скелет страницы, CSS - её внешний вид, а JavaScript - это мышцы, которые позволяют странице двигаться и реагировать на действия пользователя.</p>
                    
                    <div class="note">
                        <p><strong>Важно:</strong> JavaScript не имеет ничего общего с Java, несмотря на схожесть названий. Это совершенно разные языки программирования.</p>
                    </div>

                    <h4>Что можно делать с помощью JavaScript:</h4>
                    <ul>
                        <li>Создавать интерактивные элементы на странице (кнопки, формы, меню)</li>
                        <li>Проверять правильность заполнения форм (например, проверка email)</li>
                        <li>Добавлять анимации и эффекты</li>
                        <li>Создавать слайдеры изображений</li>
                        <li>Делать всплывающие окна и уведомления</li>
                        <li>Работать с данными на странице</li>
                    </ul>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Давайте создадим простую страницу с JavaScript:</p>
                        <ol>
                            <li>Создайте HTML файл с кнопкой</li>
                            <li>Добавьте JavaScript код, который будет выводить приветствие при нажатии на кнопку</li>
                            <li>Добавьте возможность изменения цвета фона страницы</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку на странице по селектору
    // querySelector возвращает первый найденный элемент
    const button = document.querySelector('button');
    
    // Добавляем обработчик события клика на кнопку
    // Функция будет вызвана при каждом клике
    button.addEventListener('click', function() {
        // Выводим приветствие в модальном окне
        // alert - встроенная функция браузера
        alert('Привет, мир!');
        
        // Меняем цвет фона всей страницы
        // document.body - корневой элемент страницы
        // style.backgroundColor - свойство для изменения цвета фона
        document.body.style.backgroundColor = '#f0f0f0';
    });
});</code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: 'Переменные и типы данных',
                content: `
                    <h3>Переменные и типы данных</h3>
                    <p>Переменные - это как коробки, в которых мы храним информацию. В JavaScript есть три способа создать переменную:</p>
                    
                    <table>
                        <tr>
                            <th>Ключевое слово</th>
                            <th>Описание</th>
                            <th>Пример</th>
                        </tr>
                        <tr>
                            <td><code>var</code></td>
                            <td>Старый способ (не рекомендуется)</td>
                            <td><code>var x = 10;</code></td>
                        </tr>
                        <tr>
                            <td><code>let</code></td>
                            <td>Для переменных, которые могут изменяться</td>
                            <td><code>let name = 'Иван';</code></td>
                        </tr>
                        <tr>
                            <td><code>const</code></td>
                            <td>Для констант (неизменяемых значений)</td>
                            <td><code>const PI = 3.14;</code></td>
                        </tr>
                    </table>

                    <div class="note">
                        <p><strong>Совет:</strong> Всегда используйте <code>const</code> по умолчанию, и только если значение должно изменяться, используйте <code>let</code>.</p>
                    </div>

                    <h4>Основные типы данных:</h4>
                    <ul>
                        <li><strong>Числа (Number):</strong> целые и дробные числа
                            <ul>
                                <li><code>let age = 25;</code></li>
                                <li><code>let price = 99.99;</code></li>
                            </ul>
                        </li>
                        <li><strong>Строки (String):</strong> текст в кавычках
                            <ul>
                                <li><code>let name = 'Иван';</code></li>
                                <li><code>let message = "Привет!";</code></li>
                            </ul>
                        </li>
                        <li><strong>Логические значения (Boolean):</strong> true или false
                            <ul>
                                <li><code>let isStudent = true;</code></li>
                                <li><code>let isWorking = false;</code></li>
                            </ul>
                        </li>
                    </ul>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте переменные для хранения:</p>
                        <ol>
                            <li>Вашего имени (константа)</li>
                            <li>Вашего возраста (переменная)</li>
                            <li>Вашего статуса студента (булево значение)</li>
                            <li>Списка ваших любимых цветов (массив)</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
// Объявление константы для имени
// const используется для значений, которые не будут меняться
const name = 'Иван';

// Объявление переменной для возраста
// let используется для значений, которые могут измениться
let age = 25;

// Объявление константы для статуса студента
// Boolean (логический) тип данных
const isStudent = true;

// Объявление константы для массива цветов
// Массив - упорядоченный набор элементов
const favoriteColors = ['синий', 'зеленый', 'красный'];

// Вывод значений в консоль браузера
// console.log() - функция для отладки и вывода информации
console.log('Имя:', name);        // Выведет: Имя: Иван
console.log('Возраст:', age);     // Выведет: Возраст: 25
console.log('Студент:', isStudent); // Выведет: Студент: true
console.log('Любимые цвета:', favoriteColors); // Выведет массив цветов</code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: 'Операторы и выражения',
                content: `
                    <h3>Операторы и выражения</h3>
                    <p>Операторы - это специальные символы, которые позволяют выполнять различные операции с данными.</p>

                    <h4>Арифметические операторы:</h4>
                    <table>
                        <tr>
                            <th>Оператор</th>
                            <th>Описание</th>
                            <th>Пример</th>
                        </tr>
                        <tr>
                            <td><code>+</code></td>
                            <td>Сложение</td>
                            <td><code>5 + 3</code></td>
                        </tr>
                        <tr>
                            <td><code>-</code></td>
                            <td>Вычитание</td>
                            <td><code>10 - 4</code></td>
                        </tr>
                        <tr>
                            <td><code>*</code></td>
                            <td>Умножение</td>
                            <td><code>2 * 3</code></td>
                        </tr>
                        <tr>
                            <td><code>/</code></td>
                            <td>Деление</td>
                            <td><code>10 / 2</code></td>
                        </tr>
                    </table>

                    <h4>Операторы сравнения:</h4>
                    <table>
                        <tr>
                            <th>Оператор</th>
                            <th>Описание</th>
                            <th>Пример</th>
                        </tr>
                        <tr>
                            <td><code>===</code></td>
                            <td>Равно</td>
                            <td><code>5 === 5</code></td>
                        </tr>
                        <tr>
                            <td><code>!==</code></td>
                            <td>Не равно</td>
                            <td><code>5 !== 3</code></td>
                        </tr>
                        <tr>
                            <td><code>></code></td>
                            <td>Больше</td>
                            <td><code>10 > 5</code></td>
                        </tr>
                        <tr>
                            <td><code><</code></td>
                            <td>Меньше</td>
                            <td><code>3 < 5</code></td>
                            <td><code>true</code></td>
                        </tr>
                    </table>

                    <div class="note">
                        <p><strong>Важно:</strong> Всегда используйте строгое сравнение (<code>===</code> и <code>!=</code>) вместо нестрогого (<code>==</code> и <code>!=</code>). Это поможет избежать неожиданных ошибок.</p>
                    </div>

                    <h4>Логические операторы:</h4>
                    <p>Эти операторы позволяют комбинировать условия:</p>
                    <table>
                        <tr>
                            <th>Оператор</th>
                            <th>Описание</th>
                            <th>Пример</th>
                            <th>Результат</th>
                        </tr>
                        <tr>
                            <td><code>&&</code></td>
                            <td>И (AND)</td>
                            <td><code>true && false</code></td>
                            <td><code>false</code></td>
                        </tr>
                        <tr>
                            <td><code>||</code></td>
                            <td>ИЛИ (OR)</td>
                            <td><code>true || false</code></td>
                            <td><code>true</code></td>
                        </tr>
                        <tr>
                            <td><code>!</code></td>
                            <td>НЕ (NOT)</td>
                            <td><code>!true</code></td>
                            <td><code>false</code></td>
                        </tr>
                    </table>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте программу, которая:</p>
                        <ol>
                            <li>Запрашивает у пользователя два числа</li>
                            <li>Выводит результат всех арифметических операций</li>
                            <li>Сравнивает числа и выводит результат сравнения</li>
                            <li>Проверяет, является ли первое число четным и больше ли оно второго числа</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
// Запрос ввода чисел у пользователя
// prompt() - встроенная функция для ввода данных
// Number() - преобразование строки в число
const num1 = Number(prompt('Введите первое число:'));
const num2 = Number(prompt('Введите второе число:'));

// Арифметические операции
// + - сложение
console.log('Сложение:', num1 + num2);
// - - вычитание
console.log('Вычитание:', num1 - num2);
// * - умножение
console.log('Умножение:', num1 * num2);
// / - деление
console.log('Деление:', num1 / num2);
// % - остаток от деления
console.log('Остаток от деления:', num1 % num2);

// Операторы сравнения
// > - больше
console.log('Первое число больше второго:', num1 > num2);
// === - строгое равенство
console.log('Числа равны:', num1 === num2);

// Комбинированное условие
// % - остаток от деления, === 0 - проверка на четность
const isEven = num1 % 2 === 0;
// > - проверка на больше
const isGreater = num1 > num2;
// && - логическое И
console.log('Первое число четное и больше второго:', isEven && isGreater);</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> При работе с операторами помните о приоритете операций. Если сомневаетесь, используйте скобки для явного указания порядка выполнения операций.</p>
                    </div>

                    <div class="code-example">
                        <pre><code>// Пример решения
// Объявление переменных для чисел
// let используется для значений, которые могут измениться
let a = 10;
let b = 5;

// Арифметические операции
// + - сложение
console.log('Сложение:', a + b);      // Выведет: 15
// - - вычитание
console.log('Вычитание:', a - b);     // Выведет: 5
// * - умножение
console.log('Умножение:', a * b);     // Выведет: 50
// / - деление
console.log('Деление:', a / b);       // Выведет: 2
// % - остаток от деления
console.log('Остаток от деления:', a % b); // Выведет: 0

// Операторы присваивания
// += - сложение с присваиванием
a += 5;  // Эквивалентно a = a + 5
console.log('a после +=:', a);        // Выведет: 15

// -= - вычитание с присваиванием
b -= 2;  // Эквивалентно b = b - 2
console.log('b после -=:', b);        // Выведет: 3

// *= - умножение с присваиванием
a *= 2;  // Эквивалентно a = a * 2
console.log('a после *=:', a);        // Выведет: 30

// /= - деление с присваиванием
b /= 3;  // Эквивалентно b = b / 3
console.log('b после /=:', b);        // Выведет: 1</code></pre>
                    </div>

                    <div class="code-example">
                        <pre><code>// Пример решения
// Объявление переменных для сравнения
const x = 10;
const y = 20;

// Операторы сравнения
// > - больше
console.log('x больше y:', x > y);    // Выведет: false
// < - меньше
console.log('x меньше y:', x < y);    // Выведет: true
// >= - больше или равно
console.log('x больше или равно y:', x >= y); // Выведет: false
// <= - меньше или равно
console.log('x меньше или равно y:', x <= y); // Выведет: true

// Операторы равенства
// == - нестрогое равенство (с приведением типов)
console.log('x равно y (нестрого):', x == y); // Выведет: false
// === - строгое равенство (без приведения типов)
console.log('x равно y (строго):', x === y);  // Выведет: false

// Логические операторы
// && - логическое И
console.log('x > 5 И y > 15:', x > 5 && y > 15); // Выведет: true
// || - логическое ИЛИ
console.log('x > 15 ИЛИ y > 15:', x > 15 || y > 15); // Выведет: true
// ! - логическое НЕ
console.log('НЕ (x > y):', !(x > y)); // Выведет: true</code></pre>
                    </div>
                `
            },
            {
                title: 'Условные операторы и циклы',
                content: `
                    <h3>Условные операторы и циклы</h3>
                    <p>Условные операторы и циклы - это как дорожные знаки и круговые развязки в программировании. Они помогают нам принимать решения и повторять действия в зависимости от условий.</p>
                    
                    <h4>Условные операторы:</h4>
                    <div class="code-example">
                        <pre><code>// 1. if-else
const age = 18;
if (age >= 18) {
    console.log('Вы совершеннолетний');
} else {
    console.log('Вы несовершеннолетний');
}

// 2. else-if
const grade = 85;
if (grade >= 90) {
    console.log('Отлично!');
} else if (grade >= 70) {
    console.log('Хорошо!');
} else if (grade >= 50) {
    console.log('Удовлетворительно');
} else {
    console.log('Неудовлетворительно');
}

// 3. Тернарный оператор
const isAdult = age >= 18 ? 'Да' : 'Нет';
console.log(\`Совершеннолетний: \${isAdult}\`);

// 4. switch-case
const day = 'понедельник';
switch (day) {
    case 'понедельник':
        console.log('Начало недели');
        break;
    case 'пятница':
        console.log('Конец рабочей недели');
        break;
    case 'суббота':
    case 'воскресенье':
        console.log('Выходной день');
        break;
    default:
        console.log('Обычный рабочий день');
}</code></pre>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> Используйте тернарный оператор для простых условий, а if-else для более сложных. Switch-case удобен, когда нужно проверить много вариантов одного значения.</p>
                    </div>

                    <h4>Циклы:</h4>
                    <div class="code-example">
                        <pre><code>// 1. for - когда известно количество итераций
for (let i = 0; i < 5; i++) {
    console.log(\`Итерация \${i}\`);
}

// 2. while - когда условие может быть неизвестно заранее
let count = 0;
while (count < 5) {
    console.log(\`Счетчик: \${count}\`);
    count++;
}

// 3. do-while - когда нужно выполнить код хотя бы один раз
let number;
do {
    number = Math.floor(Math.random() * 10);
    console.log(\`Случайное число: \${number}\`);
} while (number !== 5);

// 4. for...of - для перебора элементов массива
const fruits = ['яблоко', 'банан', 'апельсин'];
for (const fruit of fruits) {
    console.log(fruit);
}

// 5. for...in - для перебора свойств объекта
const person = {
    name: 'Иван',
    age: 25,
    city: 'Москва'
};
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}</code></pre>
                    </div>

                    <h4>Управление циклами:</h4>
                    <div class="code-example">
                        <pre><code>// break - прерывает выполнение цикла
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // цикл остановится на 5
    }
    console.log(i);
}

// continue - пропускает текущую итерацию
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // пропустит четные числа
    }
    console.log(i); // выведет только нечетные
}

// Метки для вложенных циклов
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outer; // прервет оба цикла
        }
        console.log(\`i=\${i}, j=\${j}\`);
    }
}</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте программу для управления банковским счетом:</p>
                        <ol>
                            <li>Создайте объект счета с начальным балансом</li>
                            <li>Добавьте функции для:
                                <ul>
                                    <li>Пополнения счета</li>
                                    <li>Снятия денег (с проверкой достаточности средств)</li>
                                    <li>Проверки баланса</li>
                                    <li>Вывода истории операций</li>
                                </ul>
                            </li>
                            <li>Реализуйте меню с возможностью выбора операций</li>
                            <li>Добавьте проверку корректности вводимых данных</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
const account = {
    balance: 1000,
    history: [],
    
    deposit(amount) {
        if (amount <= 0) {
            console.log('Сумма должна быть положительной');
            return;
        }
        this.balance += amount;
        this.history.push({
            type: 'deposit',
            amount,
            date: new Date()
        });
        console.log(\`Счет пополнен на \${amount}\`);
    },
    
    withdraw(amount) {
        if (amount <= 0) {
            console.log('Сумма должна быть положительной');
            return;
        }
        if (amount > this.balance) {
            console.log('Недостаточно средств');
            return;
        }
        this.balance -= amount;
        this.history.push({
            type: 'withdraw',
            amount,
            date: new Date()
        });
        console.log(\`Снято \${amount}\`);
    },
    
    getBalance() {
        return this.balance;
    },
    
    getHistory() {
        return this.history;
    }
};

// Меню
function showMenu() {
    console.log('1. Проверить баланс');
    console.log('2. Пополнить счет');
    console.log('3. Снять деньги');
    console.log('4. История операций');
    console.log('5. Выход');
}

// Основной цикл программы
let choice;
do {
    showMenu();
    choice = prompt('Выберите операцию:');
    
    switch (choice) {
        case '1':
            console.log(\`Баланс: \${account.getBalance()}\`);
            break;
        case '2':
            const depositAmount = Number(prompt('Введите сумму для пополнения:'));
            account.deposit(depositAmount);
            break;
        case '3':
            const withdrawAmount = Number(prompt('Введите сумму для снятия:'));
            account.withdraw(withdrawAmount);
            break;
        case '4':
            console.log('История операций:');
            account.getHistory().forEach(op => {
                console.log(\`\${op.type}: \${op.amount} (\${op.date})\`);
            });
            break;
        case '5':
            console.log('До свидания!');
            break;
        default:
            console.log('Неверный выбор');
    }
} while (choice !== '5');</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> При работе с циклами всегда проверяйте условие выхода, чтобы избежать бесконечных циклов. Используйте break и continue осторожно, чтобы не сделать код слишком сложным для понимания.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 'functions',
        title: 'Функции',
        lessons: [
            {
                title: 'Объявление и вызов функций',
                content: `
                    <h3>Объявление и вызов функций</h3>
                    <p>Функции в JavaScript - это как маленькие программы внутри вашей программы. Они позволяют выполнять один и тот же код несколько раз без его повторения. Представьте, что функция - это рецепт, который вы можете использовать снова и снова, просто меняя ингредиенты.</p>
                    
                    <h4>Способы создания функций:</h4>
                    <div class="code-example">
                        <pre><code>// 1. Обычная функция (Function Declaration)
function sayHello(name) {
    return 'Привет, ' + name + '!';
}

// 2. Функция-выражение (Function Expression)
const sayHello = function(name) {
    return 'Привет, ' + name + '!';
};

// 3. Стрелочная функция (Arrow Function)
const sayHello = (name) => {
    return 'Привет, ' + name + '!';
};

// 4. Сокращенная стрелочная функция
const sayHello = name => 'Привет, ' + name + '!';</code></pre>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> Используйте стрелочные функции для более короткого и читаемого кода. Они особенно удобны для коротких функций и колбэков.</p>
                    </div>

                    <h4>Параметры и аргументы:</h4>
                    <p>Параметры - это переменные, которые функция ожидает получить при вызове. Аргументы - это значения, которые мы передаем функции при её вызове.</p>
                    <div class="code-example">
                        <pre><code>// Функция с параметрами
function calculateSum(a, b) {
    return a + b;
}

// Вызов функции с аргументами
const result = calculateSum(5, 3);
console.log(result); // Выведет: 8</code></pre>
                    </div>

                    <h4>Возвращаемые значения:</h4>
                    <p>Функции могут возвращать значения с помощью оператора <code>return</code>. Если <code>return</code> не указан, функция вернет <code>undefined</code>.</p>
                    <div class="code-example">
                        <pre><code>// Функция с возвращаемым значением
function isEven(number) {
    return number % 2 === 0;
}

// Функция без возвращаемого значения
function logMessage(message) {
    console.log(message);
    // Неявно возвращает undefined
}</code></pre>
                    </div>

                    <h4>Область видимости:</h4>
                    <p>Переменные, объявленные внутри функции, видны только внутри этой функции. Это называется локальной областью видимости.</p>
                    <div class="code-example">
                        <pre><code>function example() {
    const localVar = 'Я виден только внутри функции';
    console.log(localVar);
}

example();
console.log(localVar); // Ошибка! Переменная не определена</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте следующие функции:</p>
                        <ol>
                            <li>Функцию, которая приветствует пользователя по имени и возрасту</li>
                            <li>Функцию, которая проверяет, является ли число простым</li>
                            <li>Функцию, которая вычисляет факториал числа</li>
                            <li>Функцию, которая конвертирует температуру из Цельсия в Фаренгейт</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
// 1. Функция приветствия
const greet = (name, age) => {
    return \`Привет, \${name}! Тебе \${age} лет.\`;
};

// 2. Функция проверки простого числа
const isPrime = number => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
};

// 3. Функция вычисления факториала
const factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

// 4. Функция конвертации температуры
const celsiusToFahrenheit = celsius => {
    return (celsius * 9/5) + 32;
};

// Использование функций
console.log(greet('Иван', 25));
console.log('7 простое число?', isPrime(7));
console.log('Факториал 5:', factorial(5));
console.log('25°C =', celsiusToFahrenheit(25), '°F');</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> Старайтесь делать функции небольшими и выполняющими одну конкретную задачу. Это улучшает читаемость кода и упрощает его поддержку.</p>
                    </div>
                `
            },
            {
                title: 'Параметры функций',
                content: `
                    <h3>Параметры функций</h3>
                    <p>Параметры функций - это как входные данные для вашей функции. Они позволяют функции работать с разными значениями при каждом вызове.</p>

                    <h4>Параметры по умолчанию:</h4>
                    <p>Вы можете задать значения по умолчанию для параметров, которые будут использоваться, если аргумент не передан.</p>
                    <div class="code-example">
                        <pre><code>// Функция с параметрами по умолчанию
function greet(name = 'Гость', greeting = 'Привет') {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet()); // Привет, Гость!
console.log(greet('Иван')); // Привет, Иван!
console.log(greet('Анна', 'Здравствуй')); // Здравствуй, Анна!</code></pre>
                    </div>

                    <h4>Остаточные параметры:</h4>
                    <p>Если вы не знаете, сколько аргументов будет передано, можно использовать остаточные параметры.</p>
                    <div class="code-example">
                        <pre><code>// Функция с остаточными параметрами
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15</code></pre>
                    </div>

                    <h4>Деструктуризация параметров:</h4>
                    <p>Вы можете разбирать объекты и массивы прямо в параметрах функции.</p>
                    <div class="code-example">
                        <pre><code>// Деструктуризация объекта
function printUser({name, age, city = 'Неизвестно'}) {
    console.log(\`Имя: \${name}, Возраст: \${age}, Город: \${city}\`);
}

const user = {name: 'Иван', age: 25};
printUser(user); // Имя: Иван, Возраст: 25, Город: Неизвестно

// Деструктуризация массива
function printFirstAndLast([first, , last]) {
    console.log(\`Первый: \${first}, Последний: \${last}\`);
}

const numbers = [1, 2, 3, 4, 5];
printFirstAndLast(numbers); // Первый: 1, Последний: 5</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте следующие функции:</p>
                        <ol>
                            <li>Функцию, которая принимает любое количество чисел и возвращает их среднее значение</li>
                            <li>Функцию, которая принимает объект с информацией о товаре и выводит его описание</li>
                            <li>Функцию, которая принимает массив имен и возвращает приветствие для всех</li>
                            <li>Функцию, которая принимает параметры для создания пользователя с настройками по умолчанию</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
// 1. Среднее значение
const average = (...numbers) => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
};

// 2. Описание товара
const describeProduct = ({name, price, category = 'Без категории', inStock = true}) => {
    return \`\${name} (\${category}) - \${price} руб. \${inStock ? 'В наличии' : 'Нет в наличии'}\`;
};

// 3. Приветствие для всех
const greetAll = (names, greeting = 'Привет') => {
    return names.map(name => \`\${greeting}, \${name}!\`).join(' ');
};

// 4. Создание пользователя
const createUser = ({name, age, role = 'user', isActive = true}) => {
    return {
        name,
        age,
        role,
        isActive,
        createdAt: new Date()
    };
};

// Использование функций
console.log('Среднее:', average(1, 2, 3, 4, 5));
console.log(describeProduct({name: 'Телефон', price: 10000}));
console.log(greetAll(['Иван', 'Анна', 'Петр'], 'Здравствуй'));
console.log(createUser({name: 'Алексей', age: 30}));</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> При работе с массивами старайтесь использовать методы массива вместо циклов, где это возможно. Это делает код более читаемым и менее подверженным ошибкам.</p>
                    </div>
                `
            },
            {
                title: 'Методы массивов',
                content: `
                    <h3>Методы массивов</h3>
                    <h4>Основные методы:</h4>
                    <pre><code>const numbers = [1, 2, 3, 4, 5];

// map - преобразование элементов
const doubled = numbers.map(n => n * 2);

// filter - фильтрация элементов
const evens = numbers.filter(n => n % 2 === 0);

// reduce - агрегация элементов
const sum = numbers.reduce((acc, n) => acc + n, 0);

// sort - сортировка
const sorted = numbers.sort((a, b) => a - b);

// find - поиск элемента
const found = numbers.find(n => n > 3);

// some - проверка условия
const hasEven = numbers.some(n => n % 2 === 0);

// every - проверка всех элементов
const allPositive = numbers.every(n => n > 0);</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Используя методы массивов:</p>
                        <ol>
                            <li>Найдите сумму квадратов четных чисел</li>
                            <li>Создайте новый массив, содержащий только уникальные элементы</li>
                            <li>Найдите среднее значение элементов массива</li>
                            <li>Отсортируйте массив строк по длине</li>
                            <li>Сгруппируйте элементы массива по определенному признаку</li>
                        </ol>
                    </div>
                `
            }
        ]
    },
    {
        id: 'dom',
        title: 'Работа с DOM',
        lessons: [
            {
                title: 'Основы DOM',
                content: `
                    <h3>Основы DOM</h3>
                    <p>DOM (Document Object Model) - это программный интерфейс для HTML и XML документов.</p>
                    <h4>Выбор элементов:</h4>
                    <pre><code>// По id
const element = document.getElementById('myId');

// По классу
const elements = document.getElementsByClassName('myClass');

// По тегу
const paragraphs = document.getElementsByTagName('p');

// По селектору
const firstElement = document.querySelector('.myClass');
const allElements = document.querySelectorAll('.myClass');</code></pre>
                    <h4>Изменение содержимого:</h4>
                    <pre><code>// Текст
element.textContent = 'Новый текст';

// HTML
element.innerHTML = '<strong>Новый HTML</strong>';

// Атрибуты
element.setAttribute('class', 'newClass');
const value = element.getAttribute('class');</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте веб-страницу с:</p>
                        <ol>
                            <li>Кнопкой, меняющей цвет фона</li>
                            <li>Формой для добавления элементов в список</li>
                            <li>Возможностью удаления элементов из списка</li>
                            <li>Счетчиком количества элементов</li>
                            <li>Фильтрацией элементов по введенному тексту</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'События',
                content: `
                    <h3>События</h3>
                    <p>События - это действия, которые происходят на веб-странице.</p>
                    <h4>Основные события:</h4>
                    <pre><code>// Клик
element.addEventListener('click', function(event) {
    console.log('Клик!');
});

// Наведение мыши
element.addEventListener('mouseover', function(event) {
    console.log('Наведение!');
});

// Нажатие клавиши
document.addEventListener('keydown', function(event) {
    console.log('Нажата клавиша:', event.key);
});

// Отправка формы
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Форма отправлена!');
});</code></pre>
                    <h4>Делегирование событий:</h4>
                    <pre><code>// Обработка событий для динамически добавляемых элементов
parentElement.addEventListener('click', function(event) {
    if (event.target.matches('.child-element')) {
        console.log('Клик по дочернему элементу!');
    }
});</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте интерактивную страницу с:</p>
                        <ol>
                            <li>Drag-and-drop элементами</li>
                            <li>Валидацией формы в реальном времени</li>
                            <li>Контекстным меню по правому клику</li>
                            <li>Анимацией при наведении</li>
                            <li>Обработкой комбинаций клавиш</li>
                        </ol>
                    </div>
                `
            }
        ]
    },
    {
        id: 'async',
        title: 'Асинхронное программирование',
        lessons: [
            {
                title: 'Promise и async/await',
                content: `
                    <h3>Promise и async/await</h3>
                    <h4>Promise:</h4>
                    <pre><code>// Создание Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Успех!');
    }, 1000);
});

// Использование Promise
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Завершено'));</code></pre>
                    <h4>async/await:</h4>
                    <pre><code>// Асинхронная функция
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте:</p>
                        <ol>
                            <li>Функцию для последовательной загрузки нескольких изображений</li>
                            <li>Обработку ошибок при загрузке данных</li>
                            <li>Параллельную загрузку нескольких ресурсов</li>
                            <li>Таймаут для асинхронных операций</li>
                            <li>Кэширование результатов асинхронных запросов</li>
                        </ol>
                    </div>
                `
            }
        ]
    },
    {
        id: 'modules',
        title: 'Модули и ООП',
        lessons: [
            {
                title: 'ES6 Модули',
                content: `
                    <h3>ES6 Модули</h3>
                    <h4>Экспорт:</h4>
                    <pre><code>// Именованный экспорт
export const PI = 3.14;
export function square(x) {
    return x * x;
}

// Экспорт по умолчанию
export default class Calculator {
    // ...
}</code></pre>
                    <h4>Импорт:</h4>
                    <pre><code>// Именованный импорт
import { PI, square } from './math.js';

// Импорт по умолчанию
import Calculator from './calculator.js';

// Импорт всего модуля
import * as math from './math.js';</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте модульную структуру для:</p>
                        <ol>
                            <li>Калькулятора с разными операциями</li>
                            <li>Системы валидации форм</li>
                            <li>Утилит для работы с датами</li>
                            <li>Хранилища данных</li>
                            <li>Системы логирования</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Классы и наследование',
                content: `
                    <h3>Классы и наследование</h3>
                    <h4>Классы:</h4>
                    <pre><code>class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} издает звук\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(\`\${this.name} лает\`);
    }
}</code></pre>
                    <h4>Статические методы:</h4>
                    <pre><code>class MathUtils {
    static sum(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}</code></pre>
                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте иерархию классов для:</p>
                        <ol>
                            <li>Геометрических фигур (круг, квадрат, треугольник)</li>
                            <li>Транспортных средств (автомобиль, велосипед, самолет)</li>
                            <li>Сотрудников компании (менеджер, разработчик, тестировщик)</li>
                            <li>Банковских счетов (дебетовый, кредитный, сберегательный)</li>
                            <li>Животных (млекопитающие, птицы, рыбы)</li>
                        </ol>
                    </div>
                `
            }
        ]
    },
    {
        id: 'modern-js',
        title: 'Современный JavaScript (ES6+)',
        lessons: [
            {
                title: 'Современные возможности JavaScript',
                content: `
                    <h3>Современные возможности JavaScript (ES6+)</h3>
                    <p>JavaScript постоянно развивается, и в последние годы появилось много новых возможностей, которые делают код более читаемым и удобным для написания. Давайте рассмотрим основные из них.</p>

                    <h4>1. Стрелочные функции (Arrow Functions)</h4>
                    <p>Стрелочные функции - это более короткий способ записи функций:</p>
                    <div class="code-example">
                        <pre><code>// Старый способ
function add(a, b) {
    return a + b;
}

// Стрелочная функция
const add = (a, b) => a + b;

// Если тело функции состоит из одной строки,
// можно опустить фигурные скобки и return
const double = x => x * 2;

// Если параметров нет, нужны пустые скобки
const sayHello = () => console.log('Hello!');</code></pre>
                    </div>

                    <h4>2. Деструктуризация</h4>
                    <p>Деструктуризация позволяет извлекать значения из объектов и массивов в отдельные переменные:</p>
                    <div class="code-example">
                        <pre><code>// Деструктуризация объекта
const person = { name: 'Иван', age: 25, city: 'Москва' };
const { name, age } = person;
console.log(name); // Иван
console.log(age);  // 25

// Деструктуризация массива
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]</code></pre>
                    </div>

                    <h4>3. Шаблонные строки (Template Literals)</h4>
                    <p>Шаблонные строки позволяют вставлять переменные прямо в текст:</p>
                    <div class="code-example">
                        <pre><code>const name = 'Иван';
const age = 25;

// Старый способ
console.log('Привет, ' + name + '! Тебе ' + age + ' лет.');

// Шаблонные строки
console.log(\`Привет, \${name}! Тебе \${age} лет.\`);

// Многострочные строки
const message = \`
    Привет, \${name}!
    Рад тебя видеть.
    Твой возраст: \${age}
\`;</code></pre>
                    </div>

                    <h4>4. Оператор расширения (Spread Operator)</h4>
                    <p>Оператор расширения позволяет разворачивать массивы и объекты:</p>
                    <div class="code-example">
                        <pre><code>// Копирование массива
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3]

// Объединение массивов
const arr3 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

// Копирование объекта
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // { a: 1, b: 2 }

// Объединение объектов
const obj3 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }</code></pre>
                    </div>

                    <h4>5. Параметры по умолчанию</h4>
                    <p>Теперь можно задавать значения по умолчанию для параметров функций:</p>
                    <div class="code-example">
                        <pre><code>function greet(name = 'Гость', greeting = 'Привет') {
    return \`\${greeting}, \${name}!\`;
}

console.log(greet()); // Привет, Гость!
console.log(greet('Иван')); // Привет, Иван!
console.log(greet('Анна', 'Здравствуй')); // Здравствуй, Анна!</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте программу, используя современные возможности JavaScript:</p>
                        <ol>
                            <li>Создайте функцию, которая принимает объект с информацией о пользователе и возвращает приветствие</li>
                            <li>Используйте деструктуризацию для извлечения данных из объекта</li>
                            <li>Примените шаблонные строки для форматирования приветствия</li>
                            <li>Добавьте параметры по умолчанию</li>
                            <li>Создайте копию объекта с помощью оператора расширения</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
const createGreeting = ({ name = 'Гость', age = 18, city = 'Неизвестно' } = {}) => {
    const user = { name, age, city };
    const greeting = \`Привет, \${name}! Тебе \${age} лет, и ты из города \${city}.\`;
    return { user, greeting };
};

const userInfo = { name: 'Иван', age: 25, city: 'Москва' };
const { user, greeting } = createGreeting(userInfo);
console.log(greeting);</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> Современные возможности JavaScript делают код более читаемым и поддерживаемым. Старайтесь использовать их в своих проектах, но помните о совместимости с браузерами.</p>
                    </div>
                `
            },
            {
                title: 'Асинхронное программирование',
                content: `
                    <h3>Асинхронное программирование</h3>
                    <p>Асинхронное программирование позволяет выполнять операции, не блокируя основной поток выполнения. В JavaScript есть несколько способов работы с асинхронным кодом.</p>

                    <h4>1. Callbacks (Обратные вызовы)</h4>
                    <p>Обратные вызовы - это функции, которые передаются как аргументы и вызываются после завершения операции:</p>
                    <div class="code-example">
                        <pre><code>function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'Иван', age: 25 };
        callback(data);
    }, 1000);
}

fetchData(data => {
    console.log('Получены данные:', data);
});</code></pre>
                    </div>

                    <h4>2. Promises (Обещания)</h4>
                    <p>Promises предоставляют более удобный способ работы с асинхронным кодом:</p>
                    <div class="code-example">
                        <pre><code>function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Иван', age: 25 };
            resolve(data);
            // В случае ошибки: reject(new Error('Что-то пошло не так'));
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log('Получены данные:', data);
        return data.name;
    })
    .then(name => {
        console.log('Имя пользователя:', name);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });</code></pre>
                    </div>

                    <h4>3. Async/Await</h4>
                    <p>Async/await - это современный способ работы с асинхронным кодом, который делает его похожим на синхронный:</p>
                    <div class="code-example">
                        <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log('Получены данные:', data);
        return data;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Использование
fetchData();</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте асинхронное приложение:</p>
                        <ol>
                            <li>Напишите функцию, которая имитирует загрузку данных с сервера</li>
                            <li>Используйте Promise для обработки успешного и неуспешного результата</li>
                            <li>Создайте асинхронную функцию с использованием async/await</li>
                            <li>Добавьте обработку ошибок</li>
                            <li>Реализуйте цепочку асинхронных операций</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
const mockApi = {
    fetchUser: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3;
            if (success) {
                resolve({ id: 1, name: 'Иван', age: 25 });
            } else {
                reject(new Error('Не удалось загрузить данные'));
            }
        }, 1000);
    })
};

async function loadUserData() {
    try {
        console.log('Загрузка данных...');
        const user = await mockApi.fetchUser();
        console.log('Данные загружены:', user);
        return user;
    } catch (error) {
        console.error('Ошибка загрузки:', error.message);
        throw error;
    }
}

// Использование
loadUserData();</code></pre>
                        </div>
                    </div>

                    <div class="note">
                        <p><strong>Совет:</strong> При работе с асинхронным кодом всегда обрабатывайте возможные ошибки. Используйте try/catch с async/await и .catch() с Promises.</p>
                    </div>
                `
            }
        ]
    },
    {
        id: 'objects',
        title: 'Работа с объектами',
        lessons: [
            {
                title: 'Основы объектов',
                content: `
                    <h3>Основы объектов</h3>
                    <p>Объекты в JavaScript - это контейнеры для хранения связанных данных и функций. Представьте, что объект - это как папка с документами, где каждый документ имеет своё название и содержимое.</p>

                    <h4>Создание объектов:</h4>
                    <div class="code-example">
                        <pre><code>// 1. Литеральная нотация (самый простой способ)
const person = {
    name: 'Иван',
    age: 25,
    city: 'Москва'
};

// 2. Конструктор Object
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';
car.year = 2020;

// 3. Object.create()
const animal = Object.create(null);
animal.type = 'собака';
animal.name = 'Шарик';</code></pre>
                    </div>

                    <h4>Доступ к свойствам:</h4>
                    <div class="code-example">
                        <pre><code>// Точечная нотация
console.log(person.name); // Иван

// Квадратные скобки
console.log(person['age']); // 25

// Динамический доступ
const property = 'city';
console.log(person[property]); // Москва</code></pre>
                    </div>

                    <h4>Методы объектов:</h4>
                    <div class="code-example">
                        <pre><code>const user = {
    name: 'Анна',
    age: 30,
    // Метод объекта
    sayHello() {
        return \`Привет, меня зовут \${this.name}!\`;
    },
    // Стрелочная функция (не имеет своего this)
    getAge: () => {
        return \`Мне \${this.age} лет\`; // Неправильно!
    }
};

console.log(user.sayHello()); // Привет, меня зовут Анна!</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте объект, представляющий книгу:</p>
                        <ol>
                            <li>Добавьте свойства: название, автор, год издания, жанр</li>
                            <li>Создайте метод для вывода информации о книге</li>
                            <li>Добавьте метод для проверки, является ли книга новой (выпущена в текущем году)</li>
                            <li>Создайте несколько экземпляров книг и выведите их информацию</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
const book = {
    title: 'JavaScript для начинающих',
    author: 'Иван Петров',
    year: 2023,
    genre: 'Программирование',
    
    getInfo() {
        return \`"\${this.title}" - \${this.author}, \${this.year} год, жанр: \${this.genre}\`;
    },
    
    isNew() {
        return this.year === new Date().getFullYear();
    }
};

console.log(book.getInfo());
console.log('Новая книга?', book.isNew());</code></pre>
                        </div>
                    </div>
                `
            },
            {
                title: 'Методы объектов и this',
                content: `
                    <h3>Методы объектов и this</h3>
                    <p>Ключевое слово <code>this</code> в JavaScript - это ссылка на объект, в контексте которого выполняется код. Понимание <code>this</code> очень важно для работы с объектами.</p>

                    <h4>Значение this в разных контекстах:</h4>
                    <div class="code-example">
                        <pre><code>// 1. В методе объекта
const person = {
    name: 'Иван',
    sayName() {
        console.log(this.name); // Иван
    }
};

// 2. В обычной функции
function showThis() {
    console.log(this); // window (в браузере)
}

// 3. В стрелочной функции
const arrowShowThis = () => {
    console.log(this); // Заимствует this из внешнего контекста
};

// 4. В обработчике событий
button.addEventListener('click', function() {
    console.log(this); // Элемент button
});</code></pre>
                    </div>

                    <h4>Привязка this:</h4>
                    <div class="code-example">
                        <pre><code>// 1. bind - создает новую функцию с привязанным this
const boundFunction = someFunction.bind(someObject);

// 2. call - вызывает функцию с указанным this
someFunction.call(someObject, arg1, arg2);

// 3. apply - аналогично call, но аргументы передаются массивом
someFunction.apply(someObject, [arg1, arg2]);</code></pre>
                    </div>

                    <div class="exercise">
                        <h4>Практическое задание</h4>
                        <p>Создайте объект калькулятора:</p>
                        <ol>
                            <li>Добавьте методы для основных арифметических операций</li>
                            <li>Создайте метод для сохранения результата</li>
                            <li>Добавьте метод для сброса результата</li>
                            <li>Реализуйте цепочку вызовов методов</li>
                        </ol>
                        <div class="code-example">
                            <pre><code>// Пример решения
const calculator = {
    result: 0,
    
    add(number) {
        this.result += number;
        return this; // Возвращаем this для цепочки
    },
    
    subtract(number) {
        this.result -= number;
        return this;
    },
    
    multiply(number) {
        this.result *= number;
        return this;
    },
    
    divide(number) {
        this.result /= number;
        return this;
    },
    
    reset() {
        this.result = 0;
        return this;
    },
    
    getResult() {
        return this.result;
    }
};

// Использование с цепочкой вызовов
const result = calculator.add(5).multiply(2).subtract(3).getResult();
console.log(result); // 7</code></pre>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: 'advanced-functions',
        title: 'Продвинутые функции',
        lessons: [
            {
                title: 'Замыкания',
                content: `
                    <h3>Замыкания</h3>
                    <p>Замыкание - это функция, которая запоминает переменные из внешней области видимости, даже после того, как внешняя функция завершила выполнение.</p>

                    <div class="code-example">
                        <pre><code>// Пример решения
// Объявление переменной
let counter = 0;

// Функция, которая увеличивает счетчик
function increment() {
    counter++;
    console.log(counter);
}

// Вызов функции
increment(); // 1
increment(); // 2
increment(); // 3</code></pre>
                    </div>
                `
            },
            {
                title: 'Современный JavaScript',
                content: `
                    <h3>Современный JavaScript (ES6+)</h3>
                    <p>В этом разделе мы рассмотрим современные возможности JavaScript, которые делают код более чистым и удобным.</p>

                    <div class="code-example">
                        <pre><code>// Стрелочные функции
// Обычная функция
function add(a, b) {
    return a + b;
}

// Стрелочная функция
const addArrow = (a, b) => a + b;

// Стрелочная функция с несколькими строками
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Деструктуризация объекта
const personExample = { 
    name: 'John',
    age: 30,
    city: 'New York'
};
const { name: userName, age: userAge } = personExample;
console.log(userName, userAge); // John 30

// Деструктуризация массива
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Шаблонные строки
const personName = 'John';
const personAge = 30;
// Старый способ
console.log('Меня зовут ' + personName + ' и мне ' + personAge + ' лет');
// Новый способ
console.log(\`Меня зовут \${personName} и мне \${personAge} лет\`);

// Многострочные строки
const welcomeMessage = \`
    Привет, \${personName}!
    Добро пожаловать на наш сайт.
    Мы рады видеть вас здесь.
\`;

// Spread оператор
// Копирование массива
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Копирование объекта
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Rest параметры
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15</code></pre>
                    </div>
                `
            }
        ]
    }
];

// Функции для работы с курсом
function initCourse() {
    const courseMenu = document.getElementById('course-menu');
    const courseContent = document.getElementById('course-content');
    
    if (!courseMenu || !courseContent) return;
    
    // Очищаем меню
    courseMenu.innerHTML = '';
    
    // Строим меню
    courseData.forEach(section => {
        const sectionItem = document.createElement('li');
        sectionItem.innerHTML = `<h3>${section.title}</h3>`;
        
        const lessonsList = document.createElement('ul');
        section.lessons.forEach(lesson => {
            const lessonItem = document.createElement('li');
            const lessonLink = document.createElement('a');
            lessonLink.href = '#';
            lessonLink.textContent = lesson.title;
            lessonLink.onclick = () => showLesson(section.id, lesson.title);
            lessonItem.appendChild(lessonLink);
            lessonsList.appendChild(lessonItem);
        });
        
        sectionItem.appendChild(lessonsList);
        courseMenu.appendChild(sectionItem);
    });
    
    // Показываем первый урок
    if (courseData.length > 0 && courseData[0].lessons.length > 0) {
        showLesson(courseData[0].id, courseData[0].lessons[0].title);
    }
}

function showLesson(sectionId, lessonTitle) {
    const courseContent = document.getElementById('course-content');
    if (!courseContent) return;
    
    const section = courseData.find(s => s.id === sectionId);
    if (!section) return;
    
    const lesson = section.lessons.find(l => l.title === lessonTitle);
    if (!lesson) return;
    
    courseContent.innerHTML = `
        <h2>${lesson.title}</h2>
        <div class="lesson-content">
            ${lesson.content}
        </div>
    `;
    
    // Обновляем подсветку синтаксиса
    updateCodeExamples();
}

function updateCodeExamples() {
    const codeExamples = document.querySelectorAll('pre code');
    codeExamples.forEach(code => {
        code.className = 'language-javascript';
        Prism.highlightElement(code);
    });
}

// Функции для валидатора кода
function showValidator() {
    const courseContent = document.getElementById('course-content');
    const validatorSection = document.getElementById('validator-section');
    
    if (courseContent && validatorSection) {
        courseContent.hidden = true;
        validatorSection.hidden = false;
        initCodeEditor();
    }
}

function showCourse() {
    const courseContent = document.getElementById('course-content');
    const validatorSection = document.getElementById('validator-section');
    
    if (courseContent && validatorSection) {
        courseContent.hidden = false;
        validatorSection.hidden = true;
    }
}

function initCodeEditor() {
    const textarea = document.getElementById('code-editor');
    if (textarea && !codeEditor) {
        codeEditor = CodeMirror.fromTextArea(textarea, {
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            indentUnit: 4,
            smartIndent: true,
            lineWrapping: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            extraKeys: {
                'Ctrl-Space': 'autocomplete'
            }
        });
    }
}

function validateCode() {
    const code = codeEditor ? codeEditor.getValue() : document.getElementById('code-editor').value;
    const stats = document.getElementById('stats');
    
    try {
        // Проверка синтаксиса
        new Function(code);
        
        // Проверка с помощью ESLint
        const linter = new ESLint();
        const messages = linter.verify(code, {
            rules: {
                'no-unused-vars': 'error',
                'no-undef': 'error',
                'no-console': 'warn'
            }
        });
        
        if (messages.length === 0) {
            stats.innerHTML = '<div class="success">Код валиден! Ошибок не найдено.</div>';
        } else {
            let errors = 0;
            let warnings = 0;
            let output = '';
            
            messages.forEach(msg => {
                if (msg.severity === 2) {
                    errors++;
                    output += `<div class="error">Ошибка: ${msg.message} (строка ${msg.line})</div>`;
                } else {
                    warnings++;
                    output += `<div class="warning">Предупреждение: ${msg.message} (строка ${msg.line})</div>`;
                }
            });
            
            stats.innerHTML = `<div class="stats-summary">Найдено ${errors} ошибок и ${warnings} предупреждений</div>${output}`;
        }
    } catch (error) {
        stats.innerHTML = `<div class="error">Синтаксическая ошибка: ${error.message}</div>`;
    }
}

function formatCode() {
    const code = codeEditor ? codeEditor.getValue() : document.getElementById('code-editor').value;
    const stats = document.getElementById('stats');
    
    try {
        if (typeof prettier === 'undefined' || typeof window.prettierPlugins === 'undefined') {
            throw new Error('Prettier or its parser not loaded. Please refresh the page.');
        }

        const formattedCode = prettier.format(code, {
            parser: 'babel',
            plugins: window.prettierPlugins,
            semi: true,
            singleQuote: true,
            tabWidth: 4,
            printWidth: 80
        });

        if (codeEditor) {
            codeEditor.setValue(formattedCode);
        } else {
            document.getElementById('code-editor').value = formattedCode;
        }

        stats.innerHTML = '<div class="success">Код успешно отформатирован!</div>';
    } catch (error) {
        console.error('Formatting error:', error);
        stats.innerHTML = `<div class="error">Ошибка форматирования: ${error.message}</div>`;
    }
}

function clearEditor() {
    if (codeEditor) {
        codeEditor.setValue('');
    } else {
        document.getElementById('code-editor').value = '';
    }
    document.getElementById('stats').innerHTML = 'Ожидание проверки...';
}

function executeCode() {
    const code = codeEditor ? codeEditor.getValue() : document.getElementById('code-editor').value;
    const stats = document.getElementById('stats');
    
    try {
        // Сохраняем оригинальный console.log
        const originalConsoleLog = console.log;
        let output = '';
        
        // Переопределяем console.log для захвата вывода
        console.log = function(...args) {
            output += args.join(' ') + '\n';
            originalConsoleLog.apply(console, args);
        };
        
        // Выполняем код
        const result = new Function(code)();
        
        // Восстанавливаем оригинальный console.log
        console.log = originalConsoleLog;
        
        // Отображаем результат
        if (output) {
            stats.innerHTML = `<div class="success">Код выполнен успешно</div>
                             <div class="execution-output">
                                 <h4>Вывод:</h4>
                                 <pre>${output}</pre>
                             </div>`;
        } else {
            stats.innerHTML = '<div class="success">Код выполнен успешно (нет вывода)</div>';
        }
    } catch (error) {
        stats.innerHTML = `<div class="error">Ошибка выполнения: ${error.message}</div>`;
        console.error('Execution error:', error);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initCourse();
});