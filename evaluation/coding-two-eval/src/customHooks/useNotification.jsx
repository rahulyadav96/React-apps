
export const successNotification = (text,time)=>{
console.log(text,time)
    setTimeout(()=>{
        alert(text)
    },time)
}
export const failureNotification = ({text,time})=>{
    setTimeout(()=>{
        alert(text)
    },time)

}
  