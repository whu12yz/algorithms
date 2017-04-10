import java.lang.reflect.Array;

/**
 * Created by zhangyang on 2017/4/9.
 */

public class TestAlgorithms {
    int arraySize = 30;
    int randomMax = 200;

    private int[] createArray(){
        int[] arr = new int[arraySize];
        System.out.println("OldArray:");
        for (int i = 0; i < arr.length; i ++){
            arr[i] = (int)(Math.random() * randomMax);
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
        AlgorithmsFactory algorithmsFactory = new AlgorithmsFactory();
        Algorithms bubble = algorithmsFactory.getAlgorithms("Bubble");
        Algorithms insert = algorithmsFactory.getAlgorithms("Insert");
        Algorithms select = algorithmsFactory.getAlgorithms("Select");

        TestAlgorithms test = new TestAlgorithms();
        System.out.println("\nBubbleSort:");
        test.showNewArray(bubble.sort(test.createArray()));

        System.out.println("\nInsertSort:");
        test.showNewArray(insert.sort(test.createArray()));

        System.out.println("\nSelectSort:");
        test.showNewArray(select.sort(test.createArray()));
    }
}
