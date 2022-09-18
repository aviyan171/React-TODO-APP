import React, { useEffect, useState } from 'react'
import './Input.css'
import {AiOutlinePlus,AiOutlineEdit} from 'react-icons/ai'
import Datastored from './Datastored'

//to get data from ls
const getLocalItem=()=>{
  let list=localStorage.getItem('lists')
  // console.log(typeof(list))

  if(list){
    return JSON.parse(list)
  }else{
    return []
  }
}

const Input = () => {
const [input,setInput]=useState('')
 const [storeData,setStoreData]=useState(getLocalItem())
const [toggle,setToggle]=useState(true)
const [isEditItem,setIsEditItem]=useState(null)

const HandleChange=(e)=>{
    setInput(e.target.value)
}

const randomNumer=()=>{
    return Math.floor(Math.random()*900)
}

const AddData=()=>{
    const data={Name:input,id:randomNumer()}
    if(!input){
      alert('Do not Send Empty Data')
    }else if(input && !toggle){
      setStoreData(
          storeData.map((item)=>{
            if(item.id===isEditItem){
              return {...item,Name:input}
            }
            return item
           
          })
      )
          setToggle(true)
          setInput('')
          setIsEditItem(null)

    } else{
      setStoreData([...storeData,data])
      setInput('')
    }
    // console.log(storeData)

}

const Deleteall=()=>{
  setStoreData([])
}


//add data to local storage

useEffect(()=>{
localStorage.setItem('lists', JSON.stringify(storeData))
},[storeData])

  return (
    <>
    <section className='InputContainer'>
    <input 
    className='InputStyle'
     value={input} 
     type="text" 
     onChange={HandleChange}
     />
{

   toggle? <AiOutlinePlus className='icon' onClick={AddData}/>:
    <AiOutlineEdit className='icon' onClick={AddData}/>
}
    
    
    </section>
    <Datastored 
    storeddata={storeData}
    setStoreData={setStoreData}
    setInput={setInput}
    setToggle={setToggle}
    toggle={toggle}
    setIsEditItem={setIsEditItem}
    isEditItem={isEditItem}
    />
    <div className="btnContainer">
     <button className='deleteBtn' onClick={()=>Deleteall()}>Delete All</button>
    </div>
   
    </>
  )
}

export default Input