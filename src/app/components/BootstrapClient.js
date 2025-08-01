// app/components/BootstrapClient.tsx
'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
	useEffect(() => {
		if (typeof document !== 'undefined') {
			require('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	}, []);

	return null;
}
