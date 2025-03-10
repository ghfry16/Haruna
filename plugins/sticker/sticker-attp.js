exports.default = {
   names: ['Maker'],
   tags: ['attp', 'ttp'],
   command: ['attp', 'ttp'],
   start: async (m, {
      conn,
      prefix,
      text,
      command,
      Format
   }) => {
      let pack = setting.botName
      let own = setting.footer
      if (!text) return m.reply(`Example : ${prefix+command} ${setting.botName}`);
      m.react("🕒");
      let result = await Format.attp(text);
      {            
         conn.sendImageAsSticker(m.chat, result, m, {
           packname: pack,
           author: `${own}\nDibuat : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         })
      }
   },
   limit: 1
};
