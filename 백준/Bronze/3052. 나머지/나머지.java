import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        boolean[] a = new boolean[42];

        for(int i=0; i < 10; i++){
            a[in.nextInt() % 42] = true;
        }

        int count = 0;
        for(int i = 0; i < 42; i++){
            if(a[i])
                count++;
        }

        System.out.println(count);
        
    }
}