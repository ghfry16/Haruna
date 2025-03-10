exports.default = {
   names: ['Internet'],
   tags: ['ai', 'chatgpt', 'openai'],
   command: ['ai', 'chatgpt', 'openai'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} apa kabar?`);
      m.react('🕒');
      const data = await JSON_URL('https://api.riskimivan.my.id/api/ai?prompt=' + text);
      {
         conn.adReply(m.chat, data, cover, m, {
            showAds: true
         });
      }
   },
   limit: 1
}