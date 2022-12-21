import java.awt.*;
import java.util.*;

public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();

        String b =  Integer.toString(B);
        String[] arr = b.split("");

        System.out.println(A*Integer.parseInt(arr[2]));
        System.out.println(A*Integer.parseInt(arr[1]));
        System.out.println(A*Integer.parseInt(arr[0]));
        System.out.println(A*B);
    }
}