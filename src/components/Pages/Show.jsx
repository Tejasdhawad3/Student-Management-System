import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {

  const [student,setStudent]= useState([])

  async function getData (){
     const response = await axios.get('http://localhost:3030/Students')
     
     const result = await response.data
     setStudent(result)
  }

  useEffect( () => {
    getData()

  },[])
  getData()
  return (
    <div>
        <h1>Students Details</h1>
        <table className='table table-dark table-hover'>
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Frist name</th>
              <th>last name</th>
              <th>Mother name</th>
              <th>Father name</th>
              <th>Address</th>
              <th>Gender</th>
              <th>State</th>
              <th>City</th>
              <th>DOB</th>
              <th>Pincode</th>
              <th>Course</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                student.map((stu,index)=>{
                  return(
                    <tr key={index}>
                      <td>{index +1}</td>
                      <td>{stu.fname}</td>
                      <td>{stu.lname}</td>
                      <td>{stu.mothername}</td>
                      <td>{stu.fathername}</td>
                      <td>{stu.Address}</td>
                      <td>{stu.gender}</td>
                      <td>{stu.state}</td>
                      <td>{stu.city}</td>
                      <td>{stu.dob}</td>
                      <td>{stu.pincode}</td>
                      <td>{stu.course}</td>
                      <td>{stu.email}</td>
                      <td>
                        <NavLink to={`/update/student/${stu.id}`}><button className='btn btn-info me-2'>Edit</button></NavLink>
                        <NavLink to={`/delete/student/${stu.id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                      </td>
                    </tr>
                  )

                })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Show