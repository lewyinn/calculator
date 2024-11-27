const themeToggleButton = document.getElementById('theme-toggle');

// Cek preferensi tema yang disimpan di localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('svg.darkTheme').style.display = 'none';
    document.querySelector('svg.brigthTheme').style.display = 'inline-block';
}

// Menambahkan event listener untuk tombol tema
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        document.querySelector('svg.darkTheme').style.display = 'none';
        document.querySelector('svg.brigthTheme').style.display = 'inline-block';
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('svg.darkTheme').style.display = 'inline-block';
        document.querySelector('svg.brigthTheme').style.display = 'none';
    }
});

class Calculator {
    constructor(displayElement, historyElement) {
        this.displayElement = displayElement;
        this.historyElement = historyElement
        this.clear();
    }
    
    clear() {
        this.expression = '';
        this.history = '';
        this.updateDisplay();
        this.updateHistory();
    }

    deleteLast() {
        this.expression = this.expression.slice(0, -1);
        this.updateDisplay();
    }

    appendNumber(number) {
        this.expression += number;
        this.updateDisplay();
    }

    setOperator(operator) {
        if (this.expression === '') return;
        const lastChar = this.expression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            this.expression = this.expression.slice(0, -1) + operator;
        } else {
            this.expression += operator;
        }
        this.updateDisplay();
    }

    calculate() {
        if (!this.expression) return;
        try {
            const result = eval(this.expression);
            this.history = `${this.expression} = ${result}`;
            this.expression = result.toString();
            this.updateHistory();
            this.updateDisplay();
        } catch {
            this.expression = 'Error';
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.displayElement.innerText = this.expression || '0';
    }

    updateHistory() {
        this.historyElement.innerText = this.history;
    }
}

const display = document.getElementById('display');
const history = document.getElementById('history');
const calculator = new Calculator(display, history);

function appendNumber(number) {
    calculator.appendNumber(number);
}

function setOperator(operator) {
    calculator.setOperator(operator);
}

function calculateResult() {
    calculator.calculate();
}

function clearAll() {
    calculator.clear();
}

function deleteLast() {
    calculator.deleteLast();
}