"use strict";{const n=require("./DependencyManager"),i=require("child_process").spawn;let e;function run(t){n.check().then(()=>{(e=i("java",["-Xss1m","-cp",`${n.VALIDATOR_PATH}/vnu.jar`,"nu.validator.servlet.Main","8888"])).stdout.on("data",n=>{n.includes("Initialization complete.")&&t(null,null)})})}function exit(){e.kill("SIGINT"),e.stdin.end()}function init(n){n.hasDomain("nu.validator")||n.registerDomain("nu.validator",{major:0,minor:1}),n.registerCommand("nu.validator","run",run,!0,"Runs the validation server."),n.registerCommand("nu.validator","exit",exit,!1,"Exits the validation server.")}module.exports.init=init}