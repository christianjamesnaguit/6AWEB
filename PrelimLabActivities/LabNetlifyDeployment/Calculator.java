public class Calculator {
    public static void main(String[] args) {
        // Calling the method and passing arguments
        displayMessage();
        int sum = addNumbers(5, 10);
        System.out.println("The sum is: " + sum);
    }

    public static void displayMessage() {
        System.out.println("Hello from the method!");
    }

    public static int addNumbers(int a, int b) {
        return a + b;
    }
}
