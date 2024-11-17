import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CopyIcon, StarIcon } from "lucide-react";
import AccCardActions from "./AccCardActions";

function AccPassCard() {
  return (
    <Card className="px-2">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base">Account Ubisoft</CardTitle>
        <div className="flex gap-2">
          <StarIcon size={20} className="!mt-0" />
          <AccCardActions />
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription className="flex flex-col gap-3">
          <div className="flex items-center bg-background p-1 px-3 mt-3">
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8 bg-transparent"
              type="email"
              value={"test@test.com"}
              disabled={true}
            />
            <CopyIcon size={20} />
          </div>

          <div className="flex items-center bg-background px-3">
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 px-2 w-full text-lg h-8"
              type="password"
              value={"password"}
              disabled={true}
            />
            <CopyIcon size={20} />
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default AccPassCard;
