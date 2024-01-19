//your JS code here. If required.
let arr = [1 , 2 , 3 , 4 , 5, 6];
let promise1 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
    const evenNumbers = arr.filter((number)=>number % 2 !==0);
    if(arr.length > 0){
     resolve(evenNumbers);
    }else{
     reject('array is empty')
    }
  },3000)
  
})
let promise2 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
    const multi = [] ;
    if(arr.length > 0){
      arr.forEach((e)=>{
        if(e % 2===0){
          multi.push(e * 2);
        }
      })
     resolve(multi);
    }else{
     reject('array is empty')
    }
  },2000)
  
})
promise1.then((data1) => {
  document.getElementById('output').innerText = data1;
  return promise2;
}).then((data2) => {
  document.getElementById('output').innerText += '\n' + data2;
}).catch((error) => {
  console.error(error);
});
