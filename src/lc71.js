/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = path.split('/');
    let cmd = [];
    arr.forEach((item) => {
        if (item === '..') {
            cmd.pop();
        } else if(item !== '.' && item){
            cmd.push(item);
        }
    })
    return '/' + cmd.join('/');
};