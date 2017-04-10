/**
 * Created by zhangyang on 2017/4/9.
 */
//冒泡排序算法
public class BubbleSort implements Algorithms {
    @Override
    public int[] sort(int[] arr) {
        if(arr == null || arr.length == 0){
            return null;
        }
        for(int i = 0; i < arr.length; i ++){
            for (int j = 0; j < arr.length -1 - i; j ++){
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
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
