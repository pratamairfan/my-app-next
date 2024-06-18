"use client";

import { deleteContact } from "@/lib/actions";
import clsx from "clsx";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const CreateButton = () => {
  return (
    <Link
      href="/contacts/create"
      className="inline-flex items-center space-x-1 text-white bg-teal-400 hover:bg-teal-600 px-5 py-[9px] rounded-md text-sm"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const EditButton = ({ id }: any) => {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="bg-cyan-400 hover:bg-cyan-600 p-1 border text-white rounded-md"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: any) => {
  const DeleteContact = deleteContact.bind(null, id);
  return (
    <form action={DeleteContact}>
      <button
        className="bg-red-400 hover:bg-red-600 p-1 border text-white rounded-md"
      >
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "text-white bg-teal-400 hover:bg-teal-600 font-medium rounded-md text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
