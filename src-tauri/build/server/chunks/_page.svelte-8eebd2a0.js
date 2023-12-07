import { c as create_ssr_component } from './index-0aa569f6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<body><button onclick="openFullscreenExtend('http://www.naver.com');">KDSnDID</button>

<script>function openFullscreenPopup(url) {
    // 새 창을 열고 참조를 변수에 저장합니다.
    var popupWindow = window.open(url, 'popupWindow', 'width=1280,height=1024');

    // 새 창이 로드될 때 함수를 실행합니다.
    popupWindow.onload = function () {
        // Fullscreen API를 사용하여 전체 화면 모드로 전환합니다.
        if (popupWindow.document.fullscreenEnabled) {
            popupWindow.document.documentElement.requestFullscreen();
            alert(popupWindow.document.fullscreenElement);
        } else { 
            alert('Fullscreen mode is not enabled in your browser.');
        }
    };
}

function openFullscreenExtend(url) {
    // 새 창을 열고 참조를 변수에 저장합니다.
    if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox 지원
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari 및 Opera 지원
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer 지원
                document.documentElement.msRequestFullscreen();
            }

     obj = document.getElementById("subscreen");
    //  obj.src ="http://www.kfckorea.com";
     obj.src ="http://localhost:3000";
}
<\/script>

<iframe id="subscreen" frameborder="0" width="100%" height="600px" src="https://www.astems.co.kr/" title="Example Website"></iframe></body>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8eebd2a0.js.map
