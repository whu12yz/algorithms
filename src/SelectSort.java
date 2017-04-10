/**
 * Created by zhangyang on 2017/4/10.
 */
//选择排序算法
public class SelectSort implements Algorithms {
    @Override
    public int[] sort(int[] arr) {
        if(arr == null || arr.length == 0) return null;
        int minIndex = 0;
        int len = arr.length;
        for(int i = 0; i < len -1; i ++){
           minIndex = i;
           for(int j = i + 1; j < len; j ++){
               if(arr[j] < arr[minIndex]){
                   swap(arr, j, minIndex);
               }

           }
        }
        return arr;
    }

    public static  void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
