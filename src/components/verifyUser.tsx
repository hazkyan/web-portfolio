import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
     if (session?.user){
        const { email } = session.user;
        if (email !== "hazpoldev@gmail.com"){
            redirect("/");
        }
     }
}
