function handleUniontype(word:string|number){
   if(typeof word ==="string"){
    console.log(`${word}co ${word.length} ky tu` );
   }else{
        if(word % 2==0){
            console.log("Day la so chan");
        }else{
            console.log("Day la so le");
        }
   }
}
handleUniontype("demo123")
handleUniontype(10)