export interface BreadcrumbItem {
    label: string;
    href?: string;
}

// Generate JSON-LD structured data for breadcrumbs
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[], baseUrl: string = 'https://rigovo.com') {
    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
        },
        ...items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.label,
            item: item.href ? `${baseUrl}${item.href}` : undefined
        }))
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement
    };
}
