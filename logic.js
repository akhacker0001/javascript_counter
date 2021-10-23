var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset")
var increase = document.getElementById("increase");
var counter = document.getElementById("count");

decrease.addEventListener("click",function(){
    counter.innerHTML = parseInt(counter.innerHTML)-1
    counter.innerHTML = counter.innerHTML;
})

reset.addEventListener("click",function(){
    counter.innerHTML = 0;
})

increase.addEventListener("click",function(){
    counter.innerHTML = parseInt(counter.innerHTML)+1
    counter.innerHTML = counter.innerHTML;
})




// function getLetter(s) {
//     var find;
//     if(s[0]=='a'||s[0]=='e'||s[0]=='i'||s[0]=='o'||s[0]=='u')
//     {
//       find = 1
//     }
//     else if(s[0]=='b'||s[0]=='c'||s[0]=='d'||s[0]=='f'||s[0]=='g')
//     {
//         find = 2
//     }
//     else if (s[0]=='h'||s[0]=='j'||s[0]=='k'||s[0]=='l'||s[0]=='m')
//     {
//         find=3
//     }
//     else
//     {
//        find = 4
//     }
    
//     switch(find){
//         case 1:
//         console.log("a")
//         break
        
//         case 2:
//         console.log('b')
//         break
        
//         case 3:
//         console.log('c')
//         break
      
//         case 4:
//         console.log('d')
//         break
       
        
//     }
//     console.log(find)
//     console.log(s[0])
// }



// getLetter("zen")

// function isPositive(a) {
//     var len = a.length;
//     for(let i = 0;i<len;i++)
//     {
//     try{
//     if(a[i]<0){
//         throw "Negative Error";
//     }
//     else if(a[i]==0)
//     {
//         throw "Zero Error";
//     }
//     else
//     {
//         throw "YES";
//     }
//     }
//     }
   
// }



// function main() {
//     const n = +(readLine());
    
//     for (let i = 0; i < n; i++) {
//         const a = +(readLine());
      
//         try {
//             console.log(isPositive(a));
//         } catch (e) {
//             console.log(e.message);
//         }
//     }
// }

// console.log(Date())
// var c = '12/6/2021'

// var d = new Date(c);
// var e = d.getDay()
// console.log(e)

// function Rectangle(a, b) {
//     var red = {
//         length:a,
//         width:b,
//         perimeter:2*(a+b),
//         area:a*b
//     };
//     console.log(red.length)
//     console.log(a)
    
// }


// function main() {
//     const a = 5
//     const b = 4
    
//     const rec = new Rectangle(a, b);
    
//     console.log(rec.length);
//     console.log(rec.width);
//     console.log(rec.perimeter);
//     console.log(rec.area);
// }