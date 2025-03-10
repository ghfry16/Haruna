const fetch = require('node-fetch');
exports.default = {
   names: ['Internet'],
   tags: ['bingimg', 'bingimage'],
   command: ['bingimg', 'bingimage'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} pria di pantai`);
      m.react('🕒');
      const response = await (await fetch('https://widipe.com/bingimg?text=' + text)).json();
      const image = response.result;
      {
         for (let i of image) {
            conn.sendFile(m.chat, i, {
               caption: text,
               quoted: m
            })
         }
      }
   },
   limit: 1,
   register: true
}