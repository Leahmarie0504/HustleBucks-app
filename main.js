// Grab forms 
const loginForm = document.getElementById('login-form');
const incomeForm = document.getElementById('income-form')

// LocalStorage helpers

// Fetches JSON string from local 
function loadEntries() {
    const raw = localStorage.getItem('incomeEntries');
    return raw ? JSON.parse(raw) : [];
    }
//Saves array to local
function saveEntries(list) {
    localStorage,setItem('incomeEntries', JSON.stringify(list));
}

// LOGIN HANDLER
if (loginForm) {
    loginForm.addEventListener( 'submit', e => {
        e.preventDefault(); //prevent page reload on form
        const user = loginForm.username.value.trim();
        const pass = loginForm.password.value;
        
        //Validate user
        if (!user || !pass) {
            alert('Both fields are required.');
            return;
        }
        alert('Welcome back, ${user!');
        
        //Redirect user to income logging page
        window.location.href = 'log_income.html';
    })
}

if (incomeForm) {
    incomeForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevent page reload

        const date = incomeForm.date.value;
        const amt = parseFloat(incomeForm.amount.value);
        const desc = incomeForm.description.value.trim();
        
        //Validate date & amount
        if (!date || isNaN(amt)) {
            alert('Date and a numberic amount are required');
            return;
        }

        //Load entries, append new 
        const entries = loadEntries();
        entries.push({date, amount:amt, description:desc});
        saveEntries(entries);

        //Confirm & reset
        alert('Income logged!');
        incomeForm.requestFullscreen();
    });
}
