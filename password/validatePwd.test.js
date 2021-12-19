const pwdValidator = require('./validatePwd')
test("checking for length",()=>{
    expect(pwdValidator("absjd")).toBe("password should contain at-least 6 character")
});
test("check for number in a@bcAsasd",()=>{
    expect(pwdValidator("a@bcAsasd")).toBe("Number is missing")
})
test("check for special charater in a5bcAsasd",()=>{
    expect(pwdValidator("a5bcAsasd")).toBe("special character is missing")
})
test("check for small charater in RAHUL@123",()=>{
    expect(pwdValidator("RAHUL@123")).toBe("small character is missing")
})
test("check for Capital charater in rahul@123",()=>{
    expect(pwdValidator("rahul@123")).toBe("Capital character is missing")
})
test("check for Rahul@123",()=>{
    expect(pwdValidator("Rahul@123")).toBe("strong password")
})

test("check for 123*dkjfn",()=>{
    expect(pwdValidator("123*dkjfn")).toBe("Capital character is missing")
})
test("check for empty",()=>{
    expect(pwdValidator("")).toBe("password should contain at-least 6 character")
})
test("check for Rahul23%",()=>{
    expect(pwdValidator("Rahul23%")).toBe("strong password")
})
test("check for Helo875",()=>{
    expect(pwdValidator("Helo875")).toBe("special character is missing")
})