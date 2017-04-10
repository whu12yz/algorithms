/**
 * Created by zhangyang on 2017/4/9.
 */
public class AlgorithmsFactory {
    String insert = "Insert";
    String bubble = "Bubble";
    String select = "Select";
    public Algorithms getAlgorithms(String algorithm){
        if(algorithm == null){
            return null;
        }
        if(algorithm == insert){
            return new InsertSort();
        }
        if(algorithm == bubble){
            return new BubbleSort();
        }
        if(algorithm == select){
            return new SelectSort();
        }
        return null;
    }
}
