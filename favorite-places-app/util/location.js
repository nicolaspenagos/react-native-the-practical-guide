// Location features were mocked to avoid using google API
export const getAdresssMock = async (lat, lng) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const streets = ["Maple", "Oak", "Cedar", "Elm", "Pine"];
  const cities = [
    "Springfield",
    "Rivertown",
    "Meadowville",
    "Lakeview",
    "Hilltop",
  ];
  const states = ["CA", "NY", "TX", "FL", "IL"];
  const zipCode = Math.floor(Math.random() * 90000) + 10000; // Generate a random 5-digit zip code

  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomState = states[Math.floor(Math.random() * states.length)];

  const address = `${
    Math.floor(Math.random() * 1000) + 1
  } ${randomStreet} St, ${randomCity}, ${randomState} ${zipCode}`;

  return address;
};
