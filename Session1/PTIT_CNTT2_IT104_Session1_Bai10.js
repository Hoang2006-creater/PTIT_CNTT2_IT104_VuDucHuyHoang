function groupAnagrams(word){
    const group=word.reduce((acc,word)=>{
        const key = word.split('').sort().join('');
        if(!acc[key]){
            acc[key]=[]
        }
        acc[key].push(word);
        return acc;
    },{})
    return Object.values(group)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))