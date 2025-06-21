// ========================================
// Module 9: Promises & Async-Await
// ========================================
// - async/await syntax
// - try/catch for error handling
// - Comparison: .then() vs await
// - Real-world API fetch with await
// - Convert a chain into async/await version





async function getWeather(city) {
  try {
    const res = await fetch(`https://api.weatherapi.com/${city}`);
    const data = await res.json();
    console.log(`${city} weather: ${data.temp}°C`);
  } catch (e) {
    console.error("Could not load weather:", e);
  }
}
