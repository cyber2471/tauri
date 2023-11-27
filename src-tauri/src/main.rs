// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::{Command, Child};
use tauri::{command, State};

struct MyState {
  // Your state fields here
  state: String
}

#[derive(serde::Serialize)]
struct ErrorResponse {
  message: String,
}

// use tauri::{ Manager, Window};

// fn start_node_server() -> std::io::Result<Child> {
//     Command::new("node")
//         .arg("../../../build") // Replace with the path to your Node.js server script
//         .spawn()
// }

// fn start_node_server() {
//     Command::new("npm")
//         .args(["run", "start-server"])
//         .spawn()
//         .expect("failed to start server");
// }

fn main() {
    
  // start_node_server();
  env_logger::init();
  // 여기서부터 로그 기록 시작
  log::info!("Tauri 애플리케이션 시작");


  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet,hello,run_node_script,start_node_sidecar])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

  //   tauri::Builder::default()
  //   .setup(|app| {
  //     let app_handle = app.handle();

  //     // Check for updates on launch
  //     tauri::async_runtime::spawn(async move {
  //         if let Some(update) = app_handle.check_update().await.unwrap() {
  //             if update.should_update {
  //                 println!("Update available: {}", update.version);

  //                 // Download and install the update
  //                 app_handle.install_update().await.unwrap();
  //             }
  //         }
  //     });

  //     Ok(())
  // })
  // .run(tauri::generate_context!())
  // .expect("error while running tauri application");

}

// fn main() {
//   tauri::Builder::default()
//       .setup(|app| {
//           let _server_child = start_node_server()
//               .expect("Failed to start Node.js server");

//           Ok(())
//       })
//       .run(tauri::generate_context!())
//       .expect("error while running tauri application");
// }

#[tauri::command]
fn greet(name: &str) -> String {
   format!("첫번째, {}! 파라미터!", name)
}

#[tauri::command]
fn hello(name: &str) -> String {
    format!("두번째, {}! 호출결과!", name)
}

#[tauri::command]
fn run_node_script() {
    let node_binary_path = "./node.exe"; // Adjust the path according to your setup
    let script_path: &str = "./build"; // Path to your Node.js script

    println!("11111111111");

    Command::new(node_binary_path)
        .arg(script_path)
        .spawn()
        .expect("failed to execute process");
}

#[tauri::command]

fn start_node_sidecar(app: tauri::AppHandle, state: State<MyState>) -> Result<(), ErrorResponse> {
    let node_binary = app.path_resolver().app_data_dir().unwrap().join("/Program Files/nodejs/node.exe");
    let script_path = app.path_resolver().app_data_dir().unwrap().join("/devStage/svelte/tauri/KDSnDID/src-tauri/build/index.js");

    // let node_binary = app.path_resolver().app_dir().unwrap().join("/Program Files/nodejs/node.exe");
    // let script_path = app.path_resolver().app_dir().unwrap().join("./build/index.js");
   
    println!("22222222222222%s");
    log::info!("이것은 정보 로그입니다");
 
    // if let Err(e) = Command::new(node_binary)
    //     .arg(script_path)
    //     .spawn() {
    //         println!("Failed to start Node.js sidecar: {}", e);
    // }
            Command::new(node_binary)
            .arg(script_path)
            .spawn()
            .expect("failed to execute process");

}

// fn start_node_sidecar(app: tauri::AppHandle) {
//   let node_binary = app.path_resolver().app_data_dir().unwrap().join("/Program Files/nodejs/node.exe");
//   let script_path = app.path_resolver().app_data_dir().unwrap().join("/devStage/svelte/tauri/KDSnDID/src-tauri/build/index.js");

//   // let node_binary = app.path_resolver().app_dir().unwrap().join("/Program Files/nodejs/node.exe");
//   // let script_path = app.path_resolver().app_dir().unwrap().join("./build/index.js");
 
//   println!("22222222222222%s");
//   log::info!("이것은 정보 로그입니다");

//   // if let Err(e) = Command::new(node_binary)
//   //     .arg(script_path)
//   //     .spawn() {
//   //         println!("Failed to start Node.js sidecar: {}", e);
//   // }
//           Command::new(node_binary)
//           .arg(script_path)
//           .spawn()
//           .expect("failed to execute process");

// }