exports.default = {
   names: ['Maker'],
   tags: ['bratvid'],
   command: ['bratvid', 'bratvideo'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} ${setting.botName}`);
      m.react("🕒");
      const result = await BUFFER_URL(`https://brat.zellray.my.id/animate?text=${text}`);
      {           
         conn.sendImageAsSticker(m.chat, result, m, {
           packname: setting.botName,
           author: `${setting.footer}\nDibuat : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         })
      }
   },
   limit: 1
}