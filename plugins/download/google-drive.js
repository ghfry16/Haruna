exports.default = {
   names: ['Downloader'],
   tags: ['googledrive'],
   command: ['gdrive', 'googledrive', 'drive'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`)
      m.react("🕒");
      let res = await Format.gdrive(text);
      if (!res) throw res;
      let drive = ` ${star} 𝐆𝐎𝐆𝐆𝐋𝐄 𝐃𝐑𝐈𝐕𝐄\n`
      drive += ` ${java} Name: ${res.fileName}\n`
      drive += ` ${java} Type: ${res.mimetype}\n`
      drive += ` ${java} Size: ${res.fileSize}\n`
      conn.adReply(m.chat, drive, cover, m).then(() => {
         conn.sendFile(m.chat, res.downloadUrl, '', m, {
            document: true,
            fileName: res.fileName,
            mimetype: res.mimetype
         })
      })
   },
   limit: 1,
   premium: false
};