import { NextResponse } from "next/server";
import { User} from "@/interface/user";

export async function GET(){
    try{
   const url= process.env.PUBLIC_API;
   const response = await fetch(`${url}/users`);
   if (!response.ok) throw new Error("Failed to fetch users");
   const users:User[] = await response.json();

   return NextResponse.json(users);
        }
        catch(error){
                return NextResponse.json(
                    {error:"Failed to fetch user data"},
                    {status:500}
                )
        }
}