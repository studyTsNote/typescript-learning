// 声明合并

interface Merging {
    name: string,
    getInfo(input: number): string
}
interface Merging {
    age: number,
    getInfo(input: string): number
}
const merging: Merging = {
    name: 'leo',
    age: 20,
    getInfo(input: any): any {
        if (typeof input === 'string') {
            return input.length;
        } else {
            return String(input);
        }
    }
}
console.log(merging.getInfo('233'), merging.getInfo(233));

// ==========================================================

class Utils {
    test() {
        console.log('Utils test');
    }
}

namespace Utils {
    export const flag = 'Utils';
    export const now = (): number => Date.now();
}
namespace Utils {
    export const prefix = (text: string): string => {
        return `${Utils.now()}-${text}`;
    }
}
console.log(Utils.prefix('log a message'));
console.dir(Utils); // 命名空间中的声明被合并为了类的静态属性/方法

// ==============================================================

function countUp() {
    countUp.count += 1;
}
namespace countUp {
    // eslint-disable-next-line prefer-const
    export let count = 0;
}
console.log(countUp.count);
countUp();
countUp();
console.log(countUp.count);
console.dir(countUp);

// ==============================================================

enum Colors {
    red,
    green,
    blue
}
namespace Colors {
    export const yellow = 4
}
console.log(Colors);
