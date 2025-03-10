const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['neko2'],
   command: ['neko2'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://nekos.life/api/v2/img/waifu')).json();
      m.react("🕒");
      const neko2 = data.url
      conn.sendFile(m.chat, neko2, {
         caption: 'Neko',
         quoted: m
      })
   },
   limit: 1
}