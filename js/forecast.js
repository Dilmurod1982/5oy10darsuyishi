const KEY = "d1530aa5b1b3af93250ab35f97790768";

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&appid=${KEY}&units=metric`;
  overlay.classList.remove("d-none");
  const req = await fetch(base + query);
  const data = await req.json();
  overlay.classList.add("d-none");
  return data;
};

getData("London").then((result) => {
  //   console.log(result);
});
