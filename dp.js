// 钞票问题
function money(array, w) {
    let min = [];
    for (let i = 0; i < array.length; i ++) {
        money(array, w-i);
    }
}