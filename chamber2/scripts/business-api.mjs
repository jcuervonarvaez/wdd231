// URL to fetch business data
const url =
  "https://jcuervonarvaez.github.io/wdd231/chamber/scripts/members.json";

export async function fetchBusiness() {
  try {
    const response = await fetch(url, { method: "get" });
    const business = await response.json();
    return business;
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
    return [];
  }
}

export async function getRandomVIPBusiness(liimit = 3) {
  const businesses = await fetchBusiness();
  if (businesses.length === 0) {
    return [];
  }
  const vipBusinesses = businesses.filter(
    (business) => ["2", "3"].includes(business.membership_level)
  );
  const shuffled = vipBusinesses.sort(() => 0.5 - Math.random());
  const randomThree = shuffled.slice(0, 3);
  return randomThree;
}
