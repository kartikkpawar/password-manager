"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Link2Icon, Trash2Icon } from "lucide-react";
import DeleteAccountDialog from "./DeleteAccountDialog";

function AccCardActions() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DeleteAccountDialog open={dialogOpen} setOpen={setDialogOpen} />
      <DropdownMenuTrigger>
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="text-primary"
          onClick={() => setDialogOpen(true)}
        >
          <Trash2Icon className="" /> Delete
        </DropdownMenuItem>
        <DropdownMenuItem className="text-white">
          <Link2Icon className="" /> Visit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccCardActions;
