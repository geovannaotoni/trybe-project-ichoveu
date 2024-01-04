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

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
