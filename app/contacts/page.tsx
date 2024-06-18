import React from "react";
import ContactTable from "../../components/contact-table";
import Search from "../../components/search";
import { CreateButton } from "../../components/buttons";

const Contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-3 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default Contacts;
