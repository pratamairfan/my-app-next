import CreateForm from "@/components/create-form";
import React from "react";

const CreateContact = () => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="text-2xl text-center mb-2">
        Add New Contact
      </div>
      <CreateForm />
    </div>
  );
};

export default CreateContact;
