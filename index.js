console.log('🕒 Starting Haruna . . .');
const path = require('path');
const { fork } = require('child_process');
const start = () => {
    const p = fork(path.join(__dirname, 'main.js'), process.argv.slice(2), {
            stdio: ['inherit', 'inherit', 'inherit', 'ipc']
        })
        .on('message', data => {
            if (data === 'reset') {
                console.log('🕒 Restarting Haruna . . .');
                p.kill()
            }
            if (data === 'uptime') {
                p.send(process.uptime());
            }
        })
        .on('exit', code => {
            console.log('Exited with code:', code);
            start()
        });        
};
start()