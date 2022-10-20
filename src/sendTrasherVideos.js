const axios = require("axios");

module.exports = async () => {
  try {
    const res = await axios.get(
      "https://skate-api.netlify.app/.netlify/functions/trasher"
    );
    const str =
      res.data?.map((item) => `${item.title}\n${item.link}`) || "No videos!";
    return str.join("\n\n");
  } catch {
    return "Couldn't get new videos";
  }
};
