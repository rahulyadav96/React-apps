const convert = require("./convert.js");
test("Change 1 kb into mb",()=>{
    expect(convert(1,"mb")).toBe(0.0009765625)
})
test("convert 1 mb init kb",()=>{
    expect(convert(1,"kb")).toBe(1024)
})
test("convert 1024*1024 kb into gb",()=>{
    expect(convert(1048576,"gb")).toBe(1);
})