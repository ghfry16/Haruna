const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['waifu'],
   command: ['waifu'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/waifu.json')).json();
      m.react("🕒");
      const waifu = pickRandom(data);
      conn.sendFile(m.chat, waifu, {
         caption: 'Waifu',
         quoted: m
      })
   },
   limit: 1
}