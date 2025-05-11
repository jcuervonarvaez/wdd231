const today = new Date();
const currentDateElement = document.getElementById('currentYear');
const lastUpdatedElement = document.getElementById('lastModified');

currentDateElement.innerHTML = today.getFullYear();
lastUpdatedElement.innerHTML = `Last Modification: ${document.lastModified}`;
