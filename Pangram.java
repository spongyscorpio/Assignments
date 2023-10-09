public class Pangram {
    public static boolean isPangram(String input) {
  
        input = input.toLowerCase();

        boolean[] alphabet = new boolean[26];
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
    
            if (ch >= 'a' && ch <= 'z') {
                alphabet[ch - 'a'] = true;
            }
        }
        
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        // String input = "not a pangram";
        String input = "Jumpy kids vex Mr. Woz, flabbergasting the quiet school";
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
