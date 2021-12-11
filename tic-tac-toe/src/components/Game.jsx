import { useEffect, useState } from "react"
import "./game.css"

export const Game =()=>{
    const [winner,setWinner] = useState("");
    const [player,setPlayer] = useState(1)
    const [value,setValue] = useState([
        ["","",""],
        ["","",""],
        ["","",""],
    ]);
    useEffect(()=>{
        checkWinner(value);
    },[value])

    const handleClick =(i,j)=>{     
           if (player ===1){
               

                setValue([...value, value[i][j] = "X"])
                setPlayer(0)
            }else{
                
                setValue([...value, value[i][j] = "O"])

                setPlayer(1)
            }
       
        
    }
    function checkWinner(value){

        if(value[0][0]==="X"&& value[1][1] === "X" && value[2][2]==="X") setWinner("X"); //left diagonal for x
        else if(value[0][0]==="O"&& value[1][1] === "O" && value[2][2]==="O") setWinner("O"); //left diagonal for o
        else if(value[0][0]==="X"&& value[1][0] === "X" && value[2][0]==="X") setWinner("X"); //c1 for x
        else if(value[0][0]==="O"&& value[1][0] === "O" && value[2][0]==="O") setWinner("O"); //c1 for o
        else if (value[0][0]==="X"&& value[0][1] === "X" && value[0][2]==="X") setWinner("X");//r1 for x
        else if (value[0][0]==="O"&& value[0][1] === "O" && value[0][2]==="O") setWinner("O");  //r1 for o
        else if(value[0][2]==="X"&& value[1][1] === "X" && value[2][0]==="X") setWinner("X"); // rigth diagonal for x
        else if(value[0][2]==="O"&& value[1][1] === "O" && value[2][0]==="O") setWinner("O");  //rigth diagonal for o
        else if(value[0][1]==="X"&& value[1][1] === "X" && value[2][1]==="X") setWinner("X"); //c2 for x
        else if(value[0][1]==="O"&& value[1][1] === "O" && value[2][1]==="O") setWinner("O"); //c2 for o
        else if(value[0][2]==="X"&& value[1][2] === "X" && value[2][2]==="X") setWinner("X"); //c3 for x
        else if(value[0][2]==="O"&& value[1][2] === "O" && value[2][2]==="O") setWinner("O"); //c3 for o
        else if (value[1][0]==="X"&& value[1][1] === "X" && value[1][2]==="X") setWinner("X");//r2 for x
        else if (value[1][0]==="O"&& value[1][1] === "O" && value[1][2]==="O") setWinner("O");  //r2 for o
        else if (value[2][0]==="X"&& value[2][1] === "X" && value[2][2]==="X") setWinner("X");//r3 for x
        else if (value[2][0]==="O"&& value[2][1] === "O" && value[2][2]==="O") setWinner("O");  //r3 for o
        else{

            let count = 0;
            for(let r = 0; r<3; r++){
                for(let c = 0; c<3; c++){
                   if (value[r][c] === "")count++
                }
            }
            if(count === 0){
                alert ("Match Draw !")
            }
        }
    }

    const reset=(value)=>{
        
        
        for(let r = 0; r<3; r++){
            for(let c = 0; c<3; c++){
                setValue([...value, value[r][c]=""]);
            }
        }
        
    }
    return <>
        {winner!==""?<h2>Player {winner} won !</h2>:(player===1)?<h3>Player X's turn</h3>:<h3>It player O's turn</h3>}
        <button onClick={()=>reset(value)}>Reset</button>
        <div className="game-main">
            <div className="row">
                <div disabled={(value[0][0]!=="")?true:false} onClick={()=>handleClick(0,0)}>{value[0][0]}</div>
                <div onClick={()=>handleClick(0,1)}>{value[0][1]}</div>
                <div onClick={()=>handleClick(0,2)}>{value[0][2]}</div>
            </div>
            <div className="row">
                <div onClick={()=>handleClick(1,0)}>{value[1][0]}</div>
                <div onClick={()=>handleClick(1,1)}>{value[1][1]}</div>
                <div onClick={()=>handleClick(1,2)}>{value[1][2]}</div>
            </div>
            <div className="row">
                <div onClick={()=>handleClick(2,0)}>{value[2][0]}</div>
                <div onClick={()=>handleClick(2,1)}>{value[2][1]}</div>
                <div onClick={()=>handleClick(2,2)}>{value[2][2]}</div>
            </div>
        </div>
        
    </>
}
