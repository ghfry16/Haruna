const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['yuri'],
   command: ['yuri'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/yuri.json')).json();
      m.react("🕒");
      const yuri = pickRandom(data);
      conn.sendFile(m.chat, yuri, {
         caption: 'Yuri',
         quoted: m
      })
   },
   limit: 1
}