import java.util.*;
public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int sum = sc.nextInt();
        int num = sc.nextInt();
        int ans=0;

        for (int i = 1; i <= num; i++) {
            int m = sc.nextInt();
            int n = sc.nextInt();

            ans = ans+(m*n);
        }
        if(ans == sum)
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}