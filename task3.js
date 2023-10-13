// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col


const fetchData = async () => {
    const res = await fetch('http://api.countrylayer.com/v2/all?access_key=f4de8d5e6476c3799b7d44366f355177');
    

    const country = await res.json();

    console.log(country);
};

fetchData();