import java.util.Scanner;

public class CaloriesCalculator {
    
    // Global variable: Declaring calories per gram as a constant
    public static final int CALORIES_PER_GRAM = 9; // Global variable

    public static void main(String[] args) {
        // Local variables for inputs
        String foodName = getInput("Enter the name of the food item: "); // Local variable
        int gramsOfFat = Integer.parseInt(getInput("Enter the number of grams of fat: ")); // Local variable
        int numberOfServings = Integer.parseInt(getInput("Enter the number of servings: ")); // Local variable
        
        // Calculate total calories using the original calories() module
        int totalCalories = calories(gramsOfFat);
        
        // Calculate and display calories per serving
        double caloriesPerServing = caloriesPerServing(totalCalories, numberOfServings);
        
        System.out.println("The total calories in " + foodName + " are " + totalCalories + 
                           " and calories per serving = " + String.format("%.2f", caloriesPerServing));
    }

    // Module to get input from the user
    public static String getInput(String prompt) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print(prompt);
            return scanner.nextLine();
        }
    }

    // Part 1: Original calories() module that assumes constant CALORIES_PER_GRAM
    public static int calories(int gramsOfFat) {
        return gramsOfFat * CALORIES_PER_GRAM;
    }

    // Module to calculate the calories per serving
    public static double caloriesPerServing(int totalCalories, int numberOfServings) {
        return (double) totalCalories / numberOfServings;
    }

    // Part 3: Modified calories() module with calories per gram as a parameter
    public static int calories(int gramsOfFat, int caloriesPerGram) {
        return gramsOfFat * caloriesPerGram;
    }
}
