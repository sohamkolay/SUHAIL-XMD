const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918695453759";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_23_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyS3VZNjYrZmxpa1NCd3Y4ZlFxK3NpWlNJVDVVRk01SmNRVzdlRFNWb3RRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODY5NTQ1Mzc1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzc0NjQ5MzYyNzg4MjhGQTkyMzhCNjRGMTE1RTNFNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTI0OTk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdvQ2NVN2x1U1N1RzhETC16bEM4SWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmM5NjI3YjYtMzVlNi00NDQzLTk5NWEtOGI4MjViOWZhY2ZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDg4LFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDk3LFxuICAgICAgMTQxLFxuICAgICAgMTU0LFxuICAgICAgMjEyLFxuICAgICAgMjU0LFxuICAgICAgMjA4LFxuICAgICAgNTksXG4gICAgICA0MSxcbiAgICAgIDgsXG4gICAgICA4MixcbiAgICAgIDUwLFxuICAgICAgMTcxLFxuICAgICAgNzIsXG4gICAgICAyMTYsXG4gICAgICAxMDQsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTg4LFxuICAgICAgMTIsXG4gICAgICAyNTEsXG4gICAgICAyNDksXG4gICAgICA0LFxuICAgICAgMTExLFxuICAgICAgMjMyLFxuICAgICAgMjIzLFxuICAgICAgOSxcbiAgICAgIDEyMixcbiAgICAgIDE2MyxcbiAgICAgIDQsXG4gICAgICA0NSxcbiAgICAgIDE2NixcbiAgICAgIDMyLFxuICAgICAgMjQ0LFxuICAgICAgMTIwLFxuICAgICAgMTY3LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0dITjZOWjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODY5NTQ1Mzc1OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JakjSDwnZem8J2XvPCdl7XwnZeu8J2XuiDwnZee8J2XvPCdl7nwnZeu8J2YhiDwlqSNXCIsXG4gICAgXCJsaWRcIjogXCIxNjQwMDgxNTgwNDAwODA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTFp3cE1CRUx6dWxya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1CcU1ZQjl1SWZuZitsNXUvNlFkTGpHUlNoait0YnczSTVjUFMyRTUrRlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUStrS2NjQUt3KzNHRklLK21wTWdINFEycmVQY2Y4dXM2ek9NMjZWVlcrbXcrTHhiNFNJbGE2QVllUzBtdEp5QlJaMzRRcXVZYy9odTdYWHBJOElPQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidU1xaCtGL3JXNjVlN09HVEVpb0xGOEJBcENoM05VZi9EUWUxN3ZEbUJ0UkI1Yk5zbVJSVXA3OUZzOG9lcXBiQ3UvNUgvOEFvM3hWZXZhOXBmOTdtakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4Njk1NDUzNzU5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTI0OTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnJTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGclMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRYlFRakJFK3VFMFRhLzNjV0lQQWt5aURyaGROTnpteFNpTzBSdkwycFdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwOTM3NDExNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTI0OTkzODE3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Soham",
  packname: process.env.PACK_NAME || "soham",
  botname : process.env.BOT_NAME  || "𖤍 𝗦𝗼𝗵𝗮𝗺 𝗞𝗼𝗹𝗮𝘆 𖤍",
  ownername:process.env.OWNER_NAME|| "𖤍 𝗦𝗼𝗵𝗮𝗺 𝗞𝗼𝗹𝗮𝘆 𖤍",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME || "𖤍 𝗦𝗼𝗵𝗮𝗺 𝗞𝗼𝗹𝗮𝘆 𖤍" ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
