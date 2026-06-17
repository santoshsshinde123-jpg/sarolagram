export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Shrigonda,IN&units=metric&appid=${apiKey}`
  );

  const data = await response.json();

  return Response.json(data);
}