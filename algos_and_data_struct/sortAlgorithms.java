import java.util.Arrays;

public class sortAlgorithms{
    public static void main(String[] args){
        test();
    }

    public static int[] bubbleSort(int[] nums){
        int temp;
        for (int i = 0; i < nums.length; i++){
            for (int j=0; j < nums.length - i - 1; j++){
                if (nums[j] > nums[j + 1]){
                    temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
            }
        }
        return nums;
    }

    public static int[] selectionSort(int[] nums){
        for (int i=0; i < nums.length-1; i++){
            int menorIndice = i;
            for (int j=i+1; j<nums.length; j++){
                if (nums[j] < nums[menorIndice]){
                    menorIndice = j;
                }
            }
            if (menorIndice != i){
                int temp = nums[i];
                nums[i] = nums[menorIndice];
                nums[menorIndice] = temp;
            }
        }
        return nums;
    }

    public static int[] insertionSort(int[] nums){
        for (int i=1; i<nums.length; i++){
            int current = nums[i];
            int j = i-1;
            while(j >= 0 && nums[j]>current){
                nums[j+1] = nums[j];
                j--;
            }
            nums[j+1] = current;
        }
        return nums;
    }

    public static void merge(int[] leftArray, int[] rightArray, int[] array){
        int leftSize = array.length/2;
        int rightSize = array.length - leftSize;
        int i = 0, l = 0, r = 0;

        while(l < leftSize && r < rightSize){
            if(leftArray[l] < rightArray[r]){
                array[i] = leftArray[l];
                i++;
                l++;
            }else{
                array[i] = rightArray[r];
                i++;
                r++;
            }
        }

        while (l < leftSize){
            array[i] = leftArray[l];
            i++;
            l++;
        }
        while (r < rightSize){
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }
    public static void mergeSort(int[] nums){
        int len = nums.length;
        if (len <= 1) return;

        int middle = len/2;
        int[] leftArray = new int[middle];
        int[] rightArray = new int[len - middle];
        int i = 0;
        int j = 0;

        for (; i < len; i++){
            if (i < middle){
                leftArray[i] = nums[i];
            }else{
                rightArray[j] = nums[i];
                j++;
            }
        }
        mergeSort(leftArray);
        mergeSort(rightArray);
        merge(leftArray, rightArray, nums);

    }


    public static int[] quickSort(int[] nums, int start, int end){
        if (end <= start){
            return nums;
        }
        int pivot = partition(nums, start, end);
        quickSort(nums, start, pivot - 1);
        quickSort(nums, pivot + 1, end);
        return nums;
    }
    public static int partition(int[] array, int start, int end){
        int pivot = array[end];
        int i = start - 1;
        for (int j = start; j<end; j++){
            if (array[j] < pivot){
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        i++;
        int temp = array[i];
        array[i] = array[end];
        array[end] = temp;

        return i;
    }

    public static void test(){
        int[] newList = {3, 0, 2, 5, 4, 8, 12, 5, 7, 1};
        // mergeSort(newList);
        quickSort(newList, 0, newList.length-1);
        System.out.println(Arrays.toString(newList));
    }
}