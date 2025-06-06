const params = new URLSearchParams(window.location.search);

const labels = {
  firstname: "First Name",
  lastname: "Last Name",
  email: "Email",
  "mobile-phone-number": "Mobile Phone Number",
  "organization-name": "Organization Name",
  "organization-title": "Organization Title",
  membership_level: "Membership Level",
  description: "Description",
  timestamp: "Submitted At",
};

const container = document.getElementById("submission-data");

for (const key in labels) {
  if (params.has(key)) {
    let value = params.get(key);
    if (key === "timestamp") {
      const date = new Date(Number(value));
      value = date.toLocaleString();
    }

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `<strong>${labels[key]}:</strong> ${value}`;
    container.appendChild(paragraph);
  }
}
