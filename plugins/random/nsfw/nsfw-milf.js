const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['milf'],
   command: ['milf'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/milf.json')).json();
      m.react("🕒");
      const milf = pickRandom(data);
      conn.sendFile(m.chat, milf, {
         caption: 'Milf',
         quoted: m
      })
   },
   limit: 1
}