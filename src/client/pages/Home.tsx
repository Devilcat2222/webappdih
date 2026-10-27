import {
	Keywords,
	Splash,
	Inline,
	route,
	values,
	SEO,
	translate,
	Translation,
	languageTag,
} from '../document-helpers.tsx';
import { Show } from 'solid-js';
import {
	AosScripts,
	ParticlesScript,
	PageScripts,
} from '../components/HeadScripts.tsx';
import HeadContent from '../components/HeadContent.tsx';
import AntiExfil from '../components/AntiExfil.tsx';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const links = {
	browse: (text: string) => <a href={route('/browsing')}>{text}</a>,
	docs: (text: string) => (
		<a
			href={route('/documentation')}
			title={translate('home.hosting.docsTitle')}
		>
			{text}
		</a>
	),
	github: (text: string) => (
		<a
			href={route('/github')}
			title={translate('home.githubTitle')}
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	),
	nord: (text: string) => (
		<a
			href="https://nordtheme.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	),
	patreon: (text: string) => (
		<a
			href={route('/patreon')}
			aria-label={translate('home.overview.patreonLabel')}
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	),
	underline: () => <span class="underline-svg"></span>,
};

// Minimalist logo
const SimpleLogo = (props: { size?: number; class?: string }) => (
	<svg
		width={props.size || 48}
		height={props.size || 48}
		viewBox="0 0 64 64"
		fill="none"
		class={props.class}
		aria-hidden="true"
	>
		<ellipse cx="32" cy="56" rx="18" ry="4" fill="currentColor" opacity="0.15" />
		<path
			d="M32 10C21.5 10 13 18.5 13 29v22c0 5.5 3.5 9 9 9h20c5.5 0 9-3.5 9-9V29c0-10.5-8.5-19-19-19z"
			fill="currentColor"
		/>
		<circle cx="24" cy="30" r="3.5" fill="#0a0a0f" />
		<circle cx="40" cy="30" r="3.5" fill="#0a0a0f" />
		<path
			d="M22 12h20a2 2 0 0 0 0-4H22a2 2 0 0 0 0 4z"
			fill="#ff2d55"
		/>
	</svg>
);

export default function Home() {
	return (
		<>
			<Keywords />
			<AntiExfil />
			<nav id="header" class="fullwidth" aria-label="Main navigation">
				<Header />
			</nav>

			{values.showSplash && (
				<div id="banner" class="fullwidth">
					<p class="text-center">
						<Splash />
					</p>
				</div>
			)}

			<div id="mainbody" class="fullwidth">
				<div id="background" class="fullwidth"></div>

				{/* Hero */}
				<section class="home-grid-container" aria-label="Home Grid Container">
					<div class="home-text">
						<div class="logo-row">
							<SimpleLogo size={56} class="hero-logo" />
						</div>
						<h1 class="headline">
							<span>{translate('home.headline')}</span>
						</h1>
						<h2 class="tagline">{translate('home.tagline')}</h2>
						<div class="hero-actions">
							<a class="homebutton primary" href="#scrollfix">
								{translate('home.browseNow')}
							</a>
							<a class="homebutton secondary mobile" href="#scrollfix">
								{translate('home.browseNow')}
							</a>
						</div>
					</div>

					<section class="mac-window" aria-label="Command Line Instructions">
						<div class="mac-title-bar">
							<div class="mac-buttons">
								<span class="mac-close"></span>
								<span class="mac-minimize"></span>
								<span class="mac-maximize"></span>
							</div>
							<span class="mac-title">InvisiProxy LTS</span>
						</div>
						<div class="mac-content">
							<p>
								<span class="cmd">
									git clone --recurse-submodules
									<span class="url">
										{' '}
										https://github.com/InvisiProxy/InvisiProxyLTS.git
									</span>
								</span>
								<br />
								<span class="cmd">cd InvisiProxyLTS</span>
								<br />
								<span class="comment">{translate('home.terminal.setup')}</span>
								<br />
								<span class="cmd">pnpm run fresh-start</span>
								<br />
								<span class="comment">{translate('home.terminal.start')}</span>
								<br />
								<span class="cmd">pnpm start</span>
								<br />
								<span class="comment">{translate('home.terminal.dev')}</span>
								<br />
								<span class="cmd">pnpm dev</span>
								<br />
								<br />
								<span class="comment">
									InvisiProxy LTS v{values.version} // master
								</span>
								<br />
								<span class="comment">Node.js v26.x · Solid JS v1.9.17</span>
							</p>
						</div>
					</section>
				</section>

				<div id="scrollfix">­</div>

				{/* Feature Hero */}
				<div data-aos="fade-up" class="hero-grid-container">
					<div class="box-hero glass">
						<div class="hero-content">
							<div class="hero-text-wrap">
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.free.title')}
										</h3>
									</div>
									<p>
										<Translation id="home.free.body" />
									</p>
								</div>

								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.fast.title')}
										</h3>
									</div>
									<p>{translate('home.fast.body')}</p>
								</div>

								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.practical.title')}
										</h3>
									</div>
									<p>
										<Translation id="home.practical.body" />
									</p>
								</div>
							</div>
						</div>

						<div class="image-container-hero">
							<div class="logo-hero-wrap">
								<SimpleLogo size={120} />
							</div>
							<h2>InvisiProxy LTS</h2>
							<p class="hero-sub">{translate('home.heroSubtitle')}</p>
							<div class="hero-buttons">
								<a class="fancybutton primary" href={route('/browsing')}>
									{translate('home.browseNow')}
								</a>
								<a
									class="fancybutton secondary"
									href={route('/patreon')}
									target="_blank"
									rel="noopener noreferrer"
								>
									{translate('home.donate')}
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Dependency Carousel */}
				<div data-aos="fade-up" class="carousel-container">
					<div class="carousel-wrapper">
						<div class="carousel">
							<div class="carousel-inner">
								{['vite', 'solid', 'nordtheme', 'nodejs', 'fontawesome', 'scramjet'].map(
									(name) => (
										<div class="dependencylogo">
											<img
												loading="lazy"
												src={route(`/assets/img/${name}.webp`)}
												alt={name}
											/>
										</div>
									)
								)}
								{['vite', 'solid', 'nordtheme', 'nodejs', 'fontawesome', 'scramjet'].map(
									(name) => (
										<div class="dependencylogo">
											<img
												loading="lazy"
												src={route(`/assets/img/${name}.webp`)}
												alt={name}
											/>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Designed with Privacy */}
				<div class="text-center section-header">
					<div class="splashstroke">
						<h2 class="splashstrokeheader">
							<Translation id="home.designedWithPrivacy" tags={links} />
						</h2>
						<div class="simple-underline"></div>
					</div>
				</div>

				{/* Info Cards */}
				<div class="grid-container">
					<div data-aos="fade-right" id="info" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.overview.title')}</h3>
								<p>{translate('home.overview.body')}</p>
								<p>
									<Translation id="home.overview.donate" tags={links} />
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/server.webp')}
								alt={translate('home.overview.imageAlt')}
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.intent.title')}</h3>
								<p>{translate('home.intent.body')}</p>
								<p>
									<Translation id="home.intent.palette" tags={links} />
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/filecode.webp')}
								alt={translate('home.intent.imageAlt')}
							/>
						</div>
					</div>

					<div data-aos="fade-right" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.usage.title')}</h3>
								<p>
									<Translation id="home.usage.body" tags={links} />
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/shield.webp')}
								alt={translate('home.usage.imageAlt')}
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.apps.title')}</h3>
								<p>{translate('home.apps.body')}</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/apps.webp')}
								alt={translate('home.apps.imageAlt')}
							/>
						</div>
					</div>

					<div data-aos="fade-right" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.hosting.title')}</h3>
								<p>
									<Translation id="home.hosting.body" tags={links} />
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/hosting.webp')}
								alt={translate('home.hosting.imageAlt')}
								title={translate('home.hosting.imageTitle')}
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>{translate('home.contributing.title')}</h3>
								<p>
									<Translation id="home.contributing.body" />
								</p>
								<p>
									<Translation id="home.contributing.start" tags={links} />
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/git.webp')}
								alt={translate('home.contributing.imageAlt')}
								title={translate('home.contributing.imageTitle')}
							/>
						</div>
					</div>
				</div>

				{/* Unrestricted Section */}
				<div data-aos="fade-up" class="hero-grid-container">
					<div class="box-hero glass">
						<div class="hero-content">
							<div class="hero-text-wrap">
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.bypass.title')}
										</h3>
									</div>
									<p>
										<Translation id="home.bypass.body" />
									</p>
								</div>
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.freeProxy.title')}
										</h3>
									</div>
									<p>
										<Translation id="home.freeProxy.body" />
									</p>
								</div>
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">
											{translate('home.tor.title')}
										</h3>
									</div>
									<p>
										<Translation id="home.tor.body" />
									</p>
								</div>
							</div>
						</div>
						<div class="image-container-hero">
							<h2 class="big-title">{translate('home.unrestricted')}</h2>
							<a class="fancybutton primary large" href={route('/browsing')}>
								{translate('home.bypassNow')}
							</a>
						</div>
					</div>
				</div>

				{/* Closing */}
				<div class="box-home text-center splashend">
					<h2>{translate('home.closing')}</h2>
					<div class="closing-actions">
						<a class="homebutton primary" href="#scrollfix">
							{translate('home.tryFree')}
						</a>
						<a class="homebutton secondary mobile" href={route('/browsing')}>
							{translate('home.tryFree')}
						</a>
					</div>
				</div>
			</div>

			<div id="footer" class="fullwidth">
				<Footer />
			</div>

			<Keywords />
			<Inline>
				<script src={route('assets/js/card.js', 'inline')} />
			</Inline>
		</>
	);
}

export function Head() {
	return (
		<>
			<meta http-equiv="x-ua-compatible" content="IE=edge" />
			<SEO>
				<meta name="version" content={values.version} />
				<meta name="googlebot" content="index, follow, snippet" />
				<meta
					name="robots"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta name="author" content="QuiteAFancyEmerald" />
				<meta name="application-name" content="InvisiProxy LTS" />
			</SEO>
			<title>{translate('home.title')}</title>
			<SEO>
				<meta name="description" content={translate('home.description')} />
				<meta
					name="Keywordss"
					content="web proxy, free web proxy, proxy web browser, proxy web, proxy web page, proxy for web, secure proxy, unblock websites, free proxy, bypass censorship, unblock Chromebook, proxy service, online security, private browsing, unblock social media, access blocked content, proxy server, internet freedom, unblock at school, unblock at work"
				/>
				<meta property="og:site_name" content="InvisiProxy LTS" />
				<meta property="og:title" content={translate('home.title')} />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content={translate('home.ogDescription')}
				/>
			</SEO>
			<meta property="og:image" content={route('assets/img/hero.webp')} />
			<meta
				property="og:image:secure_url"
				content={route('assets/img/hero.webp')}
			/>
			<SEO>
				<meta property="og:image:alt" content={translate('common.logoAlt')} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@titaniumnetdev" />
				<meta name="twitter:creator" content="@titaniumnetdev" />
				<meta name="twitter:title" content={translate('home.title')} />
				<meta
					name="twitter:description"
					content={translate('home.twitterDescription')}
				/>
				<meta name="twitter:image" content={route('assets/img/hero.webp')} />
				<meta
					name="twitter:image:alt"
					content={translate('common.logoAlt')}
				/>
			</SEO>
			<meta name="msapplication-TileColor" content="#ff2d55" />
			<meta
				name="msapplication-TileImage"
				content={route('assets/ico/ms-icon-144x144.png')}
			/>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<SEO>
				<meta name="apple-mobile-web-app-title" content="InvisiProxy LTS" />
			</SEO>
			<HeadContent />
			<ParticlesScript />
			<AosScripts />
			<PageScripts />
			<link
				rel="mask-icon"
				href={route('assets/svg/new.svg')}
				color="#ff2d55"
			/>
			<link rel="manifest" href={route('manifest.json')} />
			<meta name="mobile-web-app-capable" content="yes" />
			<SEO>
				<script
					type="application/ld+json"
					innerHTML={
						'\n      {\n        "@context": "https://schema.org",\n        "@graph": [\n          {\n            "@type": "WebSite",\n            "@id": "https://invisiproxy.com/#website",\n            "url": "https://invisiproxy.com/",\n            "name": "InvisiProxy LTS",\n            "alternateName": [\n              "InvisiProxy",\n              "InvisiProxy LTS Web Proxy"\n            ],\n            "description": "InvisiProxy LTS is a free, open-source web proxy for bypassing web filters and network censorship, with built-in Tor routing and self-hosting support.",\n            "inLanguage": "' +
						languageTag(values.locale) +
						'",\n            "publisher": {\n              "@id": "https://invisiproxy.com/#organization"\n            }\n          },\n          {\n            "@type": "Organization",\n            "@id": "https://invisiproxy.com/#organization",\n            "name": "InvisiProxy LTS",\n            "alternateName": "InvisiProxy",\n            "url": "https://invisiproxy.com/",\n            "logo": {\n              "@type": "ImageObject",\n              "@id": "https://invisiproxy.com/#logo",\n              "url": "https://invisiproxy.com/assets/img/logo_github.png",\n              "contentUrl": "https://invisiproxy.com/assets/img/logo_github.png",\n              "width": 878,\n              "height": 1262,\n              "caption": "InvisiProxy LTS"\n            },\n            "image": {\n              "@id": "https://invisiproxy.com/#logo"\n            },\n            "description": "InvisiProxy LTS is an open-source web proxy project that helps people bypass web filters and regional censorship while keeping their browsing private.",\n            "email": "8xz62b0ce@mozmail.com",\n            "foundingDate": "2020",\n            "founder": {\n              "@type": "Person",\n              "name": "Quite A Fancy Emerald",\n              "url": "https://github.com/QuiteAFancyEmerald"\n            },\n            "contactPoint": {\n              "@type": "ContactPoint",\n              "contactType": "customer support",\n              "email": "8xz62b0ce@mozmail.com",\n              "url": "https://invisiproxy.com/credits",\n              "availableLanguage": [\n                "English"\n              ]\n            },\n            "sameAs": [\n              "https://github.com/InvisiProxy/InvisiProxyLTS",\n              "https://www.patreon.com/invisiproxy"\n            ]\n          }\n        ]\n      }\n    '
					}
				/>
				<Show when={values.locale === 'en'}>
					<script
						type="application/ld+json"
						innerHTML={
							'\n      {\n        "@context": "https://schema.org",\n        "@type": "FAQPage",\n        "@id": "https://invisiproxy.com/#faq",\n        "url": "https://invisiproxy.com/",\n        "name": "InvisiProxy LTS frequently asked questions",\n        "inLanguage": "en-US",\n        "isPartOf": {\n          "@id": "https://invisiproxy.com/#website"\n        },\n        "about": {\n          "@id": "https://invisiproxy.com/#organization"\n        },\n        "mainEntity": [\n          {\n            "@type": "Question",\n            "name": "What is InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "InvisiProxy LTS is a free, open-source web proxy that lets you reach websites blocked by school, workplace, or regional filters. It runs entirely in your browser using Scramjet and Wisp, so there is nothing to install."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "How do I start using InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Open the Browse page, pick one of the featured proxies, and type the address of the site you want to visit into the search box. Scramjet is the recommended option for the best site compatibility and speed."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "How do I unblock websites at school or work?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Visit InvisiProxy LTS and browse through the built-in proxy. If the domain you use gets blocked, use the link button on most pages to get a fresh InvisiProxy LTS link from another device."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "What websites can I access with InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Most of the web works, including Discord, Spotify, YouTube, and many browser game sites. The Apps page also links pre-configured apps such as YouTube, Spotify, Webretro (a multi-console emulator), and Ruffle (a Flash emulator)."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "Is InvisiProxy LTS safe to use?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. InvisiProxy LTS does not collect or log user data, as described in the Privacy Policy, and its full source code is public on GitHub so anyone can verify how it works."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "Does InvisiProxy LTS hide my browsing history?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Sites you open through the proxy do not appear as regular entries in your browser history. You can also disguise the tab title and icon under Settings > Tab Cloak and use Stealth mode for more private browsing."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "Can I use Tor with InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. InvisiProxy LTS can route traffic over the Tor network from inside Chromium-based browsers and Firefox, so you can open .onion sites without installing the Tor Browser. You can also chain traffic through your own SOCKS5 proxy. For the strongest anonymity, the official Tor Browser still offers better fingerprinting protection."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "What makes InvisiProxy LTS different from other web proxies?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "InvisiProxy LTS is fully open source, collects no user data, and builds on actively maintained projects like Scramjet, Wisp, and Proxy Transports. It adds source randomization, leak prevention, CAPTCHA support, Tor routing, and configurable blocklists to get past web and network filters."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "Can I self-host InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Yes. Fork or clone the repository on GitHub and run it on your own server, VPS, or Docker host. Self-hosting gives you full control over privacy and a private link that is less likely to be blocked. Setup guides are in the GitHub repository and the built-in Documentation page."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "What port does a self-hosted InvisiProxy LTS instance use?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "By default a self-hosted instance runs at http://localhost:8080. You can change the port in config.json."\n            }\n          },\n          {\n            "@type": "Question",\n            "name": "How can I contribute to InvisiProxy LTS?",\n            "acceptedAnswer": {\n              "@type": "Answer",\n              "text": "Contributions are welcome in design, core development, apps, documentation, translations, and testing. Start with the GitHub repository and join the Discord community to coordinate with the maintainers."\n            }\n          }\n        ]\n      }\n    '
						}
					/>
				</Show>
			</SEO>
		</>
	);
}
