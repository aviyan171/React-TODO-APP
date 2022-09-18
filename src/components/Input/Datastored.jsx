import React, { useEffect, useState } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'


const Datastored = ({storeddata,setStoreData,setInput,setToggle,toggle,setIsEditItem,isEditItem}) => {

  // const [isEditItem,setIsEditItem]=useState(null)

    const deleteItem=(id)=>{
      const newData=storeddata.filter((item)=> {
        return item.id!==id
      })
     setStoreData(newData)
    }

    const editItem=(id)=>{
      const editData=storeddata.find((item)=>{
        return item.id===id
      })
     setInput(editData.Name)
     setToggle(false)
     setIsEditItem(id)
     console.log(id)
    }

 

  return (
    <section >
    <div className='datas'> 
     {
    storeddata.map((item)=>  
    <div className='items' key={item.id}>
    <p>{item.Name}</p>
     <MdDeleteForever className='deleteIcons' onClick={()=>deleteItem(item.id)}/>
     <AiOutlineEdit className='EditIcons' onClick={()=>editItem(item.id)}/>
    </div>
    )

    
     }
     </div>
    </section>
  )
}

export default Datastored