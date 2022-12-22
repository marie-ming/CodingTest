import java.util.*;
public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int H = sc.nextInt();
        int M = sc.nextInt();
        int C = sc.nextInt();

        int n = (M + C) / 60;
        int ho = H + n;
        int mi = M + C - (60 * n);

        if(M+C<60)
            System.out.println(H + " " + (M+C));
        else if(H+n>=24) {
            if (mi == 60)
                System.out.println((ho-24) + " " + 0);
            else
                System.out.println((ho-24) + " " + mi);
        }
        else {
            if (mi == 60)
                System.out.println(ho + " " + 0);
            else
                System.out.println(ho + " " + mi);
        }
    }
}