import AsyncStorage from '@react-native-community/async-storage';

const Basic_Api="https://disease.sh/v3/covid-19/countries/angola?yesterday=1";
export default {
    getAll: async () => {
        const req = await fetch('https://disease.sh/v3/covid-19/all');
        const json = await req.json();
        return json;
    },
    getAngola: async () => {
        const req = await fetch('https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases');
        const json = await req.json();
        return json;
    },
    getAngolaPais: async () => {
        const req = await fetch('https://disease.sh/v3/covid-19/countries/angola?yesterday=true&sort=cases');
        const json = await req.json();
        return json;
    },
    getPaisHistorico: async (country) => {
        const req = await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=8`);
        const json = await req.json();
        return json;
    }

};