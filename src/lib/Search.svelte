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
      await invoke('start_node_sidecar');
    }

  </script>
  
  <section class="w-full space-y-4">
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="css-input"
          placeholder="Search..."
          bind:value={name}
          required
        />
        <button type="submit" on:click|preventDefault={greet} class="css-button">Search</button> 
        <button type="submit" on:click|preventDefault={runNode} class="css-button">..</button>        
      </div>
    </form>
  
    <p class="li-style">{greetMsg}{helloMsg}</p>
  </section>
  
  <style lang="postcss">
    .css-input {
      @apply block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
    }
    .css-button {
      @apply text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
    }
    .ul-style {
      @apply w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white;
    }
    .li-style {
      @apply w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600;
    }
  </style>