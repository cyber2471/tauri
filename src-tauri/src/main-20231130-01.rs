// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use std::{io};
use std::process::{Command, Child};
use tauri::{command, Window};


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

// enum Result<T,E> {
//   Ok(T),
//   Err(E),
// }

#[tauri::command]
fn start_node_sidecar(app: tauri::AppHandle, window:Window) -> Result<String, String> {
    
  use std::process::{Command, Stdio};
  use std::io::{BufRead, BufReader};

    // Result<String, String>
    // app: tauri::AppHandle,
//   if param.is_empty() {
//     // Send error message to JavaScript
//     // window.emit("error_event", "Error: Parameter is empty").unwrap();
//     window.emit("error_event", "Error: Parameter is empty").unwrap();
//     // return "cyberpark";
//     return Err("Parameter is empty".to_string());
// }

    // window.emit("error_event", "Error: Parameter is empty").unwrap();
    // return Err("Parameter is empty".to_string());

    let node_binary = app.path_resolver().app_data_dir().unwrap().join("/Program Files/nodejs/naode.exe");
    let script_path = app.path_resolver().app_data_dir().unwrap().join("/devStage/svelte/tauri/KDSnDID/src-tauri/build/index.js");

    // let node_binary = app.path_resolver().app_data_dir().unwrap().join("/Program Files (x86)/KDSnDID/App/kdsctl.bat");
    
    // let node_binary = app.path_resolver().app_data_dir().unwrap().join("Program Files").join("nodejs").join("node.exe");
    // let script_path = app.path_resolver().app_data_dir().unwrap().join("devStage").join("svelte").join("tauri").join("KDSnDID").join("src-tauri").join("build").join("index.js");

      let mut child = Command::new(node_binary)
      .arg(script_path)
      // .stdout(Stdio::piped())
      .stderr(Stdio::piped())
      .spawn()
      .expect("지정 프로그램 실행오류");

    let stderr = BufReader::new(child.stderr.take().expect("Failed to open stderr"));

    for line in stderr.lines() {
        let line = line.expect("Failed to read line from stderr");
        // let line = line;

        println!("line {}",line);

        if line.contains("EADDRINUSE") { // Example error pattern
          window.emit("error_event", format!("Error: 이미 서비스가 실행중입니다.")).unwrap();
          break;
          // Err("error!!".to_string())
          // println!("Error: 이미 서비스가 실행중입니다.");
        }      
        else if line.contains("MODULE_NOT_FOUND") { // Example error pattern
          window.emit("error_event", format!("Error: 해당 프로그램이 존재하지 않습니다.")).unwrap();
          break;
          // Err("error!!".to_string())
          // println!("Error: 지정된 프로그램이 존재하지 않습니다.");
        }
    }

    // let status = child.wait().expect("Failed to wait on child");
    // if !status.success() {
    //     println!("Process exited with status: {}", status);
    //     window.emit("error_event", format!("Error: Check the program. Details")).unwrap();
    //     // Handle non-zero exit status
    // }

    // println!("22222222222222");
  
    // if let Err(e) = 
        // Command::new(node_binary)
        // .arg(script_path)
        // .spawn()
        // .expect("failed to execute process");

        // match Command::new(node_binary).arg(script_path).spawn() {
        //   Ok(child_process) => {
        //     window.emit("error_event", "Success: 정상적으로 처리되었습니다.").unwrap();
        //     format!("정상호출, {}! 호출결과!", child_process.id());
        //   },
        //   Err(e) => {
        //     window.emit("error_event", format!("Error: Check the program. Details: {}", e)).unwrap();
        //   }
        // }

        // window.emit("error_event", "Error: Parameter is empty").unwrap();
      //  {
      //     window.emit("start_node_sidecar", "Error: Parameter is empty").unwrap();
      //     println!("3333333333333");
      //     return Err(e.to_string());       
      //       // println!("Failed to start Node.js sidecar: {}", e.to_string());
      //   }   

        println!("5555555555555");
    // Ok("Success".to_string())

            // Command::new(node_binary)
            // .arg(script_path)
            // .spawn()
            // .expect("failed to execute process");

    Ok("Success".to_string())

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