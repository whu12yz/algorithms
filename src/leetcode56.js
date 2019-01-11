/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 * [[1,3],[2,6],[8,10],[15,18]]
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
 function Interval(start, end) {
     this.start = start;
     this.end = end;
 }

var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a.start - b.start;
    })
    const result = [];
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.reduce((prev, cur, index, arr) => {
        if (prev.end < cur.start) {
            result.push(prev);
            if (index === intervals.length - 1) {
                result.push(cur);
            }
            return cur;
        }
        if (prev.end >= cur.start) {
            const tmp = new Interval(0, 0);
            if(prev.end <= cur.end) {
                tmp.end = cur.end;
            }
            if (prev.end > cur.end) {
                tmp.end = prev.end;
            }
            if (prev.start <= prev.start) {
                tmp.start = prev.start;
            }
            if (prev.start > cur.start) {
                tmp.start = cur.start;
            }
            if (index === intervals.length - 1) {
                result.push(tmp);
            }
            return tmp;
        }
    });
    return result;
};
// [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]
console.log(merge([new Interval(2, 3), new Interval(4, 5), new Interval(6, 7), new Interval(1, 10)]));

