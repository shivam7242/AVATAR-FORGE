import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { createRequire } from "module";
const require = createRequire(import.meta.url);


const app = require("express")();
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    cors: true
    console.log("connnected");
})

const options = {
    method: 'POST',
    headers: {
      'xi-api-key': '547d2cf86b946fe61803fdafde76ab79',
      'Content-Type': 'application/json'
    },
    body: '{"text":"Hello world this alphadroid Hackathon","voice_settings":{"similarity_boost":0.2,"stability":0.2,"style":0.2,"use_speaker_boost":true}}'
  };
  
  fetch('https://api.elevenlabs.io/v1/text-to-speech/zNAIhtznadkxD62CPd2g?output_format=mp3_22050_32&optimize_streaming_latency=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  


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

