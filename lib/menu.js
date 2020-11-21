exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi Kak, *${id.split("@s.whatsapp.net")[0]}* 👋️ Sebelum Menjalankan Fitur Fitur Yang Ada Di Bot Ini Alangkah Baik Nya Donasi Atau Lihat Futur Info Terimakasih Kak Semoga Hari Hari Mu Menyenangkan Powered By RMS BOT$✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         ───
♻ Command / Perintah :
         ───
         
    ───「 *Menu ${BotName} * 」
├➢ $sticker
├➢ $pantun
├➢ $quotes
├➢ $foto cewek/cowok
├➢ $tts
├➢ $say
├➢ $quran
├➢ $twt
├➢ $fb
├➢ $ig
├➢ $ytmp3
├➢ $yt
├➢ $wiki
├➢ $lirik
├➢ $nulis
├➢ $sholat (nama daerahmu)
├➢ $toxic (anjing)
├➢ $fotoanime
├➢ $covid
├➢ $alay
├➢ $nama
├➢ $pasangan
├➢ $owner
├➢ $creator
├➢ $cek
├➢ #info
  ────────

[ Keterangan ]

» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts Aris ganteng (${BotName} akan mengirim link download)
» $say Contoh: $say Halo Itsmeiky ganteng
» $quran Contoh: $quran
» $twt Contoh: $twt https://tweter.com/itsmeiky
» $fb Contoh: $fb https://facebook.com/itsmeiky
» $ig Contoh: $ig https://instagram.com/ItsmeikyXSec404
» $ytmp3 Contoh: $ytmp3 https://youtu.be/itsmeiky
» $yt Contoh: $yt https://youtu.be/itsmeiky
» $wiki Contoh: $wiki Babi
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis Itsmeiky Sangat Gans
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama Itsmeiky
» $pasangan Contoh: $pasangan Itsmeiky & Dini
» #info Contoh: #info
 
 
├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS$
├≽️💰 MAU DONASI? SILAHKAN KETIK #donate
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Modifikasi By ItsmeikyXSec404* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *Group WhatsApp 2* : ${grupch2}
├≽️💥 *Instagram* : ${grupch3}
 
 
├➢   📍*MADE BY ${BotName}*📍
╰ ───`
}
