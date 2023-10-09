class shuffle_Array {

    static public String[] shuffleArray(String[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            int s = i * (int) (Math.random() * (n - i));
            System.out.println(s);
            String temp = arr[s];
            arr[s] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        String[] arr = { "2", "4", "1", "3", "5" };

        shuffleArray(arr);
        for(int i=0; i < arr.length; i++){
            System.out.print(arr[i]);
        }

    }

}