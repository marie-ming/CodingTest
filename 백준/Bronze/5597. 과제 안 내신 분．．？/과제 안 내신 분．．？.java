import java.util.*;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[30];
        for (int i = 0; i < 30; i++) {
            arr[i] = i+1;
        }

        for (int i = 0; i < 28; i++) {
            int a = sc.nextInt();
            for (int j = 0; j < 30; j++) {
                if (arr[j]==a) {
                    arr[j] = 0;
                    break;
                }
            }
        }
        Arrays.sort(arr);
        for (int i = 0; i < 30; i++) {
            if(arr[i] != 0)
                System.out.println(arr[i]);
        }
    }
}
