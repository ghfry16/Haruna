exports.default = {
   names: ['Maker'],
   tags: ['stickergif', 'sgif'],
   command: ['stickergif', 'sgif'],
   start: async (m, {
      conn,
      prefix,
      command,
      mime,
      quoted
   }) => {
      let pack = setting.botName
      let own = setting.footer
      if (/video/.test(mime) || m.mtype === 'videoMessage') {
         if (!quoted) return
         let buffer = await quoted.download();
         m.react("🕒");
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: pack,
            author: own
         });
      } else {
         return m.reply(`Kirim video dengan caption ${prefix+command} atau balas video yang sudah dikirim`);
      }
   },
   limit: 1
};