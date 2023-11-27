<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri";
  
    let name = "";
    let greetMsg = "";
    let helloMsg = "";
  
    async function greet() {
      // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
      greetMsg = await invoke("greet", { name });
      helloMsg = await invoke("hello", { name });
    }

    async function runNode() {
      // await invoke('run_node_script');
      try {
        await invoke('start_node_sidecar1');
        console.log("------ success!! ---------")

      } catch (err) { 
        console.log("------ %s ---------",err)
        //  alert(`Error: ${err.message}`);
      }
    }

  </script>

  <!-- <button class="btn btn-neutral" on:click|preventDefault={runNode} >스케쥴등록</button>&nbsp; -->
  <!-- <button class="btn btn-primary" on:click|preventDefault={runNode} >소스동기화</button>&nbsp; -->
  <button class="btn btn-accent btn-outline" on:click|preventDefault={runNode} >소스동기화</button> 

    
     