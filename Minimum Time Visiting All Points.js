/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let top=0;
    let bottom=0;
    let first=null
    let second=null
    for(let i=0;i<=points.length-2;i++){
        first=points[i]
        second=points[i+1]
        let firstX=first[0]
        let secondX=second[0]
        let firstY=first[1]
        let secondY=second[1]
        if(firstX<secondX){
            let temp= firstX;
            firstX=secondX;
            secondX=temp;   
        }
        if(firstY<secondY){
            let temp= firstY;
            firstY=secondY;
            secondY=temp;   
        }
        let firstMove = firstX-secondX
        let secondMove = firstY-secondY
        if(firstMove<0){
            firstMove*-1
        }
        if(secondMove<0){
            secondMove * -1
        }
         top+= firstMove>secondMove?firstMove:secondMove;
        
    }
   return top
};