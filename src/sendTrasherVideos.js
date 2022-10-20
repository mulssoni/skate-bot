const axios = require("axios");

module.exports = async () => {
  try {
    const res = await axios.get(
      "https://skate-api.netlify.app/.netlify/functions/trasher"
    );
    const str = "";
    res.data?.array.forEach((item) => {
      str.concat(`${item.title}\n${item.link}\n\n`);
    }) || "No videos!";
    return str;
  } catch {
    return "Couldn't get new videos";
  }
};
