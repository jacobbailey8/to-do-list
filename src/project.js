export default class Project {
    constructor(name){
        this.name = name;
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    removeTask(index){
        this.taskArray.splice(index, 1);
    }

    // return new array of tasks sorted in order by date
    sortTasks(){
        function swap(arr, xp, yp){
            var temp = arr[xp];
            arr[xp] = arr[yp];
            arr[yp] = temp;
        }
 
        // An optimized version of Bubble Sort
        function bubbleSort( arr, n){
            var i, j;
            for (i = 0; i < n-1; i++) {
                for (j = 0; j < n-i-1; j++) {
                    if (arr[j] > arr[j+1]){
                        swap(arr,j,j+1);
                
                    }
                }
        
            }
        }

        bubbleSort(this.taskArray, this.taskArray.length);
    }

    


}