import { useState } from 'react'

import './App.css'
import { useForm } from 'react-hook-form'

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm({})

   async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a network request
    console.log(data);
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="" >FirstName:</label>
        <input className={errors.firstName?'input-data':""} {...register("firstName",
          { required: true, minLength: { value: 3, message: "First name must be at least 3 characters long" }, maxLength: { value: 10, message: "First name must be at most 10 characters long" } })}/>
        {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
      </div>
      <br />
      <br />  
      <div>
        <label htmlFor="">MiddleName:</label>
        <input className={errors.middleName?'input-data':""} {...register("middleName",
          { required: true, minLength: { value: 3, message: "Middle name must be at least 3 characters long" }, maxLength: { value: 10, message: "Middle name must be at most 10 characters long" } })}/>
        {errors.middleName && <p className='error-message'>{errors.middleName.message}</p>}
      </div>
      <br />
      <br />
      <div>
        <label htmlFor="">LastName:</label>
        <input className={errors.lastName?'input-data':""} {...register("lastName",
          { required: true, minLength: { value: 3, message: "Last name must be at least 3 characters long" }, maxLength: { value: 10, message: "Last name must be at most 10 characters long" } })}/>
        {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting..." : "Submit"} />
    </form>


    </>
  )
}

export default App
