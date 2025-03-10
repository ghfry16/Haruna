exports.default = {
   names: ['Maker'],
   tags: ['brat'],
   command: ['brat'],
   start: async (m, {
      conn,
      prefix,
      text,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} ${setting.botName}`);
      m.react("🕒");
      const result = await BUFFER_URL(`https://aqul-brat.hf.space/?text=${text}`);
      {           
         conn.sendImageAsSticker(m.chat, result, m, {
           packname: setting.botName,
           author: `${setting.footer}\nDibuat : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         })
      }
   },
   limit: 1
}