import java.lang.reflect.Array;

/**
 * Created by zhangyang on 2017/4/9.
 */

public class TestAlgorithms {
    private int[] createArray(){
        int[] arr = new int[20];
        System.out.println("OldArray:");
        for (int i = 0; i < arr.length; i ++){
            arr[i] = (int)(Math.random() * 100);
            System.out.print(arr[i] + "\t");
        }
        return arr;
    }
    private void showNewArray(int[] arr){
        System.out.println("\nNewArray:");
        for(int element: arr){
            System.out.print(element + "\t");
        }
    }

    public static void main(String[] args){
        BubbleSort sort = new BubbleSort();
        TestAlgorithms test = new TestAlgorithms();
        int arr[] = test.createArray();
        sort.bubbleSort(arr);
        test.showNewArray(arr);
    }
}
