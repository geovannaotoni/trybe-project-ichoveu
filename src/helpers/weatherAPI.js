const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    // https://www.weatherapi.com/docs/
    const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getWeatherByCity = async (cityURL) => {
  try {
    const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;
    const response = await fetch(url);
    const data = await response.json();

    const cityInfo = {
      name: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      url: cityURL,
    };
    return cityInfo;
  } catch (error) {
    console.log(error);
  }
};

export const getForecastByCity = async (cityURL) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${cityURL}&days=7`;
    const response = await fetch(url);
    const data = await response.json();
    const forecastInfo = data.forecast.forecastday.map((day) => ({
      date: day.date,
      maxTemp: day.day.maxtemp_c, // temperatura em graus celsius
      minTemp: day.day.mintemp_c, // temperatura em graus celsius
      condition: day.day.condition.text,
      icon: day.day.condition.icon,
    }));
    // console.log(forecastInfo);
    return forecastInfo;
  } catch (error) {
    console.log(error);
  }
};
