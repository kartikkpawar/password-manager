import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

function DasboardLayout(props) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="p-5">{props.children}</div>
      </SidebarProvider>
    </div>
  );
}

export default DasboardLayout;
