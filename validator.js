let codeEditor = null;
let originalConsoleLog = console.log;
let output = [];

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация редактора кода
    const textarea = document.getElementById('code-editor');
    codeEditor = CodeMirror.fromTextArea(textarea, {
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Ctrl-Space': 'autocomplete'
        }
    });

    // Сохранение оригинального console.log
    originalConsoleLog = console.log;

    // Инициализация Prettier
    if (typeof prettier !== 'undefined' && typeof prettierParserBabel !== 'undefined') {
        window.prettierPlugins = {
            babel: prettierParserBabel
        };
        console.log('Prettier и парсер успешно инициализированы');
    } else {
        console.error('Ошибка: Prettier или парсер не загружены');
    }
});

function validateCode() {
    const code = codeEditor.getValue();
    const stats = document.getElementById('stats');
    
    try {
        // Попытка разобрать код
        new Function(code);
        stats.innerHTML = '<span class="success">✓ Код валиден</span>';
    } catch (error) {
        stats.innerHTML = `<span class="error">✗ Ошибка: ${error.message}</span>`;
    }
}

function formatCode() {
    const code = codeEditor.getValue();
    const stats = document.getElementById('stats');

    if (typeof prettier === 'undefined' || typeof window.prettierPlugins === 'undefined') {
        stats.innerHTML = '<span class="error">✗ Prettier или парсер не загружены</span>';
        return;
    }

    try {
        const formattedCode = prettier.format(code, {
            parser: 'babel',
            plugins: window.prettierPlugins,
            semi: true,
            singleQuote: true,
            tabWidth: 4,
            printWidth: 80
        });

        codeEditor.setValue(formattedCode);
        stats.innerHTML = '<span class="success">✓ Код отформатирован</span>';
    } catch (error) {
        stats.innerHTML = `<span class="error">✗ Ошибка форматирования: ${error.message}</span>`;
    }
}

function executeCode() {
    const code = codeEditor.getValue();
    const stats = document.getElementById('stats');
    const outputDiv = document.getElementById('execution-output');
    const outputContent = document.getElementById('output-content');

    // Очистка предыдущего вывода
    output = [];
    outputContent.textContent = '';
    outputDiv.style.display = 'none';

    // Переопределение console.log для захвата вывода
    console.log = function(...args) {
        output.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
        originalConsoleLog.apply(console, args);
    };

    try {
        // Выполнение кода
        new Function(code)();
        
        // Восстановление оригинального console.log
        console.log = originalConsoleLog;

        // Отображение результатов
        if (output.length > 0) {
            outputContent.textContent = output.join('\n');
            outputDiv.style.display = 'block';
            stats.innerHTML = '<span class="success">✓ Код выполнен успешно</span>';
        } else {
            stats.innerHTML = '<span class="success">✓ Код выполнен, вывод отсутствует</span>';
        }
    } catch (error) {
        // Восстановление оригинального console.log в случае ошибки
        console.log = originalConsoleLog;
        stats.innerHTML = `<span class="error">✗ Ошибка выполнения: ${error.message}</span>`;
    }
}

function clearEditor() {
    if (codeEditor) {
        codeEditor.setValue('');
        document.getElementById('stats').innerHTML = 'Ожидание проверки...';
        document.getElementById('execution-output').style.display = 'none';
        document.getElementById('output-content').textContent = '';
    }
} 