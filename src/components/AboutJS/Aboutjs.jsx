import style from "./Aboutjs.module.css";
const Aboutjs = () => {
    return(
        <div className="info_layout">
          <div className="subMenu">
          <div className="subItemsWrap">
                <p><a href="#first">Основи синтаксису</a></p>
                <p><a href="#second">Способи додавання скрипту</a></p>
                <p><a href="#third">Async та Defer</a></p>
                <p><a href="#fourth">use strict</a></p>
                <p><a href="#fifth">Змінні</a></p>
                <p><a href="#sixth">Типи даних</a></p>
                <p><a href="#seventh">Взаємодії</a></p>
                <p><a href="#eight">Базові оператори</a></p>
                <p><a href="#ninth">Умовні розгалуження</a></p>
                <p><a href="#tenth">Цикли</a></p>
                <p><a href="#eleventh">Switch</a></p>
                <p><a href="#last">Функції</a></p>
                </div>
            </div>
            
            <div className="contentWrap"> 
            <h1 id="first">JavaScript</h1>
            <div>
                <h2>Основи синтаксису JavaScript</h2>
                <p>
                    <span>JavaScript</span> - прототипно-орієнтована скриптова мова програмування.
                    Найширшее застосування знаходить в браузерах як мова сценаріїв для
                    надання інтерактивності веб-сторінок.
                </p>
                <p>
                    Специфікація (формальний опис синтаксису, базових об'єктів і
                    алгоритмів) мови JavaScript називається <span>ECMAScript.</span> Сучасний стандарт -
                    це ЕСМА-262 5.1. Він підтримується всіма сучасними браузерами, крім
                    Internet Explorer &lt; 9. Стандарт для JavaScript не називається просто
                    JavaScript тому,<a id="second"></a> що JavaScript&#8482; - зареєстрована торгова марка, що
                    належить корпорації Oracle. ECMAScript було обрано, щоб зберегти
                    специфікацію незалежної від власників торгової марки.
                </p>
                <p className={style.last} >
                    <span>Скрипт</span> - це послідовність команд певному виконавцю, що їх виконує. JS
                    скрипти - це послідовність операторів, що вказують браузеру як
                    відображати веб-сторінку.
                </p>
                <h3>Способи додавання скрипту на веб-сторінку:</h3>
                <p className={style.last}>
                    <ol>
                        <li>
                            Безпосереднє включення скрипта в текст сторінки. Для цього оператори записують між тегами<br/>
                            <span className={style.code}>
                                <pre>&lt;script type = "text/javascript"&gt;<br/>
                                &emsp;скрипт<br/> 
                                &lt;/script&gt;</pre>
                            </span>

                        </li>
                        <li id="third">
                            Підключення файла, що містить скрипт з розширенням .js<br/>
                            <span className={style.code}>
                            <pre>&lt;script type="text/javascript" src="шлях.ім'я.js"&gt;&lt;script&gt;</pre>
                            </span>
                        </li>
                    </ol>
                </p>
                <h3>Атрибути async та defer:</h3>
                <p>
                    <span className={style.code}>async.</span> Підтримується всіма браузерами, крім IЕ9-. Скрипт виконується повністю
                    асинхронно. Тобто, при виявленні &lt;script async src="..."&gt;браузер не
                    зупиняє обробку сторінки, а спокійно працює далі. Коли скрипт буде
                    завантажений - він виконається.
                </p>
                <p className={style.last}>
                <span className={style.code}>defer. </span> 
                    Підтримується всіма браузерами, включаючи найстаріші IЕ. Скрипт
                    виконується асинхронно, не змушує чекати сторінку, але, на відміну від
                    async, браузер гарантує, що відносний порядок скриптів з defer буде
                    збережений.
                    Тобто, в такому коді (з async) першим спрацює той скрипт, який раніше
                    завантажиться:<br/>
                    <pre><span className={style.code}>&lt;script src="1.js" async&gt;&lt;script&gt;</span> <br/>
                    <span className={style.code} id="fourth">&lt;script src="2.js" async&gt;&lt;script&gt;</span> <br/></pre>
                    А в такому коді (з defer) першим спрацює завжди 1.js, а скрипт 2.js, навіть
                    якщо завантажився раніше, буде його чекати.<br/> 
                    <pre><span className={style.code}>&lt;script src="1.js" defer&gt;&lt;script&gt;</span> <br/>
                    <span className={style.code}>&lt;script src="2.js" defer&gt;&lt;script&gt;</span> <br/></pre>
                </p>
                <h3>Сучасний режим, "use strict":</h3>
                <p className={style.last} id="fifth">
                    Впродовж тривалого часу JavaScript розвивався без проблем із сумісністю. До мови додавалися нові функції, а стара функціональність залишалася незмінною.
                    Перевагою цього було те, що існуючий код не ламався. Проте, будь-яка помилка або неідеальне рішення назавжди ставали частиною JavaScript, тому що цей код не змінювався.
                    Так було до 2009 року, коли з’явився стандарт ECMAScript 5 (ES5). Він додав нові функції до мови і змінив деякі існуючі. Щоб старий код лишався робочим, більшість таких модифікацій усталено було вимкнено. Щоб увімкнути цей функціонал, потрібно прописати спеціальну директиву: "use strict".
                </p>
                <h3>Змінні:</h3>
                <p className={style.last}>
                Найчастіше застосункам на JavaScript потрібно працювати з інформацією. Ось два приклади: <br/>

                &emsp;1. Онлайн-магазин – інформацією можуть бути товари, які продаються, і вміст кошика.<br/>
                &emsp;2. Застосунок для чату – інформація може включати користувачів, повідомлення та багато іншого.<br/>
            
                Змінні використовуються для зберігання цієї інформації.<br/>
                Змінна це “іменована частинка сховища”, в якій зберігаються дані. Ми можемо використовувати змінні, щоб зберігати товари, відвідувачів та інші дані.<br/>
                В JavaScript є два обмеження, які стосуються імен змінних:<a id="sixth"></a><br/>
                
                &emsp;1. Ім’я має містити лише букви, цифри або символи $ і _.<br/>
                &emsp;2. Перший символ не має бути числом.<br/>
                Ми можемо оголосити змінні для збереження даних за допомогою ключових слів var, let чи const.<br/>
                </p>
                <h3>Типи даних:</h3>
                <p>
                Значення в JavaScript завжди має певний тип даних. Наприклад, рядок або число. У JavaScript є вісім основних типів даних.
                <h4>Число (number)</h4>
                    <p>
                    Тип number представляє і цілі числа, і числа з рухомою точкою.<br/>
                    Є багато операцій, що можна робити з числами, наприклад, множення *, ділення /, додавання +, віднімання - тощо.
                    Окрім звичайних чисел, є так звані “спеціальні числові значення”, що також мають відношення до цього типу даних: Infinity, -Infinity і NaN.<br/>
                    Infinity являє собою математичну нескінченність ∞. Це спеціальне значення, що є більшим за будь-яке число.
                    </p>
                <h4>BigInt</h4>
                    <p>
                    У JavaScript, тип “number” не може містити числа більші за (2<sup>53</sup>-1) (це 9007199254740991), або менші за -(2<sup>53</sup>-1) для від’ємних чисел. Це технічне обмеження, спричинене їхньою внутрішньою реалізацією.
                    Для більшості потреб цього достатньо, але бувають випадки, коли нам потрібні дійсно великі числа, наприклад, для криптографії або мікроксекундних часових міток (timestamps).
                    Нещодавно в мову був доданий тип BigInt для представлення цілих чисел довільної довжини.
                    Значення з типом BigInt створюється через додавання n у кінець цілого числа:
                    </p>
                <h4>Рядок (string)</h4>
                    <p>
                    Рядок у JavaScript має бути оточений лапками.<br/>
                    У JavaScript є три типи лапок.<br/>
                    <pre>&emsp;Подвійні лапки: "Привіт".<br/>
                    &emsp;Одинарні лапки: 'Привіт'.<br/>
                    &emsp;Зворотні лапки: `Привіт`.<br/></pre>
                    Подвійні та одинарні лапки є “звичайними”. Тобто немає ніякої різниці, які саме використовувати.
                    Зворотні лапки є розширенням функціональності. Вони дають змогу вбудовувати змінні та вирази в рядок, обрамляючи їх в $&#123;...&#125;, наприклад:<br/>
                    <pre><span>
                    &emsp;let name = "Іван"; <br/>
                    &emsp;alert(`Привіт, $ &#123; name&#125;е!`); // Привіт, Іване! <br/>
                    &emsp;alert(`результат: $&#123;1 + 2&#125;`); // результат: 3 <br/>
                    </span></pre>
                    </p>
                <h4>Булевий або логічний тип (boolean)</h4>
                    <p>
                    Логічний тип може приймати лише два значення: true (істина) та false (хиба).<br/>
                    Цей тип зазвичай використовується для зберігання значень так/ні: true означає “так, вірно”, а false означає “ні, не вірно”.
                    </p>
                <h4>Значення “null”</h4>
                    <p>
                    Спеціальне значення null не належить до жодного з описаних вище типів.
                    Воно формує окремий власний тип, який містить лише значення null.
                    В JavaScript null не є “посиланням на неіснуючий об’єкт” або “покажчиком на null”, як може бути в інших мовах програмування.
                    Це лише спеціальне значення, яке представляє “нічого”, “порожнє” або “невідоме значення”.
                    </p>
                <h4>Значення “undefined”</h4>
                    <p>
                    Спеціальне значення undefined також стоїть окремо. Воно представляє власний тип, подібний до “null”.
                    undefined означає, що “значення не присвоєно”.
                    Якщо змінна оголошена, але їй не присвоєне якесь значення, тоді значення такої змінної буде undefined
                    </p>
                <h4>Об’єкти (object) та символи (symbol)</h4>
                    <p className={style.last} id="seventh">
                    Тип object є особливим типом.<br/>
                    Усі інші типи називаються “примітивами”, тому що їхні значення можуть містити тільки один елемент (це може бути рядок, число, або будь-що інше). В об’єктах же зберігаються колекції даних і більш складні структури.
                    Об’єкти є важливою частиною мови, тому ми окремо розглянемо їх у розділі Об’єкти після того, як дізнаємося більше про примітиви.<br/>
                    Тип symbol використовується для створення унікальних ідентифікаторів в об’єктах. 
                    </p>
                </p>
                <h3>Взаємодія: alert, prompt, confirm:</h3>
                <p>
                    <span>alert. </span>Показує повідомлення та чекає, доки користувач не натисне кнопку “ОК”.<br/>
                    Наприклад:
                    <pre><p>
                        <span>
                        alert("Привіт");
                        </span>
                    </p></pre>
                    Мінівікно з повідомленням називається модальним вікном. Слово “модальний” означає, що відвідувач не зможе взаємодіяти з іншою частиною сторінки, натискати інші кнопки тощо, доки не завершить операції з вікном. У цьому випадку – поки він не натисне “OK”.<br/>
                    <span>prompt. </span>Вона показує модальне вікно з текстовим повідомленням, полем, куди відвідувач може ввести текст, та кнопками ОК/Скасувати. Функція prompt приймає два аргументи:
                    <p>
                        <span>result = prompt(title, [default]);</span> <br/>
                        title - текст, який буде відображатися для відвідувача.<br/>
                        default - необов’язковий другий параметр, початкове значення для поля введення тексту.
                    </p>
                    Відвідувач може щось ввести у поле введення і натиснути ОК. Ми отримаємо введений текст в result. Однак, користувач може скасувати введення, натиснувши “Скасувати” або клавішу Esc. В цьому випадку result буде мати значення null.
                    Виклик prompt повертає текст із поля введення або null, якщо введення було скасовано.<br/>
                    <span id="eight">confirm. </span>Функція confirm показує модальне вікно з питанням question та двома кнопками: ОК та Скасувати.<br/>                    
                    Результат: true, якщо натиснути кнопку OK, інакше — false.<br/>
                    Наприклад:
                    <p className={style.last}> 
                        <pre><span>let isBoss = confirm("Ви бос?");<br/>
                        alert( isBoss ); // true, якщо натиснута OK</span></pre>
                    </p>
                </p>
                <h3>Базові оператори:</h3>
                <p className={style.last}>
                JavaScript підтримує такі математичні операції:<br/>
                ● Додавання +, <br/>
                ● Віднімання -, <br/>
                ● Множення *, <br/>
                ● Ділення /, <br/>
                ● Остача від ділення %, <br/>
                ● Піднесення до степеня **. <br/>
                <h4>Оператори порівняння</h4>
                ● Більше/менше: a &gt; b, a &lt; b.<br/> <a id="ninth"></a>
                ● Більше/менше або дорівнює: a &ge; b, a &le; b.<br/>
                ● Дорівнює: a == b. Зверніть увагу, для порівняння потрібно використовувати два знаки рівності ==. Один знак рівності a = b означав б присвоєння.<br/>
                ● Не дорівнює: в математиці позначається символом ≠, проте в JavaScript записується як a != b
                </p>
                <h3>Умовні розгалуження: if, '?':</h3>
                <p className={style.last}>
                Іноді нам потрібно виконувати різні дії на основі різних умов.
                Для цього ми можемо використовувати інструкцію if та умовний оператор ?, що також називається оператором “знак питання”.
                <h4>Інструкція “if”</h4>
                Інструкція if(...) обчислює умову в дужках і, якщо результат умови true, виконує блок коду.<br/>
                Наприклад:
                <p>
                    <pre><span>
                    let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');<br/>
                    if (year == 2015)&#123; <br/>
                    &emsp;alert( 'Ви маєте рацію!' ); <br/>
                    &#125;
                    </span></pre>
                </p>
                Вираз if може містити необов’язковий блок “else” (“інакше”). Він виконується, коли умова є хибною.<br/>
                Наприклад:
                    <p>
                        <pre><span>
                        let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');<br/>
                        if (year == 2015) &#123;<br/>
                        alert( 'Ви здогадалися правильно!' );<br/>
                        &#125; else &#123;<br/>
                        alert( 'Як ви можете так помилятися?' ); // будь-яке значення, окрім 2015<br/>
                        &#125;
                        </span></pre>
                    </p>
                Іноді ми хотіли б перевірити кілька варіантів умови. Блок else if дозволяє нам це зробити.<br/>
                Наприклад:
                    <p>
                        <pre><span>
                        let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');<br/>
                            if (year &lt; 2015) &#123;<br/>
                            alert( 'Зарано...' );<br/>
                            &#125; else if (year &gt; 2015) &#123;<br/>
                            alert( 'Запізно' );<br/>
                            &#125; else &#123;<br/>
                            alert( 'Саме так!' );<br/>
                            &#125;
                        </span></pre>
                    </p>
                    <h4>Умовний оператор ‘?’</h4>
                    Іноді нам необхідно присвоїти значення змінній в залежності від умови.<br/>
                    Наприклад:
                        <p>
                            <pre><span>
                            let accessAllowed; <br/>
                            let age = prompt('Скільки вам років?', '');<br/>
                            if (age &gt; 18) &#123;<br/>
                            accessAllowed = true;<br/>
                            &#125; else &#123;<br/>
                            accessAllowed = false;<br/>
                            &#125;<br/>
                            alert(accessAllowed);
                            </span></pre>
                        </p>
                        Так званий “умовний” оператор або оператор “знак питання” дає нам зробити це в більш короткій і простій формі.
                        Оператор представлений знаком питання ?. Іноді його називають “тернарним”, оскільки оператор має три операнди. Насправді це єдиний оператор у JavaScript, який має так багато операндів.<br/>
                        Синтаксис:<br/>
                            <pre><p>
                                <span>
                                    let result = умова ? значення1 : значення2;
                                </span>
                            </p></pre>
                            Спочатку обчислюється умова: якщо вона є правдивою, тоді повертається значення1, інакше – значення2.<br/>
                            Наприклад:
                            <pre><p>
                                <span>
                                let accessAllowed = (age &gt; 18) ? true : false;
                                </span>
                            </p></pre>
                        <h4>Логічні оператори</h4>
                        <h5>|| (АБО)</h5>
                        Оператор “АБО” представлений двома символами вертикальної лінії:<br/>
                            <p>
                                <pre><span>
                                result = a || b;
                                </span></pre>
                            </p>
                            Якщо будь-який з його аргументів означає true, повертається true, інакше повертається false.
                            <h5>&& (І)</h5>
                            Оператор І представлений двома амперсандами &&:
                            <p>
                                <pre><span>
                                result = a && b;
                                </span></pre>
                            </p>
                            Повертає true, якщо обидва оператори є правдивими, і false в іншому випадку
                            <h5>! (НЕ)</h5>
                            Булевий оператор НЕ представлений знаком оклику !.
                            <p id="tenth">
                                <pre><span>
                                result = !value;
                                </span></pre>
                            </p>
                            Оператор приймає один аргумент і виконує наступне: <br/>
                            &emsp;1. Перетворює операнд на булевий тип: true/false.<br/>
                            &emsp;2. Повертає зворотне значення.
                </p>
                <h3>Цикли: while і for</h3>
                <p className={style.last}>
                    Цикл – це спосіб повторити один і той же код кілька разів.<br/>
                    <h4>Цикл “while”</h4>
                    Цикл while має такий синтаксис:
                    <pre><p>
                        <span>
                        while (умова) &#123;<br/>
                        &emsp;&frasl;	&frasl; код <br/>
                        &emsp;&frasl;	&frasl; так зване "тіло циклу" <br/>
                        &#125; <br/>
                        </span>
                    </p></pre>
                    Доки умова є вірною, виконується код із тіла циклу.
                    <h4>Цикл “for”</h4>
                    Цикл for є більш складним, але також є часто використовуваним циклом.
                    <p>
                        <pre><span>
                        for (початок; умова; крок) &#123; <br/>
                        &emsp; &frasl;	&frasl;... тіло циклу ...<br/>
                        &#125;
                        </span></pre>
                    </p>
                    Зазвичай, цикл завершується, коли умова стає false. <a id="eleventh"></a>
                    Але ми можемо в будь-який момент вийти з циклу, використавши спеціальну директиву break.<br/>
                    Директива continue — це “полегшена версія” break. Вона не зупиняє весь цикл. Натомість, вона зупиняє поточну ітерацію і починає виконання циклу спочатку з наступної ітерації (якщо умова циклу досі вірна).
                    Її зручно використовувати коли закінчили з поточною ітерацією і хочемо продовжити з наступної.
                </p>
                <h3>Конструкція "switch"</h3>
                <p className={style.last}>
                Конструкція switch може замінити кілька if.
                Вона дає можливість більш наочного способу порівняння значення відразу з кількома варіантами.<br/>
                Конструкція switch має один або більше case блоків та необов’язковий блок default
                    <p>
                        <pre><span>
                        switch(x) &#123; <br/>
                        case 'value1': &emsp; // if (x === 'value1') <br/>
                            ...<br/>
                            [break] <br/>

                        case 'value2': &emsp; // if (x === 'value2') <br/>
                            ... <br/>
                            [break] <br/><a id="last"></a>

                        default: <br/>
                            ...<br/>
                            [break]
                            &#125;
                        </span></pre>
                    </p>
                </p>
                <h3>Функції</h3>
                <p>
                Досить часто нам потрібно виконати однакову дію в декількох місцях програми.
                Наприклад, нам треба показати якесь повідомлення, коли користувач входить або виходить з системи і може ще десь.
                Функції — це головні “будівельні блоки” програми. Вони дозволяють робити однакові дії багато разів без повторення коду.
                <h4>Оголошення (декларація) функцій</h4>
                Спочатку ми пишемо function — це ключове слово (keyword), яке дає зрозуміти комп’ютеру, що далі буде оголошення функції. Потім — назву функції і список її параметрів в дужках (розділені комою). Якщо параметрів немає, ми залишаємо пусті дужки. І нарешті, код функції, який також називають тілом функції між фігурними дужками.
                    <p>
                        <pre><span>
                        function name(parameter1, parameter2, ... parameterN) &#123;<br/>
                        &emsp;...тіло функції...<br/>
                        &#125;
                        </span></pre>
                    </p>                  
                    Значення, які передаються в функцію в якості параметрів, копіюються в локальні змінні. <br/>
                    Функції мають доступ до зовнішніх змінних. Але це працює тільки зсередини назовні. Код поза функцією не має доступу до локальних змінних функції.<br/>
                    Функція може повертати значення. Якщо цього не відбувається, результат буде undefined.<br/>
                    Для того, щоб зробити код чистим і зрозумілим, рекомендується використовувати локальні змінні і параметри функції, не користуватися зовнішніми змінними.

                    Завжди легше зрозуміти функцію, яка отримує параметри, працює з ними і повертає результ. На відмінну від функції, в якої немає параметрів, але яка змінює зовнішні змінні, що може призводити до побічних ефектів.
                <h4>Функціональні вирази</h4>
                Існує й інший синтаксис для створення функції, що називають <span>Функціональним Виразом</span> (Function Expression).<br/>
                Він дозволяє створювати функцію всередині будь-якого виразу.<br/>
                Наприклад:
                    <p>
                        <pre><span>
                        let sayHi = function() &#123;<br/>
                            &emsp;alert( "Привіт" );<br/>
                        &#125;
                        </span></pre>
                    </p>
                <h4>Стрілкові функції, основи</h4>
                Існує ще один простий та короткий синтаксис для створення функцій, який часто доцільніше використовувати замість Функціонального Виразу.<br/>
                Це так звані “стрілкові функції”, а виглядають вони ось так:
                    <p>
                        <pre><span>
                            let func = (arg1, arg2, ..., argN) =&gt; expression;
                        </span></pre>
                    </p>
                    Цей код створить функцію func з аргументами arg1..argN, що обчислює expression з правого боку (використовуючи ці аргументи) та повертає його результат.<br/>
                    Іншими словами, це приблизно те ж саме, що і:
                    <p className={style.last}>
                        <pre><span>
                        let func = function(arg1, arg2, ..., argN) &#123;<br/>
                            &emsp;return expression;<br/>
                        &#125;;
                        </span></pre>
                    </p>
                </p>
            </div>
            </div>
        </div>
    );
};

export default Aboutjs;