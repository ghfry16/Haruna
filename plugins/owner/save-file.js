const fs = require('fs');
const assert = require('assert');
const syntaxError = require('syntax-error');
exports.default = {
   names: ['Owner'],
   tags: ['simpan'],
   command: ['sf', 'simpan'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`contoh ${prefix + command} plugins/cinta.js atau file yang ingin kamu save`);
      if (!m.quoted) return m.reply('Balas Pesan Kode / Plugins yang mau disimpan');
      const path = `${text.trim()}`;
      const code = m.quoted.text;
      try {
         JSON.parse(code);
         fs.writeFileSync(path, JSON.parse(JSON.stringify(code, 0, 3)));
         return m.reply(`tersimpan di ${path}`);
      } catch {
         const error = await syntaxError(code, {
            sourceType: 'commonjs'
         });
         if (error) {
            await m.reply('❗ Tidak dapat menyimpan kode, terdapat kesalahan sintaks.');
            throw assert.ok(error.length < 1, code + '\n' + error);
         }
         fs.writeFileSync(path, code);
         m.reply(`Tersimpan di ${path}`);
      }
   },
   owner: true
};