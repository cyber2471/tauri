

<script>
  import { onMount } from 'svelte';

  export let text = '';
  let displayedText = '';

  onMount(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        displayedText += text[index++];
      } else {
        clearInterval(interval);
      }
    }, 100); // 100ms 간격으로 문자 추가
  });
</script>

<span>{displayedText}</span>
 
<style>
    span {
      /* border-right: 2px solid black; 커서 효과 */
      justify-self: start;
      padding-right: 5px;
      padding-left: 5px;
    }
  </style>