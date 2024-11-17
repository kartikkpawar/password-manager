import React from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon, PlusIcon, Search, User2Icon } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

function Searchbar(props) {
  return (
    <div>
      <div className="w-full flex items-end gap-10">
        <div className="flex flex-col gap-2 w-max">
          <span className="font-thin text-lg">{props.name}</span>
          <props.button />
        </div>
        <div className="flex items-center border-2 border-primary h-max p-1 px-4 box-border gap-3 rounded-full w-full">
          <Search className="stroke-primary/50" />
          <Input
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 w-full text-lg h-8"
            placeHolder="Search..."
          />
        </div>
      </div>
      <Separator className="mt-3" />
    </div>
  );
}

export default Searchbar;
