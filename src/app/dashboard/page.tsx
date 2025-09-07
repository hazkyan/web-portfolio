"use client"
import { checkUser } from "@/components/verifyUser";
export default function Dashboard() {
   
    checkUser();
    
  return (
    <div style={{ display: "grid", gap: 12, padding: 24 }}>
      <h1>Dashboard</h1>    
    </div>
  );
}


