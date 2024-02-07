
// ✅ When Keys are STRINGS
const map1 = new Map([
    ['z', 'three'],
    ['a', 'one'],
    ['b', 'two'],
]);

// ✅ Sort Ascending (low to high)
const sortedAsc = new Map([...map1].sort());
    
// 👇️ {'a' => 'one', 'b' => 'two', 'z' => 'three'}
console.log(sortedAsc);
    
// 👇️ {'z' => 'three', 'a' => 'one', 'b' => 'two'}
console.log(map1)

// 👇️ {'a' => 'one', 'b' => 'two', 'z' => 'three'}
console.log(sortedAsc);

// ✅ Sort Descending (high to low)
const sortedDesc = new Map([...map1].sort().reverse());

// 👇️ {'z' => 'three', 'b' => 'two', 'a' => 'one'}
console.log(sortedDesc);


// export {sortedAsc, sortedDesc} 