import React, { useReducer } from 'react'

const UseReducerComponent = () => {
    const initialState = {
        balance:0,
        transactions:[]
    }

    const reducer = (state,action)=>{
        switch(action.type){

            case "DEPOSIT":
                return {
                    ...state,
                    balance: state.balance + action.payload,
                    transactions:[...state.transactions, action.payload]
                }
            
            case "WITHDRAW":
                return{
                    ...state,
                    balance: state.balance - action.payload,
                    transactions:[...state.transactions, action.payload]
                }
            
            default:
                return {
                    ...state
                }

        }
    }

    const handleDeposit=(dispatch)=>{
        dispatch({
            type:"DEPOSIT",
            payload:500
        })
    }

    const handleWithDrawl=(dispatch)=>{
          dispatch({
            type:"WITHDRAW",
            payload:500
        })
    }

    console.log(initialState.transactions);



    const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        

        <button 
            onClick={()=>handleDeposit(dispatch)}
         >DEPOSIT $500</button>


         <button
            onClick={()=> handleWithDrawl(dispatch) }
         >
            WITHDRAWL 500
         </button>

        {
            console.log(state)
        }

         <div>
            <h1>Data in IntialState</h1>
            <p>Balance:{state.balance}</p>
            <div>
                {
                    state.transactions.map((ele,index)=>{
                       return  <p key={index}>{ele}</p>
                    })
                }
            </div>
         </div>

    </div>
  )
}

export default UseReducerComponent