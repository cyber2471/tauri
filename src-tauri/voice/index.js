
import express  from 'express';
import Player from 'node-wav-player';

const app = express();
const port = 3000; 
const vPath = "C:/Program Files (x86)/KDSnDID/Appinstall/sound/";

app.get('/', (req, res) =>
{
    res.send(`<html>
                <head>
                    <script language=javascript>
                        function onSend()
                        {
                            obj = document.forms[0];
                            nNumber = obj.callnumber.value;
                            // alert(nNumber);
                            location.href = "http://localhost:3000/voice/" + nNumber;
                        }
                    </script>
                </head>
                <body>
                    <form>
                        <input type=text name=callnumber>
                        <input type=button value='호출' onclick=onSend()>
                    </form>
                </body>
              </html>
            `);
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
    res.send(`호출번호 : ${vFile}`);
}); 
 
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

async function PlayVoice(nName) {
    let inputNum = nName;
    let szNum = [0,1,10,100,1000];
    let szResult = [];

    console.log('호출번호:%s', nName);

    while (inputNum.length > 0) {
        let strValue = inputNum.substr(0, 1);
        
        console.log('substr:%s', strValue);

        let nValue = strValue * szNum[inputNum.length];

        inputNum = inputNum.slice(1);

        if (nValue != 0) {
            let filePath = "sound_" + nValue + ".wav";
            console.log("filePath:%s", filePath);

            await playAudio(filePath); 
            szResult.push(filePath);
        }
    }

    await playAudio("sound_hook2.wav");
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
