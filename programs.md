```javascript
let a = [1,2,3,4,1,2]
let b = [];
for (let i = 0; i < a.length; i++) {

    if (b.includes(a[i])) {
        b = b.filter((e) => e != a[i]);
    }
    else {
        b.push(a[i])
    }

}
// output : [3,4]
console.log(b)
```

```javascript
let c=[1,2,3,4,1,1,2,3]
let obj={}
for(let i=0;i<c.length;i++){
    if(Object.keys(obj).includes(c[i].toString())){
        obj[c[i]]=obj[c[i]]+1
    }else{
        obj[c[i]]=0
    }
    
} // output { '1': 2, '2': 1, '3': 1, '4': 0 }
console.log(obj)

}
```
