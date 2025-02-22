import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = event =>{
      event.preventDefault();
  
      const form = event.target;
  
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
      console.log(updatedCoffee);
  
      fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'success!',
            text: ' Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
       
    }

    return (
        <div>
            <div>
        <Link to={"/"}>
          <button className="btn btn-warning ">Back</button>
        </Link>
      </div>
      <div>
        <div>
     



      <div className="bg-[#F4F3F0] p-24">
      
      <div>
        <h3 className="text-3xl font-extrabold">Update Coffee: {name}</h3>
      </div>
      <form onSubmit={handleUpdateCoffee}>

        {/*form name and quantity row*/}
        <div className="md:flex mb-8">
            
            <div className="md:w-1/2 ">
            <p>Coffee Name</p>
              <input
                className="input input-bordered join-item w-full"
                defaultValue={name}
                placeholder="Coffee Name"
                name="name"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Available Quantity</p>
              <input
                className="input input-bordered join-item w-full"
                defaultValue={quantity}
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
                defaultValue={supplier}
                placeholder="Supplier Name"
                name="supplier"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Taste</p>
              <input
                className="input input-bordered join-item w-full"
                defaultValue={taste}
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
                defaultValue={category}
                placeholder="Category "
                name="category"
              />
            </div>

          <div className="md:w-1/2 ml-4">
            <p>Details</p>
              <input
                className="input input-bordered join-item w-full"
                defaultValue={details}
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
                defaultValue={photo}
                placeholder="Photo URL"
                name="photo"
              />
            </div>
          
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-outline btn-warning btn-block"/>
      </form>
    </div>
    </div>
      </div>
        </div>
    );
};

export default UpdateCoffee;