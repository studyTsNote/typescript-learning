import arrayMap from '../dist';

const arr = arrayMap([1, 'a', 2, 'c'], (item) => {
    return typeof item === 'number' ? item+1 : `${item}1`
});
console.log(arr);
