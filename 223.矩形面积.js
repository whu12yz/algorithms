/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    const rect1 = (D - B) * (C - A);
    const rect2 = (H - F) * (G - E);
    const overlap = (Math.min(G, C) - Math.max(E, A)) * (Math.min(H, D) - Math.max(B, F))
    if ((Math.min(G, C) - Math.max(E, A) > 0) && overlap > 0) {
        return rect1 + rect2 - overlap;
    }
    return rect1 + rect2;
};

