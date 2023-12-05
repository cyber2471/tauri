// const express = require('express');

import express  from 'express';
// import cors  from 'cors';
import Player from 'node-wav-player';
// import tmp from 'tmp';
// import fs from 'fs';
// import os from 'os';
// import path from 'path';
// import { fileURLToPath } from 'url';

const app = express();
// const route = express.Router();
const port = 3000; // You can choose any port
const vPath = "C:/devStage/etc/DID Sound/";

// Path to your WAV file
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const audioFilePath = path.join("", '/devStage/etc/DID Sound/sound_9000.wav');

// const audioFilePath = path.join(os.tmpdir(), 'wav-files');
// fs.mkdirSync(audioFilePath);

// Read the file into memory
// let audioBuffer = null;

// try {
//     audioBuffer = fs.readFileSync(audioFilePath);
// } catch (err) {
//     console.error("Error reading the audio file:", err);
// }

// Tauri 애플리케이션의 요청을 허용
// const corsOptions = {
//     origin: 'http://localhost:8082', // Tauri 앱의 출처로 변경
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions)); // CORS 미들웨어 사용

app.get('/', (req, res) =>
{
    res.send('음성화일 송출을 위한 서비스!!');
});

// app.use('/', (req, res, next) => {
//     console.log("A sorcerer approaches!");
//     next();
//   });

app.get('/voice/:vFile', async (req, res) => {

// http://localhost:3000/voice/sound_hook2.wav
 
const vFile = req.params.vFile; 

// console.log('req object:%s', req);
// const voiceFile = vPath + vFile;

    if (vFile.length > 4) 
    {
        res.send("입력자리수를 초과합니다.")
        return;
    }

    // const audioFiles = ['C:/devStage/etc/DID Sound/sound_100.wav', 'C:/devStage/etc/DID Sound/sound_20.wav', 'C:/devStage/etc/DID Sound/sound_3.wav'];
    // playNext(audioFiles);

    // const result = await playAudioFromBuffer(audioBuffer);

    const result = await PlayVoice(vFile);
    console.log("async Requested value:", result);

    // res.end(`Voice file is ${vFile}`);
    res.send(`Voice file is ${vFile}`);
    // next();
    // res.send('Voice request received');
}); 
 
app.get('/sound/:args', (req, res) => {

    // http://localhost:3000/voice/sound_hook2.wav
    
    const vFile = req.params.args; 
    // console.log('req object:%s', req);
    
        // PlayVoice(vFile);
        console.log("Requested file:", vFile);
        // res.end(`Voice file is ${vFile}`);
        // res.send(`Voice file is ${vFile}`);
        // res.send('Voice request received');
        res.status(200).send();
        // req.redirect("/voice/456");
}); 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

async function PlayVoice(nName) {
    let inputNum = nName;
    let szNum = [0,1,10,100,1000];
    let szFile = [];
    let szResult = [];
    let strValue = "";

    let nLength = inputNum.length;

    while (inputNum.length > 0) {
        strValue = await inputNum.substr(0,1);
        inputNum = await inputNum.slice(1);

        console.log('substr:%s', strValue);
        console.log(`Playing nLength: ${nLength}`);

        await szFile.push(strValue * szNum[nLength]);
        --nLength;
    }

    for (let i=0;i < szFile.length;i++) {

        if (szFile[i] == 0) continue;

        szResult[i] = "sound_" + szFile[i] + ".wav"
        console.log("szResult[%d]:%s",i,szResult[i]);
        
        await playAudio(szResult[i]);
        // await setTimeout(() => console.log("대기시간 1초"), 2000);
        // await setTimeout(() => playAudio(szResult[i]), 2500);
    }

    playAudio("sound_hook2.wav");
    console.log(`szResult: ${szResult}`);
}

async function playAudio(fileName) {
    await Player.play({
        path: vPath + fileName,
        volume: 1,
        startTime: 0,
        endTime: 0,
      }).then(() => {
        console.log('%s 오디오 재생 시작됨',fileName);
      }).catch((error) => {
        console.error(error);
      }); 
}

// function playFile(filePath) {
//     return new Promise((resolve, reject) => {
//         let audio = new Audio(filePath);
//         audio.play();

//         audio.addEventListener('ended', resolve);
//         audio.addEventListener('error', reject);
//     });
// }

// 파일들을 차례로 재생하는 재귀 함수
// function playNext() {
//     if (index < fileList.length) {
//         playFile(fileList[index]).then(() => {
//             index++;
//             playNext();
//         }).catch(error => {
//             console.error('파일 재생 중 오류 발생:', error);
//         });
//     }
// }

// function playNext(fileList) {
    
//     let index = 0;

//     for( ; index < fileList.length; index++)
//     {
//         console.log("playlist:%s",fileList[index]);

//         Player.play({
//             path: fileList[index],
//         }).then(() => {
//             console.log('오디오 재생 시작됨');
//         }).catch((error) => {
//             console.error(error);
//         }); 
//     }
// }    

// function playAudioFilesInOrder(fileList) {
//     let index = 0;

//     console.log("playaudiofilesinorder!!");

//     // 단일 파일 재생 함수
   

//     // 첫 번째 파일 재생 시작
//     playNext(fileList);
// }

// function playAudioFromBuffer(buffer) {
//     tmp.file({ postfix: '.wav' }, (err, tempFilePath, fd, cleanupCallback) => {
//         if (err) throw err;

//         // console.log("aaaaaaaaaaaaaaaa");

//         fs.writeFile(tempFilePath, buffer, (err) => {
//             if (err) throw err;

//             Player.play({ path: tempFilePath })
//                 .then(() => {
//                     console.log('Audio playback started');
//                     cleanupCallback(); // Clean the temp file after playback
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                     cleanupCallback(); // Clean even if there was an error
//                 });
//         });
//     });
// }

// if (audioBuffer) {
//     playAudioFromBuffer(audioBuffer);
// }