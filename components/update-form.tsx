"use client";

import React from "react";
import { updateContact } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./buttons";
import { Contact } from "@prisma/client";

const UpdateForm = ({ contact }: { contact: Contact }) => {
  const UpdateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useFormState(UpdateContactWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="rounded-md bg-gray-50 border border-gray-300 text-gray-800 text-sm focus-visible:outline-teal-400 focus-visible:border-teal-400 block w-full p-2.5"
            placeholder="Full Name"
            defaultValue={contact.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-800"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="rounded-md bg-gray-50 border border-gray-300 text-gray-800 text-sm focus-visible:outline-teal-400 focus-visible:border-teal-400 block w-full p-2.5"
            placeholder="Phone Number"
            defaultValue={contact.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>

        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
