/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// 双向链表解题
function ListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1;
    }
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.map.has(key)) {
        if (this.map.size >= this.capacity) {
            const node = this.deleteTail();
            this.map.delete(node.key);
        }
        const node = new ListNode(key, value);
        this.addToHead(node);
        this.map.set(key, node);
    } else {
        const node = this.map.get(key);
        node.value = value;
        this.moveToHead(node);
    }
};

LRUCache.prototype.addToHead = function(node) {
    node.next = this.dummyHead.next;
    node.prev = this.dummyHead;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
}
LRUCache.prototype.removeNode = function(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
}
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
}

LRUCache.prototype.deleteTail = function() {
    let node = this.dummyTail.prev;
    this.removeNode(node);
    return node;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

