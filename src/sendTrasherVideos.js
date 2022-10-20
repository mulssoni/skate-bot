const axios = require("axios");

module.exports = async () => {
  try {
    const res = await axios.get(
      "https://skate-api.netlify.app/.netlify/functions/trasher"
    );
    const str =
      JSON.stringify(
        res.data?.map((item) => `${item.title}\n${item.link}\n\n`)
      ) || "No videos found";
    return str;
  } catch {
    return "Couldn't get new videos";
  }
};
