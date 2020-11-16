function printOtherProps<T extends { props: string }>(obj: T) {
    const { props, ...rest } = obj;
    console.log(rest);
}

const obj1 = {
    props: 'obj1',
    name: 'leo',
    age: 18
}
printOtherProps(obj1);
