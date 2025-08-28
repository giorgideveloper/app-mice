'use client';

/**
 * Fast path translator for simple routes. Keeps path (minus the lang) and swaps lang.
 * Does NOT resolve per-language slugs.
 */
export const getTranslatedPath = (currentPath, currentLang, targetLang) => {
	if (!currentPath || currentPath === '/') return `/${targetLang}`;

	const pathWithoutLang =
		currentPath.replace(new RegExp(`^\/${currentLang}`), '') || '/';
	return `/${targetLang}${pathWithoutLang}`;
};

/**
 * Resolves a translated path dynamically using the API when needed.
 * - On venue list pages: swaps language and preserves filters.
 * - On venue detail pages: looks up the same venue in target language to get its slug.
 * - Fallback: simple prefix swap.
 */
export const getTranslatedPathDynamic = async (
	currentPath,
	currentLang,
	targetLang,
	search = ''
) => {
	try {
		const searchStr =
			search && search.startsWith('?') ? search.slice(1) : search;

		// Detail: /:lang/venues/:category/:slug
		const detailRegex = new RegExp(
			`^\/${currentLang}\/venues\/([^\/]+)\/([^\/?#]+)`
		);
		const detailMatch = currentPath.match(detailRegex);
		if (detailMatch) {
			const category = detailMatch[1];
			const currentSlug = detailMatch[2];

			const u = new URL(window.location.origin + `/api/translate-venue-slug`);
			u.searchParams.set('currentLang', currentLang);
			u.searchParams.set('targetLang', targetLang);
			u.searchParams.set('category', category);
			u.searchParams.set('slug', currentSlug);
			if (searchStr) u.searchParams.set('search', searchStr);

			const res = await fetch(u.toString(), { cache: 'no-store' });
			if (res.ok) {
				const json = await res.json();
				if (json?.path) return json.path;
			}

			return `/${targetLang}/venues/${category}${
				searchStr ? `?${searchStr}` : ''
			}`;
		}

		// List: /:lang/venues/:category
		const listRegex = new RegExp(`^\/${currentLang}\/venues\/([^\/?#]+)`);
		const listMatch = currentPath.match(listRegex);
		if (listMatch) {
			const category = listMatch[1];
			return `/${targetLang}/venues/${category}${
				searchStr ? `?${searchStr}` : ''
			}`;
		}

		const pathWithoutLang =
			currentPath.replace(new RegExp(`^\/${currentLang}`), '') || '/';
		return `/${targetLang}${pathWithoutLang}${
			searchStr ? `?${searchStr}` : ''
		}`;
	} catch (e) {
		const pathWithoutLang =
			currentPath.replace(new RegExp(`^\/${currentLang}`), '') || '/';
		return `/${targetLang}${pathWithoutLang}`;
	}
};
