import { notFound } from "next/navigation";

const API_URL = process.env.BASE_URL;

export const fetchMenu = async(local) => {
    try {
        const res = await fetch(`${API_URL}${local}/menu/`,{
            next: {revalidate: 300}
        });
        if (!res.ok) {
           return notFound(); // Handle the case where the menu is not found
        }
        return await res.json(); 
    }
    catch(error){ 
        console.log("Error fetching menus", error);
        throw error;
    }
}

// Fetches the main page for a specific restaurant
export const fetchMainPage = async (local) => {
    try {
        const res = await fetch(`${API_URL}${local}/pages/`, {
            next: { revalidate: 300 }
        });
        if (!res.ok) {
            return notFound(); // Handle the case where the main page is not found
        }
        return await res.json();
    }
    catch (error) {
        console.log("Error fetching main page", error);
        throw error;
    }
}