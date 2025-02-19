Here are some **Node.js interview questions and answers with examples** to help you prepare for your interview. These questions cover both theoretical concepts and practical coding examples.

---

### 1. **What is Node.js, and how does it work?**
   - **Answer:** Node.js is a runtime environment that allows you to run JavaScript on the server side. It uses Chrome's V8 JavaScript engine to execute code and operates on an event-driven, non-blocking I/O model, making it lightweight and efficient.
   - **Example:**
     ```javascript
     const http = require('http');

     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.end('Hello, World!\n');
     });

     server.listen(3000, () => {
       console.log('Server running on http://localhost:3000');
     });
     ```
     This example creates a simple HTTP server that listens on port 3000 and responds with "Hello, World!".

---

### 2. **Explain the event loop in Node.js.**
   - **Answer:** The event loop is the core of Node.js's asynchronous behavior. It allows Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel whenever possible. The event loop continuously checks the call stack and processes events from the event queue.
   - **Example:**
     ```javascript
     console.log('Start');

     setTimeout(() => {
       console.log('Timeout callback');
     }, 1000);

     console.log('End');
     ```
     **Output:**
     ```
     Start
     End
     Timeout callback
     ```
     The `setTimeout` callback is executed after the main thread completes, demonstrating the non-blocking nature of the event loop.

---

### 3. **What is the difference between `require` and `import`?**
   - **Answer:** 
     - `require` is used in CommonJS (Node.js default) to import modules.
     - `import` is used in ES6 modules.
   - **Example:**
     ```javascript
     // CommonJS (Node.js)
     const fs = require('fs');

     // ES6 Modules
     import fs from 'fs';
     ```

---

### 4. **What is the purpose of `package.json`?**
   - **Answer:** The `package.json` file contains metadata about the project, such as dependencies, scripts, and project configuration.
   - **Example:**
     ```json
     {
       "name": "my-app",
       "version": "1.0.0",
       "scripts": {
         "start": "node index.js"
       },
       "dependencies": {
         "express": "^4.17.1"
       }
     }
     ```

---

### 5. **What is middleware in Node.js?**
   - **Answer:** Middleware is a function that has access to the request (`req`), response (`res`), and the `next` function in the request-response cycle. It is used to perform tasks like logging, authentication, and error handling.
   - **Example:**
     ```javascript
     const express = require('express');
     const app = express();

     // Middleware function
     app.use((req, res, next) => {
       console.log('Request URL:', req.url);
       next();
     });

     app.get('/', (req, res) => {
       res.send('Hello, World!');
     });

     app.listen(3000, () => {
       console.log('Server running on http://localhost:3000');
     });
     ```

---

### 6. **What is the difference between `process.nextTick()` and `setImmediate()`?**
   - **Answer:** 
     - `process.nextTick()` executes immediately after the current operation.
     - `setImmediate()` executes in the next iteration of the event loop.
   - **Example:**
     ```javascript
     console.log('Start');

     process.nextTick(() => {
       console.log('Next tick');
     });

     setImmediate(() => {
       console.log('Immediate');
     });

     console.log('End');
     ```
     **Output:**
     ```
     Start
     End
     Next tick
     Immediate
     ```

---

### 7. **How do you handle errors in Node.js?**
   - **Answer:** Errors can be handled using try-catch blocks, error-first callbacks, promises, or async/await.
   - **Example:**
     ```javascript
     // Using try-catch with async/await
     async function fetchData() {
       try {
         const data = await someAsyncFunction();
         console.log(data);
       } catch (error) {
         console.error('Error:', error.message);
       }
     }

     fetchData();
     ```

---

### 8. **What is clustering in Node.js?**
   - **Answer:** Clustering allows you to create multiple worker processes to handle incoming requests, improving performance by utilizing multiple CPU cores.
   - **Example:**
     ```javascript
     const cluster = require('cluster');
     const os = require('os');

     if (cluster.isMaster) {
       const numCPUs = os.cpus().length;
       for (let i = 0; i < numCPUs; i++) {
         cluster.fork();
       }
     } else {
       const http = require('http');
       http.createServer((req, res) => {
         res.writeHead(200);
         res.end('Hello, World!\n');
       }).listen(3000);
     }
     ```

---

### 9. **What is the purpose of the `Buffer` class?**
   - **Answer:** The `Buffer` class is used to handle binary data directly.
   - **Example:**
     ```javascript
     const buffer = Buffer.from('Hello, World!', 'utf8');
     console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
     console.log(buffer.toString('utf8')); // Hello, World!
     ```

---

### 10. **What is the difference between `readFile` and `readFileSync`?**
    - **Answer:** 
      - `readFile` is asynchronous and uses a callback.
      - `readFileSync` is synchronous and blocks the execution.
    - **Example:**
      ```javascript
      const fs = require('fs');

      // Asynchronous
      fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });

      // Synchronous
      const data = fs.readFileSync('file.txt', 'utf8');
      console.log(data);
      ```

---

### 11. **What is the purpose of the `stream` module?**
    - **Answer:** Streams are used to handle large amounts of data efficiently by processing it in chunks.
    - **Example:**
      ```javascript
      const fs = require('fs');
      const readStream = fs.createReadStream('largefile.txt', 'utf8');

      readStream.on('data', (chunk) => {
        console.log('Received chunk:', chunk);
      });

      readStream.on('end', () => {
        console.log('File reading completed.');
      });
      ```

---

### 12. **What is the difference between `http` and `https` modules?**
    - **Answer:** 
      - `http` is used for unsecured HTTP communication.
      - `https` is used for secured HTTPS communication using SSL/TLS.
    - **Example:**
      ```javascript
      const https = require('https');
      const fs = require('fs');

      const options = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
      };

      https.createServer(options, (req, res) => {
        res.writeHead(200);
        res.end('Hello, HTTPS!\n');
      }).listen(443);
      ```

---

Here are **more Node.js interview questions and answers with examples** to further enhance your preparation:

---

### 13. **What is the purpose of the `path` module in Node.js?**
   - **Answer:** The `path` module provides utilities for working with file and directory paths. It helps in resolving, normalizing, and manipulating paths in a cross-platform way.
   - **Example:**
     ```javascript
     const path = require('path');

     const filePath = '/users/john/documents/file.txt';
     console.log(path.dirname(filePath)); // /users/john/documents
     console.log(path.basename(filePath)); // file.txt
     console.log(path.extname(filePath)); // .txt
     console.log(path.join('/users', 'john', 'documents', 'file.txt')); // /users/john/documents/file.txt
     ```

---

### 14. **What is the difference between `exports` and `module.exports`?**
   - **Answer:** 
     - `exports` is a reference to `module.exports`.
     - `module.exports` is the actual object that gets exported.
   - **Example:**
     ```javascript
     // Using exports
     exports.greet = () => {
       console.log('Hello!');
     };

     // Using module.exports
     module.exports = {
       greet: () => {
         console.log('Hello!');
       }
     };
     ```

---

### 15. **What is the purpose of the `os` module in Node.js?**
   - **Answer:** The `os` module provides utilities for interacting with the operating system, such as retrieving system information like CPU architecture, memory, and network interfaces.
   - **Example:**
     ```javascript
     const os = require('os');

     console.log(os.platform()); // e.g., 'linux', 'win32'
     console.log(os.arch()); // e.g., 'x64'
     console.log(os.totalmem()); // Total system memory in bytes
     console.log(os.freemem()); // Free system memory in bytes
     ```

---

### 16. **What is the purpose of the `events` module in Node.js?**
   - **Answer:** The `events` module allows you to create, emit, and listen for custom events using the `EventEmitter` class.
   - **Example:**
     ```javascript
     const EventEmitter = require('events');

     class MyEmitter extends EventEmitter {}

     const myEmitter = new MyEmitter();

     myEmitter.on('greet', () => {
       console.log('Hello, World!');
     });

     myEmitter.emit('greet'); // Output: Hello, World!
     ```

---

### 17. **What is the difference between `spawn`, `exec`, and `fork` in the `child_process` module?**
   - **Answer:** 
     - `spawn`: Launches a new process and returns a stream for I/O.
     - `exec`: Runs a command in a shell and buffers the output.
     - `fork`: Spawns a new Node.js process and allows communication between parent and child processes.
   - **Example:**
     ```javascript
     const { spawn, exec, fork } = require('child_process');

     // spawn
     const ls = spawn('ls', ['-lh', '/usr']);
     ls.stdout.on('data', (data) => {
       console.log(`stdout: ${data}`);
     });

     // exec
     exec('ls -lh /usr', (error, stdout, stderr) => {
       if (error) throw error;
       console.log(`stdout: ${stdout}`);
     });

     // fork
     const child = fork('child.js');
     child.on('message', (message) => {
       console.log(`Message from child: ${message}`);
     });
     ```

---

### 18. **What is the purpose of the `crypto` module in Node.js?**
   - **Answer:** The `crypto` module provides cryptographic functionality, such as hashing, encryption, and decryption.
   - **Example:**
     ```javascript
     const crypto = require('crypto');

     // Hashing
     const hash = crypto.createHash('sha256');
     hash.update('Hello, World!');
     console.log(hash.digest('hex')); // Hashed output

     // Encryption
     const cipher = crypto.createCipher('aes192', 'secret');
     let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
     encrypted += cipher.final('hex');
     console.log(encrypted);

     // Decryption
     const decipher = crypto.createDecipher('aes192', 'secret');
     let decrypted = decipher.update(encrypted, 'hex', 'utf8');
     decrypted += decipher.final('utf8');
     console.log(decrypted);
     ```

---

### 19. **What is the purpose of the `util` module in Node.js?**
   - **Answer:** The `util` module provides utility functions for formatting strings, working with objects, and handling asynchronous functions.
   - **Example:**
     ```javascript
     const util = require('util');

     // Promisify a callback-based function
     const fs = require('fs');
     const readFile = util.promisify(fs.readFile);

     readFile('file.txt', 'utf8')
       .then((data) => {
         console.log(data);
       })
       .catch((err) => {
         console.error(err);
       });
     ```

---

### 20. **What is the purpose of the `zlib` module in Node.js?**
   - **Answer:** The `zlib` module provides compression and decompression functionality using gzip, deflate, and other algorithms.
   - **Example:**
     ```javascript
     const zlib = require('zlib');
     const fs = require('fs');

     const gzip = zlib.createGzip();
     const input = fs.createReadStream('file.txt');
     const output = fs.createWriteStream('file.txt.gz');

     input.pipe(gzip).pipe(output);
     ```

---

### 21. **What is the difference between `process.stdout.write` and `console.log`?**
   - **Answer:** 
     - `process.stdout.write` writes raw data to the standard output without adding a newline.
     - `console.log` writes data to the standard output and adds a newline.
   - **Example:**
     ```javascript
     process.stdout.write('Hello, ');
     process.stdout.write('World!');
     // Output: Hello, World!

     console.log('Hello, ');
     console.log('World!');
     // Output:
     // Hello,
     // World!
     ```

---

### 22. **What is the purpose of the `querystring` module in Node.js?**
   - **Answer:** The `querystring` module provides utilities for parsing and formatting URL query strings.
   - **Example:**
     ```javascript
     const querystring = require('querystring');

     const query = 'name=John&age=30';
     const parsed = querystring.parse(query);
     console.log(parsed); // { name: 'John', age: '30' }

     const stringified = querystring.stringify(parsed);
     console.log(stringified); // name=John&age=30
     ```

---

### 23. **What is the purpose of the `url` module in Node.js?**
   - **Answer:** The `url` module provides utilities for parsing and formatting URLs.
   - **Example:**
     ```javascript
     const url = require('url');

     const urlString = 'https://example.com/path?name=John&age=30';
     const parsedUrl = url.parse(urlString, true);
     console.log(parsedUrl.host); // example.com
     console.log(parsedUrl.pathname); // /path
     console.log(parsedUrl.query); // { name: 'John', age: '30' }
     ```

---

### 24. **What is the purpose of the `net` module in Node.js?**
   - **Answer:** The `net` module provides an asynchronous network API for creating TCP servers and clients.
   - **Example:**
     ```javascript
     const net = require('net');

     const server = net.createServer((socket) => {
       socket.write('Hello, Client!\n');
       socket.on('data', (data) => {
         console.log(`Received: ${data}`);
       });
     });

     server.listen(3000, () => {
       console.log('Server listening on port 3000');
     });
     ```

---

### 25. **What is the purpose of the `dns` module in Node.js?**
   - **Answer:** The `dns` module provides functionality to perform DNS lookups and resolve domain names.
   - **Example:**
     ```javascript
     const dns = require('dns');

     dns.resolve('example.com', (err, addresses) => {
       if (err) throw err;
       console.log(addresses); // Array of IP addresses
     });
     ```

---

### 26. **What is the purpose of the `cluster` module in Node.js?**
   - **Answer:** The `cluster` module allows you to create child processes (workers) that share the same server port, enabling load balancing across multiple CPU cores.
   - **Example:**
     ```javascript
     const cluster = require('cluster');
     const http = require('http');
     const os = require('os');

     if (cluster.isMaster) {
       for (let i = 0; i < os.cpus().length; i++) {
         cluster.fork();
       }
     } else {
       http.createServer((req, res) => {
         res.writeHead(200);
         res.end('Hello, World!\n');
       }).listen(3000);
     }
     ```

---

### 27. **What is the purpose of the `readline` module in Node.js?**
   - **Answer:** The `readline` module provides an interface for reading input from a readable stream (e.g., `process.stdin`) line by line.
   - **Example:**
     ```javascript
     const readline = require('readline');

     const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
     });

     rl.question('What is your name? ', (name) => {
       console.log(`Hello, ${name}!`);
       rl.close();
     });
     ```

---

Here are **even more Node.js interview questions and answers with examples** to help you prepare comprehensively:

---

### 28. **What is the purpose of the `vm` module in Node.js?**
   - **Answer:** The `vm` module allows you to execute JavaScript code in a sandboxed environment, isolating it from the global scope.
   - **Example:**
     ```javascript
     const vm = require('vm');

     const script = new vm.Script('let x = 10; let y = 20; console.log(x + y);');
     script.runInThisContext(); // Output: 30
     ```

---

### 29. **What is the purpose of the `assert` module in Node.js?**
   - **Answer:** The `assert` module provides a set of assertion functions for writing unit tests. It is commonly used to validate conditions in code.
   - **Example:**
     ```javascript
     const assert = require('assert');

     assert.strictEqual(1 + 1, 2); // Passes
     assert.strictEqual(1 + 1, 3); // Throws AssertionError
     ```

---

### 30. **What is the purpose of the `timers` module in Node.js?**
   - **Answer:** The `timers` module provides functions like `setTimeout`, `setInterval`, and `setImmediate` for scheduling the execution of code.
   - **Example:**
     ```javascript
     const { setTimeout, setInterval, setImmediate } = require('timers');

     setTimeout(() => {
       console.log('Timeout after 1 second');
     }, 1000);

     setInterval(() => {
       console.log('Interval every 1 second');
     }, 1000);

     setImmediate(() => {
       console.log('Immediate execution');
     });
     ```

---

### 31. **What is the purpose of the `domain` module in Node.js?**
   - **Answer:** The `domain` module (deprecated) was used to handle uncaught exceptions in asynchronous code. It is no longer recommended for use.
   - **Example:**
     ```javascript
     const domain = require('domain');
     const d = domain.create();

     d.on('error', (err) => {
       console.error('Domain caught error:', err);
     });

     d.run(() => {
       setTimeout(() => {
         throw new Error('Async error');
       }, 1000);
     });
     ```

---

### 32. **What is the purpose of the `repl` module in Node.js?**
   - **Answer:** The `repl` module provides a Read-Eval-Print Loop (REPL) environment for interactively running JavaScript code.
   - **Example:**
     ```javascript
     const repl = require('repl');

     const r = repl.start('> ');
     r.context.message = 'Hello, REPL!';
     ```
     You can then type `message` in the REPL to see the output.

---

### 33. **What is the purpose of the `tls` module in Node.js?**
   - **Answer:** The `tls` module provides an implementation of the Transport Layer Security (TLS) protocol for secure communication.
   - **Example:**
     ```javascript
     const tls = require('tls');
     const fs = require('fs');

     const options = {
       key: fs.readFileSync('server-key.pem'),
       cert: fs.readFileSync('server-cert.pem')
     };

     const server = tls.createServer(options, (socket) => {
       socket.write('Welcome to the secure server!\n');
       socket.pipe(socket);
     });

     server.listen(8000, () => {
       console.log('Server listening on port 8000');
     });
     ```

---

### 34. **What is the purpose of the `punycode` module in Node.js?**
   - **Answer:** The `punycode` module (deprecated) was used to convert Unicode strings to ASCII-compatible encoding (Punycode). It is now part of the `url` module.
   - **Example:**
     ```javascript
     const punycode = require('punycode');

     const encoded = punycode.toASCII('mañana.com');
     console.log(encoded); // xn--maana-pta.com

     const decoded = punycode.toUnicode('xn--maana-pta.com');
     console.log(decoded); // mañana.com
     ```

---

### 35. **What is the purpose of the `string_decoder` module in Node.js?**
   - **Answer:** The `string_decoder` module provides a way to decode `Buffer` objects into strings, handling multi-byte characters properly.
   - **Example:**
     ```javascript
     const { StringDecoder } = require('string_decoder');
     const decoder = new StringDecoder('utf8');

     const buffer = Buffer.from('Hello, World!');
     console.log(decoder.write(buffer)); // Hello, World!
     ```

---

### 36. **What is the purpose of the `worker_threads` module in Node.js?**
   - **Answer:** The `worker_threads` module allows you to run JavaScript in parallel using threads, enabling true multi-threading in Node.js.
   - **Example:**
     ```javascript
     const { Worker, isMainThread, parentPort } = require('worker_threads');

     if (isMainThread) {
       const worker = new Worker(__filename);
       worker.on('message', (message) => {
         console.log(`Main thread received: ${message}`);
       });
       worker.postMessage('Hello from main thread');
     } else {
       parentPort.on('message', (message) => {
         console.log(`Worker received: ${message}`);
         parentPort.postMessage('Hello from worker thread');
       });
     }
     ```

---

### 37. **What is the purpose of the `perf_hooks` module in Node.js?**
   - **Answer:** The `perf_hooks` module provides performance measurement utilities, such as high-resolution timers.
   - **Example:**
     ```javascript
     const { performance, PerformanceObserver } = require('perf_hooks');

     const obs = new PerformanceObserver((items) => {
       console.log(items.getEntries()[0].duration);
       performance.clearMarks();
     });
     obs.observe({ entryTypes: ['measure'] });

     performance.mark('start');
     setTimeout(() => {
       performance.mark('end');
       performance.measure('My Timer', 'start', 'end');
     }, 1000);
     ```

---

### 38. **What is the purpose of the `v8` module in Node.js?**
   - **Answer:** The `v8` module provides access to V8 engine-specific APIs, such as memory statistics and serialization.
   - **Example:**
     ```javascript
     const v8 = require('v8');

     console.log(v8.getHeapStatistics());
     ```

---

### 39. **What is the purpose of the `inspector` module in Node.js?**
   - **Answer:** The `inspector` module provides an API for interacting with the V8 inspector, which is used for debugging and profiling.
   - **Example:**
     ```javascript
     const inspector = require('inspector');
     const session = new inspector.Session();

     session.connect();
     session.post('Profiler.enable', () => {
       session.post('Profiler.start', () => {
         // Perform some operations
         session.post('Profiler.stop', (err, data) => {
           console.log(data.profile);
         });
       });
     });
     ```

---

### 40. **What is the purpose of the `async_hooks` module in Node.js?**
   - **Answer:** The `async_hooks` module provides an API to track asynchronous resources and their lifecycle events.
   - **Example:**
     ```javascript
     const async_hooks = require('async_hooks');

     const hook = async_hooks.createHook({
       init(asyncId, type, triggerAsyncId) {
         console.log(`Init: ${asyncId}, ${type}, ${triggerAsyncId}`);
       },
       destroy(asyncId) {
         console.log(`Destroy: ${asyncId}`);
       }
     });

     hook.enable();
     setTimeout(() => {}, 1000);
     ```

---

### 41. **What is the purpose of the `wasi` module in Node.js?**
   - **Answer:** The `wasi` module provides an API for running WebAssembly System Interface (WASI) programs in Node.js.
   - **Example:**
     ```javascript
     const { WASI } = require('wasi');
     const fs = require('fs');

     const wasi = new WASI({});
     const wasm = fs.readFileSync('program.wasm');
     const module = new WebAssembly.Module(wasm);
     const instance = new WebAssembly.Instance(module, {
       wasi_snapshot_preview1: wasi.wasiImport
     });

     wasi.start(instance);
     ```

---

### 42. **What is the purpose of the `diagnostics_channel` module in Node.js?**
   - **Answer:** The `diagnostics_channel` module provides a way to publish and subscribe to diagnostic events in Node.js.
   - **Example:**
     ```javascript
     const diagnostics_channel = require('diagnostics_channel');

     const channel = diagnostics_channel.channel('my-channel');
     channel.subscribe((message) => {
       console.log('Received message:', message);
     });

     channel.publish({ data: 'Hello, World!' });
     ```

---

### 43. **What is the purpose of the `trace_events` module in Node.js?**
   - **Answer:** The `trace_events` module provides an API for tracing events in Node.js, such as function calls and I/O operations.
   - **Example:**
     ```javascript
     const trace_events = require('trace_events');
     const tracing = trace_events.createTracing({ categories: ['node'] });

     tracing.enable();
     setTimeout(() => {
       tracing.disable();
     }, 1000);
     ```

---

### 44. **What is the purpose of the `permission` module in Node.js?**
   - **Answer:** The `permission` module (experimental) provides APIs for managing permissions in Node.js, such as file system access.
   - **Example:**
     ```javascript
     const permission = require('permission');

     permission.request('fs.read', '/path/to/file', (err, granted) => {
       if (granted) {
         console.log('Permission granted');
       } else {
         console.error('Permission denied');
       }
     });
     ```

---

### 45. **What is the purpose of the `test` module in Node.js?**
   - **Answer:** The `test` module (experimental) provides utilities for writing and running tests in Node.js.
   - **Example:**
     ```javascript
     const test = require('test');

     test('My test', (t) => {
       t.equal(1 + 1, 2);
       t.end();
     });
     ```

---
Here are **even more Node.js interview questions and answers with examples** to help you prepare thoroughly. These questions cover advanced topics, best practices, and real-world scenarios.

---

### 46. **What is the purpose of the `stream.pipeline` method in Node.js?**
   - **Answer:** The `stream.pipeline` method is used to pipe a series of streams together and handle errors properly. It ensures that all streams are properly cleaned up when an error occurs.
   - **Example:**
     ```javascript
     const { pipeline } = require('stream');
     const fs = require('fs');
     const zlib = require('zlib');

     pipeline(
       fs.createReadStream('input.txt'),
       zlib.createGzip(),
       fs.createWriteStream('output.txt.gz'),
       (err) => {
         if (err) {
           console.error('Pipeline failed:', err);
         } else {
           console.log('Pipeline succeeded');
         }
       }
     );
     ```

---

### 47. **What is the purpose of the `stream.finished` method in Node.js?**
   - **Answer:** The `stream.finished` method is used to detect when a stream is no longer readable, writable, or has experienced an error.
   - **Example:**
     ```javascript
     const { finished } = require('stream');
     const fs = require('fs');

     const rs = fs.createReadStream('input.txt');

     finished(rs, (err) => {
       if (err) {
         console.error('Stream failed:', err);
       } else {
         console.log('Stream is done reading');
       }
     });
     ```

---

### 48. **What is the purpose of the `stream.Writable` class in Node.js?**
   - **Answer:** The `stream.Writable` class is used to create custom writable streams. You can implement the `_write` method to handle incoming data.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     class MyWritable extends Writable {
       _write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     }

     const writable = new MyWritable();
     writable.write('Hello, World!');
     writable.end();
     ```

---

### 49. **What is the purpose of the `stream.Readable` class in Node.js?**
   - **Answer:** The `stream.Readable` class is used to create custom readable streams. You can implement the `_read` method to produce data.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     class MyReadable extends Readable {
       constructor(options) {
         super(options);
         this.data = ['Hello', 'World'];
       }

       _read() {
         if (this.data.length === 0) {
           this.push(null); // No more data
         } else {
           this.push(this.data.shift());
         }
       }
     }

     const readable = new MyReadable();
     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });
     ```

---

### 50. **What is the purpose of the `stream.Duplex` class in Node.js?**
   - **Answer:** The `stream.Duplex` class is used to create streams that are both readable and writable. It combines the functionality of `stream.Readable` and `stream.Writable`.
   - **Example:**
     ```javascript
     const { Duplex } = require('stream');

     class MyDuplex extends Duplex {
       constructor(options) {
         super(options);
         this.data = [];
       }

       _write(chunk, encoding, callback) {
         this.data.push(chunk);
         callback();
       }

       _read(size) {
         if (this.data.length === 0) {
           this.push(null);
         } else {
           this.push(this.data.shift());
         }
       }
     }

     const duplex = new MyDuplex();
     duplex.write('Hello');
     duplex.write('World');
     duplex.end();

     duplex.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });
     ```

---

### 51. **What is the purpose of the `stream.Transform` class in Node.js?**
   - **Answer:** The `stream.Transform` class is used to create streams that transform data as it passes through. It is a special type of `Duplex` stream.
   - **Example:**
     ```javascript
     const { Transform } = require('stream');

     class MyTransform extends Transform {
       _transform(chunk, encoding, callback) {
         this.push(chunk.toString().toUpperCase());
         callback();
       }
     }

     const transform = new MyTransform();
     transform.write('hello');
     transform.write('world');
     transform.end();

     transform.on('data', (chunk) => {
       console.log('Transformed:', chunk.toString());
     });
     ```

---

### 52. **What is the purpose of the `stream.PassThrough` class in Node.js?**
   - **Answer:** The `stream.PassThrough` class is a trivial implementation of a `Transform` stream that simply passes the input to the output without modification.
   - **Example:**
     ```javascript
     const { PassThrough } = require('stream');

     const passThrough = new PassThrough();
     passThrough.write('Hello');
     passThrough.write('World');
     passThrough.end();

     passThrough.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });
     ```

---

### 53. **What is the purpose of the `stream.Readable.from` method in Node.js?**
   - **Answer:** The `stream.Readable.from` method is used to create a readable stream from an iterable (e.g., an array or generator).
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = Readable.from(['Hello', 'World']);
     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });
     ```

---

### 54. **What is the purpose of the `stream.Writable.destroy` method in Node.js?**
   - **Answer:** The `stream.Writable.destroy` method is used to destroy a writable stream, optionally emitting an error event.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.write('Hello');
     writable.destroy(new Error('Stream destroyed'));
     writable.on('error', (err) => {
       console.error('Error:', err.message);
     });
     ```

---

### 55. **What is the purpose of the `stream.Readable.destroy` method in Node.js?**
   - **Answer:** The `stream.Readable.destroy` method is used to destroy a readable stream, optionally emitting an error event.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });

     readable.destroy(new Error('Stream destroyed'));
     readable.on('error', (err) => {
       console.error('Error:', err.message);
     });
     ```

---

### 56. **What is the purpose of the `stream.Writable.cork` and `stream.Writable.uncork` methods in Node.js?**
   - **Answer:** The `cork` method buffers all writes until `uncork` is called, improving performance by reducing the number of write operations.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.cork();
     writable.write('Hello');
     writable.write('World');
     writable.uncork();
     ```

---

### 57. **What is the purpose of the `stream.Readable.unpipe` method in Node.js?**
   - **Answer:** The `stream.Readable.unpipe` method is used to detach a writable stream that was previously attached using the `pipe` method.
   - **Example:**
     ```javascript
     const { Readable, Writable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     readable.pipe(writable);
     readable.unpipe(writable);
     ```

---

### 58. **What is the purpose of the `stream.Readable.pause` and `stream.Readable.resume` methods in Node.js?**
   - **Answer:** The `pause` method pauses the emission of `data` events, while the `resume` method resumes the emission of `data` events.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.pause();
     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });

     setTimeout(() => {
       readable.resume();
     }, 1000);
     ```

---

### 59. **What is the purpose of the `stream.Writable.setDefaultEncoding` method in Node.js?**
   - **Answer:** The `setDefaultEncoding` method sets the default encoding for data written to the stream.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.setDefaultEncoding('utf8');
     writable.write('Hello');
     writable.end();
     ```

---

### 60. **What is the purpose of the `stream.Writable.writev` method in Node.js?**
   - **Answer:** The `writev` method is used to write multiple chunks of data to a stream in a single operation. It is an optimization for handling multiple chunks at once.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       writev(chunks, callback) {
         for (const chunk of chunks) {
           console.log('Writing:', chunk.chunk.toString());
         }
         callback();
       }
     });

     writable.cork();
     writable.write('Hello');
     writable.write('World');
     writable.uncork();
     ```

---

Here are **even more Node.js interview questions and answers with examples** to help you prepare thoroughly. These questions cover advanced topics, best practices, and real-world scenarios.

---

### 61. **What is the purpose of the `stream.Readable.read` method in Node.js?**
   - **Answer:** The `stream.Readable.read` method is used to read data from a readable stream. It pulls data from the internal buffer and returns it.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     console.log(readable.read()); // Output: <Buffer 48 65 6c 6c 6f>
     ```

---

### 62. **What is the purpose of the `stream.Writable.end` method in Node.js?**
   - **Answer:** The `stream.Writable.end` method signals that no more data will be written to the stream. It optionally takes a final chunk of data to write before closing the stream.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.write('Hello');
     writable.end('World');
     ```

---

### 63. **What is the purpose of the `stream.Readable.unshift` method in Node.js?**
   - **Answer:** The `stream.Readable.unshift` method is used to push data back into the internal buffer of a readable stream. It is useful when you need to "unread" data.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
       readable.unshift(chunk); // Push the chunk back into the buffer
     });
     ```

---

### 64. **What is the purpose of the `stream.Writable.destroyed` property in Node.js?**
   - **Answer:** The `stream.Writable.destroyed` property indicates whether the writable stream has been destroyed.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.destroy();
     console.log(writable.destroyed); // Output: true
     ```

---

### 65. **What is the purpose of the `stream.Readable.destroyed` property in Node.js?**
   - **Answer:** The `stream.Readable.destroyed` property indicates whether the readable stream has been destroyed.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.destroy();
     console.log(readable.destroyed); // Output: true
     ```

---

### 66. **What is the purpose of the `stream.Writable.writableHighWaterMark` property in Node.js?**
   - **Answer:** The `stream.Writable.writableHighWaterMark` property returns the value of the `highWaterMark` passed when creating the writable stream. It indicates the maximum amount of data that can be buffered.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       highWaterMark: 1024,
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     console.log(writable.writableHighWaterMark); // Output: 1024
     ```

---

### 67. **What is the purpose of the `stream.Readable.readableHighWaterMark` property in Node.js?**
   - **Answer:** The `stream.Readable.readableHighWaterMark` property returns the value of the `highWaterMark` passed when creating the readable stream. It indicates the maximum amount of data that can be buffered.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       highWaterMark: 1024,
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     console.log(readable.readableHighWaterMark); // Output: 1024
     ```

---

### 68. **What is the purpose of the `stream.Writable.writableLength` property in Node.js?**
   - **Answer:** The `stream.Writable.writableLength` property returns the number of bytes (or objects) in the internal buffer waiting to be written.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.write('Hello');
     console.log(writable.writableLength); // Output: 5
     ```

---

### 69. **What is the purpose of the `stream.Readable.readableLength` property in Node.js?**
   - **Answer:** The `stream.Readable.readableLength` property returns the number of bytes (or objects) in the internal buffer waiting to be read.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     console.log(readable.readableLength); // Output: 5
     ```

---

### 70. **What is the purpose of the `stream.Writable.writableObjectMode` property in Node.js?**
   - **Answer:** The `stream.Writable.writableObjectMode` property indicates whether the writable stream is in object mode. In object mode, the stream accepts JavaScript objects instead of strings or buffers.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       objectMode: true,
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk);
         callback();
       }
     });

     writable.write({ key: 'value' });
     console.log(writable.writableObjectMode); // Output: true
     ```

---

### 71. **What is the purpose of the `stream.Readable.readableObjectMode` property in Node.js?**
   - **Answer:** The `stream.Readable.readableObjectMode` property indicates whether the readable stream is in object mode. In object mode, the stream emits JavaScript objects instead of strings or buffers.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       objectMode: true,
       read() {
         this.push({ key: 'value' });
         this.push(null);
       }
     });

     readable.on('data', (chunk) => {
       console.log('Received:', chunk);
     });

     console.log(readable.readableObjectMode); // Output: true
     ```

---

### 72. **What is the purpose of the `stream.Writable.writableCorked` property in Node.js?**
   - **Answer:** The `stream.Writable.writableCorked` property returns the number of times `cork` has been called without a corresponding `uncork`.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.cork();
     writable.cork();
     console.log(writable.writableCorked); // Output: 2
     ```

---

### 73. **What is the purpose of the `stream.Readable.readableFlowing` property in Node.js?**
   - **Answer:** The `stream.Readable.readableFlowing` property indicates whether the readable stream is in flowing mode. In flowing mode, data is automatically read from the stream and emitted as `data` events.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.on('data', (chunk) => {
       console.log('Received:', chunk.toString());
     });

     console.log(readable.readableFlowing); // Output: true
     ```

---

### 74. **What is the purpose of the `stream.Writable.writableFinished` property in Node.js?**
   - **Answer:** The `stream.Writable.writableFinished` property indicates whether the `end` method has been called and all data has been flushed to the underlying system.
   - **Example:**
     ```javascript
     const { Writable } = require('stream');

     const writable = new Writable({
       write(chunk, encoding, callback) {
         console.log('Writing:', chunk.toString());
         callback();
       }
     });

     writable.write('Hello');
     writable.end('World');
     console.log(writable.writableFinished); // Output: true
     ```

---

### 75. **What is the purpose of the `stream.Readable.readableEnded` property in Node.js?**
   - **Answer:** The `stream.Readable.readableEnded` property indicates whether the `end` event has been emitted and no more data will be emitted.
   - **Example:**
     ```javascript
     const { Readable } = require('stream');

     const readable = new Readable({
       read() {
         this.push('Hello');
         this.push(null);
       }
     });

     readable.on('end', () => {
       console.log('Stream ended');
     });

     readable.resume();
     console.log(readable.readableEnded); // Output: true
     ```

---
