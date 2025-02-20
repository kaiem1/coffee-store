import Swal from 'sweetalert2'

import { data, Link } from "react-router-dom";

const AddCoffee = () => {

  const handleAddCoffee = event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
     
  }

  return (
    <div>
      <div className="bg-[#F4F3F0]">
        <Link to={"/"}>
          <button className="btn btn-warning ">Back</button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] p-24">
      
      <div>
        <h3 className="text-3xl font-extrabold">Add a Coffee Page</h3>
      </div>
      <form onSubmit={handleAddCoffee}>

        {/*form name and quantity row*/}
        <div className="md:flex mb-8">
            
            <div className="md:w-1/2 ">
            <p>Coffee Name</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Coffee Name"
                name="name"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Available Quantity</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Available Quantity"
                name="quantity"
              />
            </div>
          

        </div>
        {/*form supplier row*/}
        <div className="md:flex mb-8">
            
            <div className="md:w-1/2 ">
            <p>Supplier Name</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Supplier Name"
                name="supplier"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Taste</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Taste"
                name="taste"
              />
            </div>
          

        </div>
        {/*form category and details row*/}
        <div className="md:flex mb-8">
            
            <div className="md:w-1/2 ">
            <p>Category</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Category "
                name="category"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Details</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Details"
                name="details"
              />
            </div>
          

        </div>
        {/*form photo row*/}
        <div className="mb-8">-
            
            <div className="w-full ">
            <p>Photo URL</p>
              <input
                className="input input-bordered join-item w-full"
                placeholder="Photo URL"
                name="photo"
              />
            </div>
          
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-outline btn-warning btn-block"/>
      </form>
    </div>
    </div>
  );
};

export default AddCoffee;
