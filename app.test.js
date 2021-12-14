
const {add}=require("./app")
const {myArray}=require("./app")
const {nullTest}=require("./app")
const {truthyTest}=require("./app")
const {notFalsy}=requires("./app")


test ("2+3=5", ()=>{

    expect(add(2,3)).toBe(5)



})

test ("should contain Stuart", ()=>{
    expect(myArray).toContain('Stuart');
}
)
test("Should not be null",()=>{
    expect(nullTest).not.toBeNull;
})
test("Value should be truthy", ()=>{

    expect(truthyTest).toBeTruthy();

})

test("Value should not be falsy", ()=>{
    expect(notFalsy).not.toBeFalsy();
})