import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Deletedata = () => {
    const [student,setStudent] = useState({})
    const{StudentId} = useParams()

    const navigate= useNavigate()
    async function fetchuser_data (){
        let response = await axios.get(`http://localhost:3030/Students/${StudentId}`)
        console.log(response)
        let result = await response.data
        console.log(result)
        setStudent(result)

    }
    useEffect(()=>{

        fetchuser_data()
    },[])

    const deleteData = ()=> {
        axios.delete(`http://localhost:3030/Students/${StudentId}`)
        alert('DATA DELETED')
        navigate('/show')
    }
    
  return (
    <div className='w-50 bg-info mx-auto rounded-5 p-5 mt-5'>
             <h2>Delete Record for</h2>
         <h3 > Student Name = {student.fname} {student.lname}</h3>
         <h3>Student Id ={student.id}</h3>
         <button className='btn btn-success me-3 w-25' onClick={deleteData}>YES</button>
         <NavLink to={`/show`}><button className='btn btn-danger w-25'>NO</button>
         </NavLink>

    </div>
    
  )
}

export default Deletedata