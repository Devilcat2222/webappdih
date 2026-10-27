import { Inline, route, values } from '../document-helpers.tsx';

declare module 'solid-js' {
	namespace JSX {
		interface ExplicitAttributes {
			onload: string;
		}
	}
}

const fonts =
	'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Lato:ital,wght@0,400;0,700;1,400&family=Montserrat+Alternates&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap';

// Simple SVG favicon (bubble logo) as data URI so it works immediately
const faviconSvg = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#07070c"/>
  <circle cx="26" cy="28" r="16" fill="#ff2d55" opacity="0.9"/>
  <circle cx="38" cy="36" r="14" fill="#ff6b8a" opacity="0.85"/>
  <circle cx="32" cy="22" r="10" fill="#ff9eb5" opacity="0.7"/>
  <circle cx="18" cy="42" r="5" fill="#ff2d55" opacity="0.6"/>
  <circle cx="46" cy="20" r="4" fill="#ff6b8a" opacity="0.5"/>
  <circle cx="24" cy="24" r="3" fill="white" opacity="0.35"/>
</svg>
`)}`;

export default function HeadContent() {
	return (
		<>
			{!values.usingSEO && <meta charset="utf-8" />}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
			/>
			<meta
				name="theme-color"
				media="(prefers-color-scheme: dark)"
				content="#ff2d55"
			/>
			<meta name="theme-color" content="#ff2d55" />

			{/* New bubble logo favicon (SVG works in all modern browsers) */}
			<link rel="icon" href={faviconSvg} type="image/svg+xml" />
			<link rel="apple-touch-icon" href={faviconSvg} />

			{/* Keep old PNG fallbacks for older browsers / PWA (you can replace the actual PNG files later) */}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={route('assets/ico/apple-icon-180x180.png')}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={route('assets/ico/favicon-32x32.png')}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={route('assets/ico/favicon-16x16.png')}
			/>
			<link rel="icon" href={route('assets/ico/favicon.ico')} />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
			<Inline>
				<link
					rel="stylesheet"
					href={route('assets/css/style.css', 'inline')}
				/>
			</Inline>
			<link
				rel="stylesheet"
				href={fonts}
				media="print"
				attr:onload="this.media='all'"
			/>
		</>
	);
}
