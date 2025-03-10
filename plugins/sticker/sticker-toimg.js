const fs = require('fs');
const { exec } = require('child_process');
exports.default = {
   names: ['Maker'],
   tags: ['toimage'],
   command: ['toimg', 'toimage'],
   start: async (m, {
      conn,
      prefix,
      quoted,
      mime,
      command,
      Format
   }) => {
      if (!/webp|image/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`);
      m.react("🕒");
      const media = await conn.downloadAndSaveMediaMessage(quoted);
      const ran = `tmp/${Date.now()}.png`;
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
         if (err) return m.reply(`${err}`);
         const buffer = fs.readFileSync(ran);
         conn.sendFile(m.chat, buffer, {
            caption: "Berhasil Ke Image",
            quoted: m
         })
      })
   },
   limit: 1
};