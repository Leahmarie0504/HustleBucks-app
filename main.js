// Grab forms 
const loginForm = document.getElementById('login-form');
const incomeForm = document.getElementById('income-form');

// LocalStorage helpers

// Fetches JSON string from local 
function loadEntries() {
    const raw = localStorage.getItem('incomeEntries');
    return raw ? JSON.parse(raw) : [];
    }
//Saves array to local
function saveEntries(list) {
    localStorage.setItem('incomeEntries', JSON.stringify(list));
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
        alert(`Welcome back, ${user}!`);
        
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
            alert('Date and a numeric amount are required');
            return;
        }

        //Load entries, append new 
        const entries = loadEntries();
        entries.push({date, amount:amt, description:desc});
        saveEntries(entries);

        //Confirm & reset
        alert('Income logged!');
        incomeForm.reset();
    });

    //History page rendering//
    const historyTable = document.getElementById('history-table')?.querySelector('tbody');

    if(historyTable) {
        //load entries from local
        const entries = loadEntries();

        if (entries.length === 0) {
            //show a "no data" row
            const tr = document.createElement('tr');
            tr.innerHTML = '<td colspan="3" style="text-align:center;">No entries logged yet.</td>';
            historyTable.appendChild(tr);
        } else {
            //create row for each entry
            entries.forEach(({ date, amount, description }) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${date}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>${description || '—'}</td>
      `;
      historyTable.appendChild(tr);
    });
        }    
    }
}