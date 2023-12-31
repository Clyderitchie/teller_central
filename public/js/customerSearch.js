const customerSearch = async (event) => {
    event.preventDefault();

    const customerSearch = document.querySelector('#customerSearch').value.trim();

    console.log("customer", customerSearch);

    if (customerSearch) {
        const response = await fetch('/api/homepage', {
            method: 'POST',
            body: JSON.stringify({ customerSearch }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("response", response);
        if (response.ok) {
            // document.location.reload('/homepage/');
        } else {
            alert(response.statusText);
            console.log('Oh no something went wrong');
        }
    }
};

document
    .querySelector('.search-form')
    .addEventListener('submit', customerSearch)