function multiply() {
    this.multiplyMatrix = function(Matrix1,Matrix2){
        let R1 = Matrix1.length;
        let C1 = Matrix1[0].length;
        let R2 = Matrix2.length;
        let C2 = Matrix2[0].length;
        let Result=[];
        for (let i=0; i < R1; i++){ 
            Result[i]=[];
            for (let j=0; j < C2; j++){ 
                Result[i][j]=0;
                //console.log("--------"+i+","+j+"------------");
                for (let k=0; k <R2; k++){ 
                    Result[i][j] = Result[i][j]+(Matrix1[i][k]*Matrix2[k][j])
                }
                //console.log(Result[i][j]);
            }
        }
        //console.log("--------------------");
        return Result;
    };
};

module.exports = multiply; 