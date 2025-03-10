exports.default = {
   names: ['Internet'],
   tags: ['gemini', 'gem'],
   command: ['gemini', 'gem'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} apa kabar?`);
      m.react('🕐');
      const data = await Format.gemini(text);
      {
         conn.adReply(m.chat, data, cover, m, {
            showAds: true
         });
      }
   },
   limit: 1
}