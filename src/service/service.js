import { notFound } from 'next/navigation';

const API_URL = process.env.BASE_URL;
const cacheDuration = 300;

export const fetchMenu = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/menu/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the menu is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching menus', error);
		throw error;
	}
};

// Fetches the main page for a specific restaurant
export const fetchMainPage = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/pages/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the main page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching main page', error);
		throw error;
	}
};

// Fetches the article by ID
export const fetchArticleById = async (id, local) => {
	try {
		const res = await fetch(`${API_URL}${local}/pages/list/${id}/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the article is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching article by ID', error);
		throw error;
	}
};

// Fetches the blog
export const fetchBlog = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/pages/media-blog/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the blog  is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching blog by ID', error);
		throw error;
	}
};

// Fetches the blog by id

export const fetchBlogById = async (id, local) => {
	try {
		const res = await fetch(`${API_URL}${local}/pages/media-blog/${id}/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the blog is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching blog by ID', error);
		throw error;
	}
};

// Fetches the venues by id
export const fetchVenues = async (local, id) => {
	try {
		const res = await fetch(`${API_URL}${local}/venues/${id}/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the venues are not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching venues', error);
		throw error;
	}
};
// Fetches the venue by slug
export const fetchVenuesSlug = async (local, id, slug) => {
	try {
		const res = await fetch(`${API_URL}${local}/venues/${id}/${slug}/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the venues are not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching venues', error);
		throw error;
	}
};

// Fetches the venues filter

export const fetchVenuesFilter = async (local, id, location = '', categories = '') => {
	try {
		// Create a URL with query parameters only if they have values
		let url = `${API_URL}${local}/venues/${id}/`;
		
		// Add query parameters only if they exist
		const params = new URLSearchParams();
		if (location) params.append('location', location);
		if (categories) params.append('category', categories);
		
		// Add the parameters to the URL if any exist
		const queryString = params.toString();
		if (queryString) {
			url += `?${queryString}`;
		}
		
		const res = await fetch(url, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the venues filter is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching venues filter', error);
		throw error;
	}
};

// Fetches the about-batumi
export const fetchAboutBatumi = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/pages/about-batumi/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the about-batumi page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching about-batumi', error);
		throw error;
	}
};


// Fetches the location
export const fetchLocation = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/venues/locations/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the location page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching location', error);
		throw error;
	}
};

// Fetches category
export const fetchCategory = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/venues/category/`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the category page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching category', error);
		throw error;
	}
};
