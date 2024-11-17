import Searchbar from "@/components/Searchbar";
import { looper } from "@/lib/data";
import React from "react";
import AccPassCard from "./_components/AccPassCard";
import AddAccPassBtn from "./_components/AddAccPassBtn";

function UserAccoutsPage() {
  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Accounts" button={AddAccPassBtn} />
      <div className="h-full grid grid-cols-3 gap-5">
        {looper(10).map((item) => (
          <AccPassCard />
        ))}
      </div>
    </div>
  );
}

export default UserAccoutsPage;
