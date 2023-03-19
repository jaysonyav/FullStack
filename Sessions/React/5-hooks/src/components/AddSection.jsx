import React from 'react'

function AddSection() {
  return (
    <div className="card my-5">
        <div className="card-header text-center bg-primary text-light">
            Add Transcation
        </div>
        <div className="card-body">
            <form>
                <input type="text" placeholder='Transaction Name' className='form-control mb-3' />
                <input type="date" className='form-control mb-3'/>
                <select class="form-select" aria-label="Default select example">
                    <option selected value='expense'>Expense</option>
                    <option value="income">Income</option>
                </select>
                <div className="text-center mt-3">
                    <button className='btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddSection