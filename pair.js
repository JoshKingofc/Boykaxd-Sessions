const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Boyka_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function BOYKAX_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Boyka_Tech = Boyka_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_Boyka_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Boyka_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Boyka_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Boyka_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Boyka_Tech.sendMessage(Pair_Code_By_Boyka_Tech.user.id, { text: ' '+ b64data });

               let BOYKAX_TECH_TEXT = `




*🎉 SESSION GENERATED SUCCESSFULLY! ✅*

*💪 Empowering Your Experience with boykax tech Bot*

*👥 Join to group free chat enjoy with friends🤙*
🖇️ https://chat.whatsapp.com/IUAzVGi8DVX3ipWjgDO8AU

*🌟 Show your support by giving our repo a star! 🌟*
🔗 https://github.com/Joshuamambo1/BOYKA-XD

*💭 Need help? Join our support channel:*
📢 💬
https://whatsapp.com/channel/0029VaraMtfFcowAKRdDdp1T

*📚 Learn & Explore More with Tutorials:*
🪄 YouTube Channel https://www.youtube.com/@joshuamambo1

*🥀 Powered by dev JoshKing Bot & Boykax tech Inc 🥀*
*Together, we build the future of automation! 🚀*
`
 await Pair_Code_By_Boyka_Tech.sendMessage(Pair_Code_By_Boyka_Tech.user.id,{text:BOYKAX_TECH_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Bmb_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    BOYKAX_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await BOYKAX_TECH_PAIR_CODE()
});
module.exports = router
