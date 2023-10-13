// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://api.countrylayer.com/v2/all?access_key=39458b022e29ee2ca4a62fc65f085015${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};


const fetchCountryAndNeigbeors = async () => {
  const columbia = await fetchCountry("col");

  console.log(columbia);

  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border)
  ));

  console.log(neighbors);
};

fetchCountryAndNeigbeors();
