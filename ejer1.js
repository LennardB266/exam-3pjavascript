function calcular(){
    var num = parseInt(document.getElementById('numero').value);
    sum=0;
    for (let x = 0; x<=num; x++) {
        if(x%2!=0){
            document.write(x+'<br>')
        }
        if(x%2==0){
           sum+=x; 
        }
        
    }
    document.write("la suma de los pares:"+sum)
    
    
}
