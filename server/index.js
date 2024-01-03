import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fetch from 'node-fetch';



const app = require("express")();
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    cors: true
    console.log("connnected");
})

// const options = {
//     method: 'POST',
//     headers: {
//       'xi-api-key': '547d2cf86b946fe61803fdafde76ab79',
//       'Content-Type': 'application/json'
//     },
//     body: '{"text":"Hello world this alphadroid Hackathon","voice_settings":{"similarity_boost":0.2,"stability":0.2,"style":0.2,"use_speaker_boost":true}}'
//   };
  
//   fetch('https://api.elevenlabs.io/v1/text-to-speech/zNAIhtznadkxD62CPd2g?output_format=mp3_22050_32&optimize_streaming_latency=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// const say = require('say')
// say.speak('Wellcome to alphadroid_hackathon',"",0.5);

// const fileName = 'hello.wav'
// say.export('Hello?', "", 0.75, fileName, (err) => {
//   if (err) {
//     return console.error(err)
//   }

//   console.log(`Text has been saved to ${fileName}`)
// })
const elevenLabsApiKey = process.env.ELEVEN_LABS_API_KEY;
const voiceID = "zNAIhtznadkxD62CPd2g";


app.get("/voices", async (req, res) => {
  res.send(await voice.getVoices(elevenLabsApiKey));
});


const lipSyncMessage = async (message) => {
  const time = new Date().getTime();
  console.log(`Starting conversion for message ${message}`);
  await execCommand(
    `ffmpeg -y -i audios/message_${message}.mp3 audios/message_${message}.wav`
    // -y to overwrite the file
  );
  console.log(`Conversion done in ${new Date().getTime() - time}ms`);
  await execCommand(
    `./bin/rhubarb -f json -o audios/message_${message}.json audios/message_${message}.wav -r phonetic`
  );
  // -r phonetic is faster but less accurate
  console.log(`Lip sync done in ${new Date().getTime() - time}ms`);
};

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})



app.get('/', (req, res) => {
    res.send('Running');
});

