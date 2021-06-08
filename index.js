const axios = require("axios").default;
const protocol = "http";
const serverIp = "19.0.0.4";
const weatherDatesData = "./weatherDateData.json";
const path = 2;
const intervalInMinutes = 60;

const readArrayFromTxt = fileToRead => require(fileToRead);

const updateFile = async fileName => {
  axios.post(`${protocol}://${serverIp}/${path}`, readArrayFromTxt(fileName), {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

setInterval(updateFile, intervalInMinutes * 1000 * 60, weatherDatesData);
