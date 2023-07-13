"use client";

import { useState } from "react";
import { Navbar as NavBar, Button } from "@material-tailwind/react";
import Modal from "../EditModal/Modal";
import { createTask } from "@/lib/lib";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Task } from "@/types";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (data: Partial<Task>) => {
    setOpen(false);

    const task = {
      id: data?.id || Math.floor(Math.random() * 100 + 50).toString(),
      ...data
    };
    console.log(task);
    createTask(task);
  };

  return (
    <>
      <NavBar className="mx-auto max-w-2xl py-2 px-4 lg:px-8 lg:py-4 bg-white lg:fixed top-3 lg:left-[50%] lg:-translate-x-[50%] rounded-none lg:rounded-full">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="mr-4 cursor-pointer py-1.5 text-black text-2xl font-bold"
          >
            Task.
          </Link>
          <Button
            onClick={handleOpen}
            variant="gradient"
            size="sm"
            className="ml-auto flex items-center gap-1 rounded-full"
          >
            <AiOutlinePlusCircle className="text-xl font-bold" />{" "}
            <span>Add Task</span>
          </Button>
        </div>
      </NavBar>

      <Modal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
