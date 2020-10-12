import React from 'react'

function Cat(props){
        function clickHandler(e){
            props.selectCategory(e)
        }
        function selected(){
            
            if(props.category === props.selected){
                return true
            }else{
                return false
            }
        }
        return (
            <button onClick={clickHandler} className={selected() ? "selected" : "null"}>
                {props.category}
            </button>
        )
    }


export default Cat