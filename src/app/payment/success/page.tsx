import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SuccessRoute() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="flex w-full justify-center">
            <CheckIcon className="h-12 w-12 rounded-full bg-green-500/30 p-2 text-green-500" />
          </div>

          <div className="mt-3 w-full text-center sm:mt-5">
            <h3 className="text-lg font-medium leading-6">
              Payment Successfull
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Your payment has been successfully processed. Thanks for your
              patronage
            </p>

            <Button asChild className="mt-5 w-full sm:mt-6">
              <Link href="/">Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
