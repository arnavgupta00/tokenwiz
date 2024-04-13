"use client";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function SignUp(props: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
      });

      console.log("Sign up successful:", response.data);
      await signIn("credentials", {
        username: email,
        password: password,
        callbackUrl: "/",
      });
      setName("");
      setEmail("");
      setPassword("");
      props.setShowMenu(!props.showMenu);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="z-40 w-full max-w-sm pl-8 pr-8 h-fit">
      <form onSubmit={handleSubmit}>
        <Card className="bg-gray-50 text-blue-500 rounded-3xl">
          <CardHeader className="bg-gray-50 text-blue-500 rounded-t-3xl">
            <div className="h-2 w-full text-blue-500 flex flex-row justify-end items-center">
              <X onClick={() => props.setShowMenu(!props.showMenu)}></X>
            </div>
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
            <div className="">
              <hr className="text-blue-500 border-1 border-blue-500" />
            </div>
          </CardHeader>

          <CardContent className="space-y-4 bg-gray-50 text-blue-500 rounded-b-3xl pt-0">
            <div className="space-y-2">
              <Label className="text-blue-500" htmlFor="name">
                Name
              </Label>
              <Input
                className="text-gray-50"
                id="name"
                placeholder="Enter your name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-blue-500" htmlFor="email">
                Email
              </Label>
              <Input
                className="text-blue-500"
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                className="text-blue-500"
                placeholder="Enter your password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-gray-50 text-sm p-2 rounded-md hover:bg-gray-400 active:bg-gray-50 active:text-blue-500"
              type="submit"
            >
              Sign Up
            </button>

            <hr className="border-1 border-gray-300" />

            <div className="p-4 pl-0 pr-0">
              <button
                className="w-full bg-blue-500 text-gray-50 text-sm p-2 rounded-md hover:bg-gray-400 active:bg-gray-50 active:text-blue-500"
                type="submit"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Sign Up with Google
              </button>
            </div>
            <hr className="border-1 border-gray-300" />
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
