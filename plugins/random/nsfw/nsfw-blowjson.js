const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['blowjob'],
   command: ['blowjob'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/blowjob.json')).json();
      m.react("🕒");
      const blowjob = pickRandom(data);
      conn.sendFile(m.chat, blowjob, {
         caption: 'Blowjob',
         quoted: m
      })
   },
   limit: 1
}