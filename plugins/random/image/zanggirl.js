const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['zanggirl'],
   command: ['zanggirl'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zanggirl.json')).json();
      m.react("🕒");
      const zanggirl = pickRandom(data);
      conn.sendFile(m.chat, zanggirl, {
         caption: 'Zanggirl',
         quoted: m
      })
   },
   limit: 1
}