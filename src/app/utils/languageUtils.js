'use client'

/**
 * Helps translate the current URL path to a new language
 * This function handles various page structures and preserves dynamic segments
 */
export const getTranslatedPath = (currentPath, currentLang, targetLang) => {
  // If the path is empty or just a slash, return the base language path
  if (!currentPath || currentPath === '/') {
    return `/${targetLang}`;
  }

  // Remove the current language prefix and get the rest of the path
  const pathWithoutLang = currentPath.replace(new RegExp(`^\\/${currentLang}`), '') || '/';
  
  // For simple paths without dynamic segments, just replace the language
  if (!pathWithoutLang.includes('[') && !pathWithoutLang.includes(':')) {
    return `/${targetLang}${pathWithoutLang}`;
  }

  // Extract the base route without dynamic segments
  // For example: /blog/[id] -> /blog/
  let baseRoute = pathWithoutLang.split('/').filter(segment => 
    !segment.startsWith('[') && !segment.includes(':')
  ).join('/');
  
  if (!baseRoute.startsWith('/')) {
    baseRoute = '/' + baseRoute;
  }
  
  // Special case for various sections like venues, blog, etc.
  if (currentPath.includes('/venues/') || 
      currentPath.includes('/blog/') || 
      currentPath.includes('/article/')) {
    
    // Extract the ID parameter if it exists
    // Example: /venues/123/some-slug -> we extract 123
    const matches = currentPath.match(/\/([^\/]+)\/([^\/]+)(\/|$)/);
    
    if (matches && matches.length >= 3) {
      const section = matches[1]; // e.g., 'venues', 'blog'
      const id = matches[2]; // e.g., '123'
      
      // Return the path with the same ID but new language
      return `/${targetLang}/${section}/${id}`;
    }
  }
  
  // Default fallback - just replace the language prefix
  return `/${targetLang}${baseRoute}`;
};
