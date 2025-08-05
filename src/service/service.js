const API_URL = process.env.BASE_URL;

export const fetchMenu = async(local) => {
    try {
        const res = await fetch(`${API_URL}${local}/menu/`,{
            next: {revalidate: 300}
        });
        if (!res.ok) {
            throw new Error('Failed to fetch menu data');
        }
        return await res.json(); 
    }
    catch(error){ 
        console.log("Error fetching menus", error);
        throw error;
    }
}
