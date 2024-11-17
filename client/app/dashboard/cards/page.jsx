import Searchbar from "@/components/Searchbar";
import { looper } from "@/lib/data";
import React from "react";
import BankCard from "./_components/BankCard";
import AddBankCard from "./_components/AddBankCard";

function UserAccoutsPage() {
  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Accounts" button={AddBankCard} />
      <div className="h-full grid grid-cols-3 gap-5">
        {looper(10).map((item) => (
          <BankCard />
        ))}
      </div>
    </div>
  );
}

export default UserAccoutsPage;
