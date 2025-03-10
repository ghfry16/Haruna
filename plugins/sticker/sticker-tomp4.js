exports.default = {
   names: ['Maker'],
   tags: ['tomp4', 'tovideo'],
   command: ['tomp4', 'tovideo'],
   start: async (m, {
      conn,
      quoted,
      mime,
      prefix,
      command,
      Format
   }) => {
      if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption *${prefix + command}*`)
      m.react("🕒");
      let media = await conn.downloadAndSaveMediaMessage(quoted)
      let webpToMp4 = await Format.webp2mp4File(media)
      conn.sendFile(m.chat, webpToMp4.result, {
         caption: "Berhasil Ke Video",
         quoted: m
      })
   },
   limit: 1
};