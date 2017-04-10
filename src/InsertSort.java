/**
 * Created by zhangyang on 2017/4/9.
 */
//插入排序算法
public class InsertSort implements Algorithms {
    @Override
    public int[] sort(int[] arr) {
        if(arr == null || arr.length == 0) return null;
        for (int i = 1; i < arr.length; i ++){
            int j = i;
            int target = arr[j];
            while (j > 0 && target < arr[j - 1]){
                arr[j] = arr[j - 1];
                j--;
            }

            arr[j] = target;
        }
        return arr;
    }
}
