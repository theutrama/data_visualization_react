

export function quickSort(data, pivot, right){
    if(pivot<right){
        let part = partition(data, pivot, right);
        quickSort(data, part, right-1);
        quickSort(data, part+1, right);
        console.log(data)
    }
}

function partition(data, pivot, right){
    let smallestValue = data[right];
    let i = pivot - 1;
    for(let j=pivot; j===right-1; j++){
        if(data[j] <= smallestValue){
            i++;
            let x = data[i];
            data[i] = data[j];
            data[j] = x;
        }
    }
    let y = data[i+1];
    data[i+1] = data[right];
    data[right] = y;

    return i+1;
}

export default quickSort