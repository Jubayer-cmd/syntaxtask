import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
function Admin() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          toast.success("Service added successfully!");
        } else {
          toast.error("Fail to add Service!");
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <div className="">
        <h1 className="text-center m-2">Add your Service here!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className=" w-100 mb-2 p-2"
            type="text"
            {...register("image")}
            placeholder="Enter Image URL"
            required
          />
          <br />
          <input
            className="w-100 mb-2 p-2"
            type="text"
            {...register("label")}
            placeholder="Enter Label here"
            required
          />{" "}
          <br />
          <textarea
            className=" w-100 mb-2 p-2"
            {...register("paragraph")}
            placeholder="Enter Paragraph Here"
            rows={5}
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2 p-2 bg-primary border-0 rounded text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Admin;
