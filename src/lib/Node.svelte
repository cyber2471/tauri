<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri";
    import { listen } from "@tauri-apps/api/event";
	// import { loadConfigFromFile } from "vite";
  
    let name = "";
    let greetMsg = "";
    let helloMsg = ""; 
  
    // Listen for error events from Rust
    listen('error_event', (event) => {
        // Display error message
          alert(event.payload); 
    });

    // Call Rust function
    // invoke('your_function', { param: 'some data' })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.error("Error: ", error));

    async function greet() {
      // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
      greetMsg = await invoke("greet", { name });
      helloMsg = await invoke("hello", { name });
    }

    async function PlayVoice() {
      await invoke('play_audio_file', {number: '1'})
    }

    async function runNode() {
      // await invoke('run_node_script');
      try {

        if (await confirm("실행하시겠습니까?")) {
          await invoke('start_node_sidecar');
        }

       // await  invoke('start_node_sidecar', {param:"cyberpark"})
      // .then((response) => alert(response))
      // .catch((error) => console.error("Error: ", error));

      console.log("invoke in---")

      } catch (err) { 
        console.log("------ %s ---------",err)
        alert(`Error: ${err}`);
      }
    }

  </script>

  <!-- <button class="btn btn-neutral" on:click|preventDefault={runNode} >스케쥴등록</button>&nbsp; -->
  <!-- <button class="btn btn-primary" on:click|preventDefault={runNode} >소스동기화</button>&nbsp; -->
  <button class="btn btn-accent btn-outline" on:click|preventDefault={runNode} >서버실행</button> 

    
     