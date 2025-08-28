import { NextResponse } from 'next/server';
import { fetchVenues, fetchVenuesSlug } from '@/service/service';

export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const currentLang = searchParams.get('currentLang');
		const targetLang = searchParams.get('targetLang');
		const category = searchParams.get('category');
		const slug = searchParams.get('slug');
		const search = searchParams.get('search') || '';

		const searchStr =
			search && search.startsWith('?') ? search : search ? `?${search}` : '';

		if (!currentLang || !targetLang || !category || !slug) {
			return NextResponse.json(
				{ path: `/${targetLang || ''}/venues/${category || ''}${searchStr}` },
				{ status: 200 }
			);
		}

		let venueNumericId = null;
		try {
			const currentVenue = await fetchVenuesSlug(currentLang, category, slug);
			venueNumericId = currentVenue?.id ?? null;
		} catch (_) {
			// ignore and fallback
		}

		if (venueNumericId != null) {
			try {
				const list = await fetchVenues(targetLang, category);
				const results = Array.isArray(list?.results) ? list.results : [];
				const sameItem = results.find(it => it?.id === venueNumericId);
				if (sameItem?.slug) {
					return NextResponse.json(
						{
							path: `/${targetLang}/venues/${category}/${encodeURIComponent(
								sameItem.slug
							)}${searchStr}`,
						},
						{ status: 200 }
					);
				}
			} catch (_) {
				// ignore and fallback
			}
		}

		// Fallback to list page
		return NextResponse.json(
			{ path: `/${targetLang}/venues/${category}${searchStr}` },
			{ status: 200 }
		);
	} catch (e) {
		// Generic fallback
		return NextResponse.json({ path: '/' }, { status: 200 });
	}
}
