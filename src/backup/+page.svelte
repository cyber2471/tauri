<script lang="ts">
    // import Search from "../lib/Search.svelte";
    import Server from "../lib/Node.svelte";
    import SrcSync from "../lib/SourceSync.svelte";
    import TypingEffect from '../lib/TypingEffect.svelte';
    import myImage01 from '$lib/images/nodeserver.jpg';
    // import myImage01 from '$lib/images/photo-1606107557195-0e29a4b5b4aa.jpg';
    
  </script>
  
  <!-- <main class="min-w-[320] flex flex-col mx-auto items-center justify-center p-8">
    <h1 class="font-bold text-4xl">윈도우 내부자원 연동을 위한 테스트!!</h1>
  
    <div class="w-full flex flex-col items-center justify-center py-4">
      <Search />
    </div> -->

<div class="grid grid-cols-2 gap-[1px] ">

    <div data-theme="wireframe" class=" p-2">
          <div class="artboard artboard-demo phone-3">
            <TypingEffect text="지란지교데이터가 IT 제품 전문기업 아스템즈와 키오스크·포스(POS) 등 특수목적시스템 사이버 위협 예방에 적극 협력하기 위한 양해각서(MOU)를 교환했다.

            아스템즈는 키오스크·POS 도입 고객사에서 보안 기능을 요청할 시, 지란지교데이터의 키오스크·POS 민감 정보 보호 및 해킹 방지 솔루션 '키오스크필터(KIOSKFILTER)'를 제공한다.
            
            지란지교데이터는 아스템즈가 제공한 테스트 베드를 활용해 키오스크·POS 보안 강화하는 등 신제품 개발에 힘을 모을 계획이다. 다양한 형태의 마케팅 활동도 추진한다.
            
            이번 협력은 양사가 사이버 위협 증가에 따른 정보 보호 필요성이 높아졌다는 데 공감대를 형성한 결과다.
            
            특히 키오스크·POS는 네트워크로 연결돼 △업무 개인용컴퓨터(PC) △외부 금융 △멤버십 △회원정보시스템 등 내·외부 시스템과 연계하는 주요 정보기기로, 결제용 카드 정보와 거래내역을 통신하는 최종 빌링 단계로 이어지기 때문에 정보 유출 시 개인 프라이버시 침해, 무단 결제 사고 등 피해로 이어질 우려가 있다.
            
            박계영 아스템즈 대표는 “매일 새로운 악성코드가 생성 배포되는 사이버 환경에 있다”면서 “시그니처 방식이 아닌 알고리즘 기반으로 한 키오스크·POS전용 멀웨어에 의한 악성행위 차단 솔루션 확보로 한층 신뢰도 높은 서비스를 구축할 수 있게 됐다”고 말했다.
            
            
            유니온커뮤니티, 'K-펫페어' 펫비문 ID 카드 발급 이벤트 참여
            [유니온커뮤니티] 뉴스룸 바로가기>
            
            유병완 지란지교데이터 대표는 “아스템즈와 협력을 통해 PC부터 특수목적시스템까지 데이터 보호 영역을 확장하면서 '리얼 프라이버시 및 데이터 케어'라는 비전에 한 발 더 다가섰다”며 “세계인이 체감할 수 있는 서비스를 제공할 수 있도록 역량을 확장하겠다”고 밝혔다." />
          </div>

    </div> 

    <div data-theme="emerald" class="grid p-2 ">

      <div> 

        <div class="card w-96 bg-base-100 shadow-x3">
          <figure class="px-[20px] pt-2"> 
            <img src={myImage01} alt="Shoes" class="rounded-x1" />
          </figure>
          <div class="card-body items-center text-center"> 
            <h2 class="card-title">소스동기화!</h2>
            <p class="text-sm">점서버에 대한 소스 동기화가 진행됩니다. </p>
            <div class="card-actions">
              <SrcSync/>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={myImage01} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">서버실행!</h2>
            <p>점서버에 대한 소스 동기화 이후에 실행바랍니다.</p>
            <div class="card-actions justify-end">
              <Server/>
            </div>
          </div>
        </div>

      </div>

    </div>

</div>    

<script>
  document.getElementById('sendVoice').addEventListener('click', () => {
      fetch('http://localhost:3000/voice')
          .then(response => response.text())
          .then(data => {
              console.log(data);
              // Additional logic to handle voice data
          })
          .catch(error => console.error('Error:', error));
  });
</script>


  <!-- </main>   -->