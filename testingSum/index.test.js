const sum = require("./index");
test(" add 4,5,6,7",()=>{
    expect(sum(4,5,6,7)).toBe(22)
})

test("add 10,20,30,40",()=>{
    expect(sum(10,20,30,40)).toBe(100)
})
test(" add 80,5,35,7",()=>{
    expect(sum(80,5,35,7)).toBe(127)
})

test("add 100,2220,30,440",()=>{
    expect(sum(100,2220,30,440)).toBe(2790)
})
