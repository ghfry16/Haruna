const fetch = require('node-fetch');
const cheerio = require('cheerio');
exports.default = {
   names: ['Downloader'],
   tags: ['mediafire'],
   command: ['mediafire', 'mf'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Example : ${prefix+command} url_link`);
      m.react("🕒");
      const isLinks = text.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
      if (!isLinks) return m.reply('Link yang kamu berikan tidak valid');
      const { link, link2, name, filetype, ext, upload, size } = await mediafire(`${isLinks}`);
      const isType = filetype.toLowerCase() + "/" + ext.toLowerCase()
      let mediaFire = ` ${zw} 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄\n\n`
      mediaFire += ` Nama : ${name}\n`
      mediaFire += ` Size : ${size}\n`
      mediaFire += ` Type : ${filetype} ${ext}\n\n`
      mediaFire += ` Sending File...\n`
      conn.adReply(m.chat, mediaFire, cover, m).then(() => {
         conn.sendFile(m.chat, link || link2, '', m, {
            document: true,
            fileName: name,
            mimetype: isType
         })
      })
   },
   limit: 1,
   premium: false
};
const mediafire = async (url) => {
   const data = await fetch(`https://www-mediafire-com.translate.goog/${url.replace("https://www.mediafire.com/", "")}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`).then(res => res.text());
   const $ = cheerio.load(data);
   const link = ($("#downloadButton").attr("href") || "").trim();
   const link2 = ($("#download_link > a.retry").attr("href") || "").trim();
   const $intro = $("div.dl-info > div.intro");
   const name = $intro.find("div.filename").text().trim();
   const filetype = $intro.find("div.filetype > span").eq(0).text().trim();
   const ext = /\(\.(.*?)\)/.exec($intro.find("div.filetype > span").eq(1).text())?.[1]?.trim() || "bin";
   const upload = $("div.dl-info > ul.details > li").eq(1).find("span").text().trim();
   const size = $("div.dl-info > ul.details > li").eq(0).find("span").text().trim();
   return { link, link2, name, filetype, ext, upload, size }
};