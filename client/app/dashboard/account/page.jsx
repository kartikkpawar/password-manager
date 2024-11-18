"use client";
import Searchbar from "@/components/Searchbar";
import React from "react";
import AccPassCard from "./_components/AccPassCard";
import AddAccPassBtn from "./_components/AddAccPassBtn";
import { useQuery } from "@tanstack/react-query";
import { getPasswords } from "@/actions/password";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { copyPassword } from "@/actions/password";

function UserAccoutsPage() {
  const query = useQuery({
    queryKey: ["pass-for-user"],
    queryFn: () => getPasswords(),
    refetchInterval: 2000,
  });

  const mutation = useMutation({
    mutationFn: copyPassword,
    onSuccess: (data) => {
      navigator.clipboard.writeText(data).then(() =>
        toast.success("Pasword copied successfully!", {
          id: "show-pass",
        })
      );

      toast.error("Paswoord copied successfully!", {
        id: "show-pass",
      });
    },
    onError: (err) => {
      console.log("Unable to decrypt password", err);
      toast.error(err.message || "Unable to decrypt password", {
        id: "show-pass",
      });
    },
  });

  const copyEncText = (text) => {
    console.log(text, "copyEncText");
    const decryptText = mutation.mutate(text);
    console.log(decryptText, "decryptText");
  };

  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <Searchbar name="Accounts" button={AddAccPassBtn} />
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {query?.data?.data?.map((data) => (
          <AccPassCard data={data} key={data._id} onCopy={copyEncText} />
        ))}
      </div>
    </div>
  );
}

export default UserAccoutsPage;
