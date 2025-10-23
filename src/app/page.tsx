import {Button} from "@/components/ui/button";
//import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/db";

//const prisma = new PrismaClient();

const Page=async()=>{
  const users=await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;