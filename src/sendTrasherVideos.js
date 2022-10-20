const axios = require("axios");
const { TRASHER_API_URL } = process.env;

module.exports = async () => {
  try {
    const res = await axios.get(`${TRASHER_API_URL}`);
    const str =
      res.data?.map((item) => `${item.title}\n${item.link}`) || "No videos!";
    return str.join("\n\n");
  } catch {
    return "Couldn't get new videos";
  }
};
