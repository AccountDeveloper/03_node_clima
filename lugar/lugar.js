/*

const getLugar = async(dir) => {
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'cf40d53526msh17f5989d2641a6bp150a4cjsne859cdae5b32' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0 || resp.data.Results.length === null) {
        throw (`No hay resultado para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    return {
        direccion,
        latitud,
        longitud
    };
};

module.exports = {
    getLugar
}*/