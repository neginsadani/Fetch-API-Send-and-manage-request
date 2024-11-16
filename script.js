"use strict";

function getCountry(countryName) {
  const resultDiv = document.getElementById("result");

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function (response) {
      if (!response.ok) {
        resultDiv.innerHTML = "Country not found";
        return;
      }
      return response.json();
    })
    .then(function (data) {
      if (data && data.length > 0) {
        const country = data[0];
        const countryInfo = `  
                    <h2>${country.name.common}</h2>  
                    <p> Capital: ${
                      country.capital ? country.capital[0] : "Not available"
                    }</p>  
                    <p>Population: ${country.population}</p>  
                `;
        resultDiv.innerHTML = countryInfo;
      }
    })
    .catch(function (error) {
      resultDiv.innerHTML = "Error: Please check your internet connection.";
    });
}

document.getElementById("germanyBtn").addEventListener("click", function () {
  getCountry("germany");
});

document.getElementById("invalidBtn").addEventListener("click", function () {
  getCountry("dfwsewv");
});
