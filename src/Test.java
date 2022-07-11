import java.math.BigDecimal;

public class Test {
    public static void main(String[] args) {
        int[] nums = new int[3];
        BigDecimal a = new BigDecimal("0.1");
        BigDecimal b = new BigDecimal("0.2");
        System.out.println(a.add(b));
        for (int n:nums) {
            System.out.println(n);
        }
    }
}