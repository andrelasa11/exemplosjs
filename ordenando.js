const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const shuffle = (array, exchanges) => {
    for (let i = 0; i < exchanges; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1);
        }
    }
};

const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIdx]) minIdx = j;
        }
        if (i !== minIdx) swap(array, i, minIdx);
    }
};

const particionamento = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

const quick_sort = (array, low, high) => {
    if (low < high) {
        const pi = particionamento(array, low, high);
        quick_sort(array, low, pi - 1);
        quick_sort(array, pi + 1, high);
    }
};