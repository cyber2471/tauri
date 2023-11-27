<script>
    import { invoke } from '@tauri-apps/api/tauri'
  
    let name = ''
    let greetMsg = ''
    let helloMsg = ""
  
    async function greet() {
      greetMsg = await invoke('greet', { name:'cyberpark' })
      helloMsg = await invoke("hello", { name:'astems' });
    }
  </script>
  
  <div>
    <input id="greet-input" placeholder="Enter a name..." bind:value="{name}" />
    <button on:click="{greet}">Greet</button>
    <!-- <p>{greetMsg}</p> -->
    <section class="w-full space-y-4"> 
        <p class="li-style">{greetMsg}</p>
        <p class="li-style">{helloMsg}</p>
      </section>
  </div>