const arr=[]
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*100))
}
console.log(arr)
const sort= (arg) => {
    if (arg.length <= 1) {
        return arg;
    }
    const middle=arg[0]
    const behind=[]
    const font=[]
    for (let i = 1; i < arg.length; i++) {
        if (arg[i]>middle){
            behind.push(arg[i])
        }else {
           font.push(arg[i])
        }
    }
  return [...sort(font),arg[0],...sort(behind)]
}
console.log(sort(arr))