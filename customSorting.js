let ary = [2, 6, 4, 10, 0, 0, 150], max, finalMinList = [], finalMaxList = [];

const descSorting = ary => {
    let ary2 = [...ary];
    for (let element in ary2) {
        for (let i = 0; i < ary2.length; i++) {
            max = ary2[element];
            if (ary2[element] > ary2[i]) {
                ary2[i] = ary2[element];
            }
            if (element == ary2.length - 1 && element == i) {
                if (ary2.length == 1) {
                    finalMaxList.push(ary2[element])
                }
                else {
                    finalMaxList.push(max);
                    let index = ary.indexOf(max);
                    ary.splice(index, 1);
                    descSorting(ary)
                }
            }
        }
    }
    return finalMaxList;
};

const ascSorting = list => {
    console.log(list.length);
    let ln = list.length - 1;
    for (let i = ln; i >= 0; i--) {
        console.log(list[i]);
        finalMinList.push(list[i]);
    }
}
let returnValue = descSorting(ary);
ascSorting(returnValue)
console.log('Desc result', finalMaxList);
console.log('Asc result', finalMinList);
