
//contsants
let sizeOfArray = 40;
let min = 3;
let max = 250;
let array = [sizeOfArray];
let bubblePushedArray = [sizeOfArray];

// craetes the array
createArray();

function createArray() {
    for(var i = 0; i < sizeOfArray; i++) {
        array[i] = createArrayValue(min,max);
        if(array[i] == array[i-1]) {
            array[i] = createArrayValue(min,max);
        }
    }
}

function createArrayValue(min,max) {
    return Math.floor(Math.random() * (max-min) + min);
}


sortUsingBubbleMethod();

function sortUsingBubbleMethod() {
    bubblePushedArray = Array.from(array);

    for(var i = 0; i < sizeOfArray; i++) {
        for(var j = 0; j < sizeOfArray - 1; j++) {
            if(bubblePushedArray[j] > bubblePushedArray[j+1]) {
                let x = bubblePushedArray[j];
                bubblePushedArray[j] = bubblePushedArray[j+1];
                bubblePushedArray[j+1] = x;
            }
        }
    }
} 