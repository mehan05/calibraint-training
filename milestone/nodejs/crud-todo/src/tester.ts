// // loadTest.ts  — simulate 1000 simultaneous requests
// async function runLoadTest() {
//   const TOTAL_REQUESTS = 1000;
//   console.log(`🔥 Sending ${TOTAL_REQUESTS} simultaneous requests...`);

//   const start = Date.now();

//   const requests = Array.from({ length: TOTAL_REQUESTS }, (_, i) =>
//     fetch(`http://localhost:3000/api/todo/tester/get`)
//       .then((r) => r.json())
//       .then((data) => {
//         if (i % 100 === 0) console.log(`✔ ${i + 1} done`);
//         return data;
//       })
//       .catch((err) => ({ error: err.message }))
//   );

//   const results = await Promise.all(requests);

//   const elapsed = ((Date.now() - start) / 1000).toFixed(2);
//   console.log(`\n🏁 All ${TOTAL_REQUESTS} requests finished in ${elapsed}s`);
//   console.log(`Last result:`, results[TOTAL_REQUESTS - 1]);
// }

// runLoadTest();


// import cluster from 'cluster';
// import os from 'os';

// const LEN = os.cpus().length;

// if(cluster.isPrimary){


//   for(let i=0;i<LEN;i++){
//     cluster.fork();
//   }


//   cluster.on("exit",()=>{
//     console.log("re-initializiing threads");
//     cluster.fork();
//   });



// }
// else{
//   require("./server");
// }



import cluster from "cluster";
import os from "os";
import {startServer} from "./server.js"

const CPUS = os.cpus().length;
console.log(CPUS);
if (cluster.isPrimary) {
  console.log(`Master PID: ${process.pid}`);
  console.log(`Forking ${CPUS} workers...`);

  for (let i = 0; i < CPUS; i++) cluster.fork();

  cluster.on("exit", (worker, code) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });

} else {
    startServer();
}