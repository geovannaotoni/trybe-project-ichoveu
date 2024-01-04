export const searchCities = async (term) => {
  try {
    const token = import.meta.env.VITE_TOKEN;
    // https://www.weatherapi.com/docs/
    const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

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
    const token = import.meta.env.VITE_TOKEN;
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
