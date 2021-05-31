// UC-12 View Person Address Details in a Tabular Format 
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip-Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let addressBookList = createAddressBookJSON();
    for(const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
            <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
    let addressBookLocal = [
        {
            _name: 'Rakesh S R',
            _address: 'Siddanuru',
            _city: 'Davanagere',
            _state: 'Karnataka',
            _zip: '577556',
            _phone: '8612357400',
        },
        {
            _name: 'Range Gowda',
            _address: 'T N Halli',
            _city: 'Chitradurga',
            _state: 'Karnataka',
            _zip: '100200',
            _phone: '7894561211',
        }
    ];
    return addressBookLocal;
}