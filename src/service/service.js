import { notFound } from 'next/navigation';

const API_URL = process.env.BASE_URL;
const cacheDuration = 300;
const noStore = { cache: 'no-store' };

export const fetchMenu = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/menu/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/pages/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/pages/list/${id}/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/pages/media-blog/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/pages/media-blog/${id}/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/venues/${id}/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/venues/${id}/${slug}/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/pages/about-batumi/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/venues/locations/`, noStore);
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
		const res = await fetch(`${API_URL}${local}/venues/category/`, noStore);
		if (!res.ok) {
			return notFound(); // Handle the case where the category page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching category', error);
		throw error;
	}
};

// Fetches the events
export const fetchEvents = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/event/?category=Events`, noStore);
		if (!res.ok) {
			return notFound(); // Handle the case where the events page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching events', error);
		throw error;
	}
}

// Fetches get tag 
export const fetchEventsTag = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/event/tag/`, noStore); 
		if (!res.ok) {
			return notFound(); // Handle the case where the events tags page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching events tags', error);
		throw error;
	}
}
// Fetches Filter this tag events
export const fetchEventsFilterTag = async (local, tag) => {
	try {
		const res = await fetch(`${API_URL}${local}/event/?tag=${tag}`, noStore);
		if (!res.ok) {
			return notFound(); // Handle the case where the events page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching events', error);
		throw error;
	}
}

// Fetches the events start date and end date
export const fetchEventsDate = async (local, category, tag, startDate, endDate) => {
	try {
		const res = await fetch(`${API_URL}${local}/event/?category=${category}${tag !== null ? `&tag=${tag}` : ""}&start_date=${startDate}&end_date=${endDate}`, noStore);
		if (!res.ok) {
			return notFound(); // Handle the case where the events page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching events', error);
		throw error;
	}
}

// Fetches the Exhibitions
export const fetchExhibitions = async local => {
	try {
		const res = await fetch(`${API_URL}${local}/event/?category=Exebition`, noStore);
		if (!res.ok) {
			return notFound(); // Handle the case where the exhibitions page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching exhibitions', error);
		throw error;
	}
}
// Fetches Filter in category

// Fetches Load More
export const fetchLoadMore = async (local,url, page) => {
	try {
		const res = await fetch(`${API_URL}${local}${url}?page=${page}`, {
			next: { revalidate: cacheDuration },
		});
		if (!res.ok) {
			return notFound(); // Handle the case where the load more page is not found
		}
		return await res.json();
	} catch (error) {
		console.log('Error fetching load more', error);
		throw error;
	}
}