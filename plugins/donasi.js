let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0857-6016-5634 ( Revan - Indosat )]
│ •  [0822-3553-7809 ( Azwir - Telkomsel )]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
