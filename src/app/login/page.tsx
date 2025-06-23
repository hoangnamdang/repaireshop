import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import * as React from "react";

export default function Login() {
  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl mb-5">Page login</h1>
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
      </div>
    </main>
  );
}
