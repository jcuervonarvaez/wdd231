const params = new URLSearchParams(window.location.search);

const timestampStr = params.get('timestamp');
const timestampNum = timestampStr ? Number(timestampStr) : null;

const data = {
    'First Name': params.get('firstname'),
    'Last Name': params.get('lastname'),
    'Email': params.get('email'),
    'Phone': params.get('phone'),
    'Service': params.get('service'),
    'Message': params.get('message'),
    'Timestamp': timestampNum && !isNaN(timestampNum)
        ? new Date(timestampNum).toLocaleString()
        : 'Not captured'
};

const dl = document.getElementById('submitted-data');

for (const [key, value] of Object.entries(data)) {
    if (value) {
        const dt = document.createElement('dt');
        dt.textContent = key;

        const dd = document.createElement('dd');
        dd.textContent = value;

        dl.appendChild(dt);
        dl.appendChild(dd);
    }
}
