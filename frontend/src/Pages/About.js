import React from 'react'

export default function About() {
  return (
  <>
  <div className='newproduct'>
    <h2 className='newpro-h2-1'>Add new product here</h2>
    <select name="catagory" id="">
        <option>Choose catagory</option>
        <option value="">cars</option>
        <option value="">mobiles</option>
        <option value="">bikes</option>
    </select>

    <input type="text" placeholder='product detail'/>
    <input type="text" placeholder='product price'/>
  </div>
  
  
  </>
  )
}