import G from".prisma/client/index-browser";import{S as q,i as T,s as P,k as d,q as b,a as S,l as i,m as p,r as F,h as a,c as R,n as r,J as C,b as x,G as u,H as D}from"../chunks/index.472b9089.js";const I=G;var M=I;const Y=new M.PrismaClient,k=!1;async function y(){let O="astems",e="cyberpark00002@astems.co.kr",t={BILL_INFO:[{ORDER_ITEM:[{GOODS_CD:"GD0001",GOODS_NM:"몬스터와퍼",QTY:1,SUBITEM:[{GOODS_CD:"GD0004",GOODS_NM:"양파",QTY:-1,PROC_TYPE:1},{GOODS_CD:"GD0005",GOODS_NM:"양상추",QTY:-1,PROC_TYPE:1},{GOODS_CD:"GD0006",GOODS_NM:"할라피뇨",QTY:1,PROC_TYPE:2},{GOODS_CD:"GD0007",GOODS_NM:"치즈1장",QTY:1,PROC_TYPE:2},{GOODS_CD:"GD0008",GOODS_NM:"아메리카노",QTY:1,PROC_TYPE:3}]},{GOODS_CD:"GD0002",GOODS_NM:"기네스머쉬룸와퍼",QTY:2},{GOODS_CD:"GD0003",GOODS_NM:"너겟킹4조각",QTY:3}]},{ORDER_NUM:"ORD001"},{ORDER_DATE:"20231012"},{ORDER_TYPE:"eat-in"},{SALE_DATE:"20231012"},{POS_NO:"01"},{BILL_NO:"0001"},{MEMO:"양파/양상추 제외하고, 할라피뇨/치즈 추가 음료는 아메리카노로 변경"}]},s=1;try{const l=await Y.user.update({where:{id:Number(s)},data:{name:O,email:e,updatedAt:new Date,jsondata:t}});console.log(`success!!
%s`,l)}catch(l){console.log("error!!:%s",l)}}const v=Object.freeze(Object.defineProperty({__proto__:null,load:y,ssr:k},Symbol.toStringTag,{value:"Module"}));function N(O){let e,t,s,l,c,E,_,n,f;return{c(){e=d("body"),t=d("button"),s=b("KDSnDID"),l=S(),c=d("script"),E=b(`function openFullscreenPopup(url) {
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
}`),_=S(),n=d("iframe"),this.h()},l(m){e=i(m,"BODY",{});var o=p(e);t=i(o,"BUTTON",{onclick:!0});var w=p(t);s=F(w,"KDSnDID"),w.forEach(a),l=R(o),c=i(o,"SCRIPT",{});var h=p(c);E=F(h,`function openFullscreenPopup(url) {
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
}`),h.forEach(a),_=R(o),n=i(o,"IFRAME",{id:!0,frameborder:!0,width:!0,height:!0,src:!0,title:!0}),p(n).forEach(a),o.forEach(a),this.h()},h(){r(t,"onclick","openFullscreenExtend('http://www.naver.com');"),r(n,"id","subscreen"),r(n,"frameborder","0"),r(n,"width","100%"),r(n,"height","600px"),C(n.src,f="https://www.astems.co.kr/")||r(n,"src",f),r(n,"title","Example Website")},m(m,o){x(m,e,o),u(e,t),u(t,s),u(e,l),u(e,c),u(c,E),u(e,_),u(e,n)},p:D,i:D,o:D,d(m){m&&a(e)}}}class j extends q{constructor(e){super(),T(this,e,null,N,P,{})}}export{j as component,v as universal};
