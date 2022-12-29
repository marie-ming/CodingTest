import java.util.*;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int C = sc.nextInt();
        double[] arr = new double[C];

        for (int i = 0; i < C; i++) {
            int N = sc.nextInt();
            int[] std = new int[N];
            int sum = 0;

            for (int j = 0; j < N; j++) {
                std[j] = sc.nextInt();
                sum = sum+std[j];
            }
            double avg = sum/N;
            int cnt = 0;
            for (int j = 0; j < N; j++) {
                if(std[j]>avg)
                    cnt++;
            }
            arr[i] = (double)cnt/N*100;
        }

        for (int i = 0; i < C; i++) {
            System.out.println(String.format("%.3f" ,arr[i])+"%");
        }
    }
}