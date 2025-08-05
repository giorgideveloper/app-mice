const API_URL = process.env.BASE_URL;

export const fetchMenu = async() => {
    try {
    const res = await fetch(`${API_URL}menu/`,{
        next: {revalidate: 300}
    });
    return res;
    }
    catch(error){ 
        console.log("Error fetching menus", error)
    }
    throw error;
}
