"use strict";
const axios = require("axios");

module.exports = {
  action: async (input, options) => {
    const server = options.server.trim().replace(/\/$/, "");
    const apiKey = options.apikey.trim();
    const longUrl = input.text.trim();

    try {
      const response = await axios.post(
        `${server}/rest/v3/short-urls`,
        { longUrl: longUrl },
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
            "User-Agent": "PopClip-Shlink-Extension-JS"
          },
        }
      );

      return response.data.shortUrl;
      
    } catch (error) {
      print(`Shlink Error: ${error.message}`);
      if (error.response) {
        print(`Status: ${error.response.status}`);
        print(`Data: ${JSON.stringify(error.response.data)}`);
      }
      
      return null;
    }
  },
};