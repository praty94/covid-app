export const countryValidator = (country) => {
    return country.match("^/covid-app/country/") ? country : null;
}

export const getCountry = (country) => {
    if(country && country.match("^/covid-app/country/"))
        return country.replace("/covid-app/country/", "");
    else
        return "";
}