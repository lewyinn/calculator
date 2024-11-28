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

let binaryValue = ''; // Menyimpan input Binary
let historyValue = '' // Menyimpan hasil konversi terakhir 

function appendBinary(value) {
    binaryValue += value;
    document.getElementById('display').textContent = binaryValue;
}

function calculate() {
    if (binaryValue) {
        const decimalValue = parseInt(binaryValue, 2) //Konversi Binar ke Decimal
        document.getElementById('display').textContent = decimalValue;
        historyValue = binaryValue // Simpan Ke History
        document.getElementById('history').textContent = binaryValue;
        binaryValue = '';
    }
}

function deleteLast() {
    if (binaryValue.length > 0) {
        binaryValue = binaryValue.slice(0, -1);
        document.getElementById('display').textContent = binaryValue || '0';
    }
}

function clearAll() {
    binaryValue = '0';
    historyValue = '';
    document.getElementById('display').textContent = binaryValue;
    document.getElementById('history').textContent = historyValue;
}




let binaryValueDecimal = ''; // Menyimpan input Binary
let historyValueDecimal = '' // Menyimpan hasil konversi terakhir 

function appendDecimal(value) {
    binaryValueDecimal += value;
    document.getElementById('displayDecimal').textContent = binaryValueDecimal;
}

function binaryResult() {
    if (binaryValueDecimal) {
        const decimalValueDecimal = parseInt(binaryValueDecimal, 10).toString(2) //Konversi Binar ke Decimal
        document.getElementById('displayDecimal').textContent = decimalValueDecimal;
        historyValueDecimal = binaryValueDecimal // Simpan Ke History
        document.getElementById('historyDecimal').textContent = binaryValueDecimal;
        binaryValueDecimal = '';
    }
}

function deleteLastDecimal() {
    if (binaryValueDecimal.length > 0) {
        binaryValueDecimal = binaryValueDecimal.slice(0, -1);
        document.getElementById('displayDecimal').textContent = binaryValueDecimal || '0';
    }
}

function clearAllDecimal() {
    binaryValue = '0';
    historyValue = '';
    document.getElementById('displayDecimal').textContent = binaryValue;
    document.getElementById('historyDecimal').textContent = historyValue;
}
