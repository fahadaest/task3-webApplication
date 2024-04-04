// save data to local storage
function storeDataToLocalStorage() {
    const table = document.getElementById('dataTableContent');
    const tableData = [];
    for (let i = 1; i < table.rows.length; i++) {
        const rowData = {};
        const row = table.rows[i].cells;
        const firstCell = row[0];
        const checkbox = firstCell.querySelector('input[type="checkbox"]');
        rowData['firstCheckbox'] = checkbox.checked;
        for (let j = 1; j < row.length; j++) {
            const key = table.rows[0].cells[j].classList[0];
            const value = row[j].textContent.trim();
            rowData[key] = value;
        }
        tableData.push(rowData);
    }
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

//Function to retrieve data from local storage and populate the table
function retrieveDataFromLocalStorage() {
    const tableData = JSON.parse(localStorage.getItem('tableData'));
    if (tableData) {
        const table = document.getElementById('dataTableContent');
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }
        tableData.forEach(data => {
            const row = table.insertRow(-1);
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = data['firstCheckbox'];
            const cell = row.insertCell();
            cell.appendChild(checkbox);
            Object.keys(data).slice(1).forEach(key => {
                const cell = row.insertCell();
                cell.innerHTML = `<p>${data[key]}</p>`;
            });
        });
        sortTableByColumn(table, 0, true);
    }
}