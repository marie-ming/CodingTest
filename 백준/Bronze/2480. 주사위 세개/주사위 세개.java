import java.util.*;
public class Main{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        Integer[] num = {a,b,c};
        Arrays.sort(num);
        Arrays.sort(num,Collections.reverseOrder());

        if(a==b && b==c && c==a)
            System.out.println(10000+a*1000);
        else if (a==b)
            System.out.println(1000+a*100);
        else if (b==c)
            System.out.println(1000+b*100);
        else if (c==a)
            System.out.println(1000+c*100);
        else
            System.out.println(num[0]*100);

    }
}