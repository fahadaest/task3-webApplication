// function for adding products
function addProduct() {
    var tr = document.createElement("tr");

    // Checkbox
    var checkboxTd = document.createElement("td");
    var checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox";
    checkboxInput.name = "checkbox";
    checkboxInput.value = "checkbox";
    var checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", "checkbox");
    checkboxTd.appendChild(checkboxInput);
    checkboxTd.appendChild(checkboxLabel);
    tr.appendChild(checkboxTd);

    // Product Id
    var id = generateId();
    var td0 = document.createElement("td");
    td0.innerHTML = id;
    tr.appendChild(td0);

    // Product Name
    var productName = document.getElementById("inputName").value;
    var td1 = document.createElement("td");
    td1.innerHTML = productName;
    tr.appendChild(td1);

    // Product Title
    var productTitle = document.getElementById("inputTitle").value;
    var td2 = document.createElement("td");
    td2.innerHTML = productTitle;
    tr.appendChild(td2);

    // Product Description
    var productDescription = document.getElementById("inputDescription").value;
    var td3 = document.createElement("td");
    td3.innerHTML = productDescription;
    tr.appendChild(td3);

    // Product Vendor
    var productVendor = document.getElementById("inputVendor").value;
    var td4 = document.createElement("td");
    td4.innerHTML = productVendor;
    tr.appendChild(td4);

    // Product Type
    var productTypeSelect = document.getElementById("inputState");
    var selectedProductType = productTypeSelect.options[productTypeSelect.selectedIndex].text;
    var td5 = document.createElement("td");
    td5.innerHTML = selectedProductType;
    tr.appendChild(td5);

    // In Stock
    var inStock = document.getElementById("inputStock").value;
    var td6 = document.createElement("td");
    td6.innerHTML = inStock;
    tr.appendChild(td6);

    // Location
    var location = document.getElementById("inputLocation").value;
    var td7 = document.createElement("td");
    td7.innerHTML = location;
    tr.appendChild(td7);

    // Buying Price
    var buyingPrice = document.getElementById("inputBuyPrice").value;
    var td8 = document.createElement("td");
    td8.innerHTML = buyingPrice;
    tr.appendChild(td8);

    // Sale Price
    var salePrice = document.getElementById("inputSalePrice").value;
    var td9 = document.createElement("td");
    td9.innerHTML = salePrice;
    tr.appendChild(td9);

    // Purchase Quantity
    var purchaseQuantity = document.getElementById("inputPurQuan").value;
    var td10 = document.createElement("td");
    td10.innerHTML = purchaseQuantity;
    tr.appendChild(td10);

    // Shipping Rates
    var shippingRates = document.getElementById("shippingRate").value;
    var td11 = document.createElement("td");
    td11.innerHTML = shippingRates;
    tr.appendChild(td11);

    // Refill Limit
    var refillLimit = document.getElementById("inputRefill").value;
    var td12 = document.createElement("td");
    td12.innerHTML = refillLimit;
    tr.appendChild(td12);

    console.log(tr);

    document.getElementById("dataTableContent").appendChild(tr);
    alert("Product added")

    storeDataToLocalStorage();

    resetFormValues();
}

// function will reset form values to ad product
function resetFormValues() {
    document.getElementById("inputName").value = "";
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDescription").value = "";
    document.getElementById("inputVendor").value = "";
    document.getElementById("inputState").selectedIndex = 0;
    document.getElementById("inputStock").value = "";
    document.getElementById("inputLocation").value = "";
    document.getElementById("inputBuyPrice").value = "";
    document.getElementById("inputSalePrice").value = "";
    document.getElementById("inputPurQuan").value = "";
    document.getElementById("shippingRate").value = "";
    document.getElementById("inputRefill").value = "";
}

// it will generate a random id
function generateId() {
    return Math.floor(Math.random() * 900000) + 100000;
}


// Function to delete selected rows
function deleteTableRow() {
    const table = document.getElementById('dataTableContent');
    const rows = table.rows;

    for (let i = rows.length - 1; i > 0; i--) {
        const row = rows[i];
        const checkbox = row.cells[0].querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            table.deleteRow(i);
        }
    }

    storeDataToLocalStorage();
    alert("product deleted");
}



// function to edit row
function editRow() {
    const table = document.getElementById('dataTableContent');
    const checkedRowsData = [];

    for (let i = 1; i < table.rows.length; i++) {
        const rowData = {};
        const row = table.rows[i].cells;

        const firstCell = row[0];
        const checkbox = firstCell.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            console.log(i)
            for (let j = 2; j < row.length; j++) {
                const key = table.rows[0].cells[j].classList[0];
                const value = row[j].textContent.trim();

                rowData[key] = value;
            }

            checkedRowsData.push(rowData);
        }
    }


    var inputElement = document.getElementById('editInputName');
    inputElement.value = checkedRowsData[0].pro_name;

    var inputElement1 = document.getElementById('EditInputTitle');
    inputElement1.value = checkedRowsData[0].pro_title;

    var inputElement2 = document.getElementById('EinputDescription');
    inputElement2.value = checkedRowsData[0].pro_des;

    var inputElement3 = document.getElementById('VinputVendor');
    inputElement3.value = checkedRowsData[0].pro_ven;

    var inputElement4 = document.getElementById('EinputState');
    inputElement4.value = checkedRowsData[0].pro_type;

    var inputElement5 = document.getElementById('EinputStock');
    inputElement5.value = checkedRowsData[0].pro_sto;

    var inputElement6 = document.getElementById('EinputLocation');
    inputElement6.value = checkedRowsData[0].pro_loc;

    var inputElement7 = document.getElementById('EinputBuyPrice');
    inputElement7.value = checkedRowsData[0].pro_pri;

    var inputElement8 = document.getElementById('EinputSalePrice');
    inputElement8.value = checkedRowsData[0].pro_sale;


    var inputElement9 = document.getElementById('EinputPurQuan');
    inputElement9.value = checkedRowsData[0].pro_quan;


    var inputElement10 = document.getElementById('EshippingRate');
    inputElement10.value = checkedRowsData[0].pro_ship;


    var inputElement11 = document.getElementById('EinputRefill');
    inputElement11.value = checkedRowsData[0].pro_refill;

    // Show the modal
    $('#editModal').modal('show');

}



// function to update row
function updateRow() {

    const table = document.getElementById('dataTableContent');
    const checkedRowsData = [];

    for (let i = 1; i < table.rows.length; i++) {
        const rowData = {};
        const row = table.rows[i].cells;
        const firstCell = row[0];
        const checkbox = firstCell.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            const checkedRow = table.rows[i];
            checkedRow.cells[2].textContent = document.getElementById('editInputName').value;
            checkedRow.cells[3].textContent = document.getElementById('EditInputTitle').value;
            checkedRow.cells[4].textContent = document.getElementById('EinputDescription').value;
            checkedRow.cells[5].textContent = document.getElementById('VinputVendor').placeholder;
            checkedRow.cells[6].textContent = document.getElementById('EinputState').value;
            checkedRow.cells[7].textContent = document.getElementById('EinputStock').value;
            checkedRow.cells[8].textContent = document.getElementById('EinputLocation').value;
            checkedRow.cells[9].textContent = document.getElementById('EinputBuyPrice').value;
            checkedRow.cells[10].textContent = document.getElementById('EinputSalePrice').value;
            checkedRow.cells[11].textContent = document.getElementById('EinputPurQuan').value;
            checkedRow.cells[12].textContent = document.getElementById('EshippingRate').value;
            checkedRow.cells[13].textContent = document.getElementById('EinputRefill').value;
        }
    }

    storeDataToLocalStorage();
    alert("data Updated");
}