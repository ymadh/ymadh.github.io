import React from 'react';

const Insertion = () => {

    const unsorted = [6,5,4,3,2,21];

    const logArray = [];
    
   
        const tmpArr = [...unsorted];
        let len = tmpArr.length;

        for (let i=1; i<len; i++) {
            let temp = tmpArr[i];

            for (let j=i-1; j>=0; j--) {
                
                logArray.push([`comparing ${temp} to ${tmpArr[j]}`]);
                if (tmpArr[j] > temp) {
                    logArray.push([`swap ${temp} and ${tmpArr[j]}`]);
                    tmpArr[j+1] = tmpArr[j];
                    tmpArr[j] = temp;
                    
                }
            
            }
        
        }
        


   
    return ( 
        <div>
            Insertion Sort Alogorithm
            <div>
                Starting Array = {unsorted.map((item) => {
                    return <span>{item}, </span>
                })}
                <div>Final Array =
                {tmpArr.map((item) => {
                    return <span key={item}>{item} </span>
                })}
                </div>

                {logArray.map((item) => {
                    return <div  key={item}>{item}</div>
                })}
            </div>
        </div>
     );
}
 
export default Insertion;