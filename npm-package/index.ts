function arrayMap<T, U>(
    array: T[], 
    callback: (item: T, index: number, array: ReadonlyArray<T>) => U
): U[] {
    const resArr = [];
    for (let i = 0; i < array.length; i++) {
        const res = callback(array[i], i, array);
        resArr.push(res);
    }
    return resArr;
}

export default arrayMap;
