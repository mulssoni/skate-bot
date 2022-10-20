const axios = require("axios");

module.exports = async () => {
  try {
    const res = await axios.get(
      "https://skate-api.netlify.app/.netlify/functions/trasher"
    );
    let arr = [];
    const str =
      res.data?.map((item) => arr.push(`${item.title}\n${item.link}`)) ||
      "No videos!";
    return arr.join("\n\n");
  } catch {
    return "Couldn't get new videos";
  }
};
