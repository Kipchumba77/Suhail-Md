const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707953789";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_13_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA3NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFNkhqVmIydEZYTXp0S21ybjhJTi9lN2pzdWQwZGt6SGhYc2g2QzhEWnQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhNlRReTNEclNKeWtqU2ZTSnByMDZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBmODgwY2VhLThkMTktNDk0MC1hYzgwLTEwNGY5MzQ5NDFkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxOSxcbiAgICAgIDE1OCxcbiAgICAgIDE1NixcbiAgICAgIDg1LFxuICAgICAgMjcsXG4gICAgICA0NixcbiAgICAgIDE1NSxcbiAgICAgIDExNCxcbiAgICAgIDExLFxuICAgICAgMjAsXG4gICAgICAxMyxcbiAgICAgIDYsXG4gICAgICA2NixcbiAgICAgIDQyLFxuICAgICAgMjEyLFxuICAgICAgMTUyLFxuICAgICAgMjQ2LFxuICAgICAgNTgsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjUxLFxuICAgICAgMTM2LFxuICAgICAgMTU5LFxuICAgICAgMTM3LFxuICAgICAgMTM1LFxuICAgICAgMTk2LFxuICAgICAgMTMyLFxuICAgICAgMjI2LFxuICAgICAgMTM3LFxuICAgICAgMjAxLFxuICAgICAgMTA4LFxuICAgICAgMTIyLFxuICAgICAgOTcsXG4gICAgICAyMzgsXG4gICAgICA5NixcbiAgICAgIDE3NyxcbiAgICAgIDI0NixcbiAgICAgIDExOSxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQUhHUzNCOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA3OTUzNzg5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2WkPCdlo7wnZaV8J2WiPCdlo3wnZaa8J2WkvCdlofwnZaGXCIsXG4gICAgXCJsaWRcIjogXCIyNDU4MDU2NzY1MDUzODoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT3l2Y0VIRUsrem1iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJmTVlaWS9LZ1RSc29mVVljZVh4T2Q0aXJLTlVMZk1NQ3RWU0k5V1psMEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlRnVTIrOGtYaWFmQzdvMCtCQXk3MlVZbDhheG1CMEJjNGFXcmFQcEFjV2lQUXdyZ2RYRURuZkFGRVJSaHUwbHp0VHp2SFF6dEwvMDc2bjR3cTI0QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWt4QzVLNlVhdHlzNWJjUmRYblZBdE5QcHZ0RXVBVHdEVHlRRUplNDJaNHhFbnlOa1RocVQyVXZsNGtZbnVtR0VXNHlrdm8rcVpBR0E4bnJUVm5RZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA3OTUzNzg5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDgwODE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlp1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuV3BYUWR5blNod3BpcWpqNGdVNFhnZ3I0K05leG5JQldWOE5XVmtRUkwwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTYzNjg4OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
