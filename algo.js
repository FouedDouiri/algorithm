function checkperiode(sentence) {
    if (sentence.endsWith('.')) {
      return sentence.length;
  
      
    } else {
      return "please end your sentence with a period";
    }
  }
      function wordscount (sentence){
          let count=1
          for (let i=0;i<sentence.length;i++)
          {
              if(sentence[i]===' '){
                  count++
                  
              }
            
          }
           return count
         
      }
      function vow(sentence){
          let count2=0
          for(let i=0;i<sentence.length;i++){
              if(sentence[i]==='a'||sentence[i]==='e'||sentence[i]==='i'||sentence[i]==='o'||sentence[i]==='u'||sentence[i]==='y'){
                  count2++
              }
              
          }
             return count2
       
      }
      
  console.log (checkperiode("lalala lalalal."))
  console.log (wordscount("lalala lalalal."))
  console.log (vow("Foued."))