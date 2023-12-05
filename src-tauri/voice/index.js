
import express  from 'express';
import Player from 'node-wav-player';

const app = express();
const port = 3000; 
const vPath = "C:/devStage/etc/DID Sound/";

app.get('/', (req, res) =>
{
    res.send('음성화일 송출을 위한 서비스!!');
});

app.get('/voice/:vFile', async (req, res) => {

    const vFile = req.params.vFile; 
    // const isKorean = vFile.match(/[ㄱ-ㅎ가-힣]/);

    if (vFile.length > 4 || isNaN(vFile)) 
    {
        res.end("입력자리수를 초과하거나 문자가 포함되어 있습니다.")
        return;
    }

    const result = await PlayVoice(vFile);
    res.send(`Call number is ${vFile}`);
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

        szFile.push(strValue * szNum[nLength]);
        --nLength;
    }

    for (let i=0;i < szFile.length;i++) {

        if (szFile[i] == 0) continue;

        szResult[i] = "sound_" + szFile[i] + ".wav"
        console.log("szResult[%d]:%s",i,szResult[i]);
        
        await playAudio(szResult[i]);
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
        endTime: 3000,
      }).then(() => {
        console.log('%s 오디오 재생 시작됨',fileName);
      }).catch((error) => {
        console.error(error);
      }); 
}
