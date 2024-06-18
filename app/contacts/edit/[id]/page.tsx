import UpdateForm from "@/components/update-form";
import { getContactsById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateContact = async ({params}: {params: {id: string}}) => {
  const id = params.id
  const contact = await getContactsById(id)

  if (!contact) {
    notFound()
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <div className="text-2xl text-center mb-2">
        Update Contact
      </div>
      <UpdateForm contact={contact} />
    </div>
  );
};

export default UpdateContact;
