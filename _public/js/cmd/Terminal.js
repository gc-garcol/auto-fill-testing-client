(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const { exec, execSync } = require('child_process'); 

const commandline={
    run:runCommand,
    runSync:runSync,
    //will be deprecated soon as run is now the same.
    get:runCommand,
    
};

function runCommand(command,callback){
    
    return exec(
        command,
        (
            function(){
                return function(err,data,stderr){
                    if(!callback)
                        return;

                    callback(err, data, stderr);
                }
            }
        )(callback)
    );
}

function runSync(command){
    try {
        return { 
            data:   execSync(command).toString(), 
            err:    null, 
            stderr: null 
        }
    } 
    catch (error) {
        return { 
            data:   null, 
            err:    error.stderr.toString(), 
            stderr: error.stderr.toString() 
        }
    }
}

module.exports=commandline;

},{"child_process":1}],3:[function(require,module,exports){
var cmd = require('node-cmd');

var process = cmd.run('ls');
},{"node-cmd":2}]},{},[3]);
