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
import { Show, onMount, onCleanup } from 'solid-js';
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
		<a href={route('/documentation')} title="Documentation">
			{text}
		</a>
	),
	github: (text: string) => (
		<a
			href={route('/github')}
			title="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	),
	nord: (text: string) => (
		<a href="https://nordtheme.com" target="_blank" rel="noopener noreferrer">
			{text}
		</a>
	),
	patreon: (text: string) => (
		<a
			href={route('/patreon')}
			aria-label="Support on Patreon"
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	),
	underline: () => <span class="underline-svg"></span>,
};

// Simple but interesting logo – overlapping bubbles forming a modern mark
const R2R3Logo = (props: { size?: number; class?: string }) => (
	<svg
		width={props.size || 48}
		height={props.size || 48}
		viewBox="0 0 64 64"
		fill="none"
		class={props.class}
		aria-hidden="true"
	>
		{/* Outer soft glow circle */}
		<circle cx="32" cy="32" r="30" fill="url(#glow)" opacity="0.25" />
		{/* Main overlapping bubbles */}
		<circle cx="26" cy="28" r="16" fill="#ff2d55" opacity="0.9" />
		<circle cx="38" cy="36" r="14" fill="#ff6b8a" opacity="0.85" />
		<circle cx="32" cy="22" r="10" fill="#ff9eb5" opacity="0.7" />
		{/* Small accent bubbles */}
		<circle cx="18" cy="42" r="5" fill="#ff2d55" opacity="0.6" />
		<circle cx="46" cy="20" r="4" fill="#ff6b8a" opacity="0.5" />
		{/* Subtle highlight */}
		<circle cx="24" cy="24" r="3" fill="white" opacity="0.35" />
		<defs>
			<radialGradient id="glow" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#ff2d55" stop-opacity="0.6" />
				<stop offset="100%" stop-color="#ff2d55" stop-opacity="0" />
			</radialGradient>
		</defs>
	</svg>
);

// Floating bubbles background effect
function BubbleBackground() {
	let container: HTMLDivElement | undefined;

	onMount(() => {
		if (!container) return;

		const createBubble = () => {
			const bubble = document.createElement('div');
			bubble.className = 'bubble';
			const size = Math.random() * 40 + 12;
			bubble.style.width = `${size}px`;
			bubble.style.height = `${size}px`;
			bubble.style.left = `${Math.random() * 100}%`;
			bubble.style.animationDuration = `${Math.random() * 12 + 10}s`;
			bubble.style.animationDelay = `${Math.random() * 5}s`;
			bubble.style.opacity = `${Math.random() * 0.35 + 0.1}`;
			container!.appendChild(bubble);

			// Remove after animation
			setTimeout(() => {
				bubble.remove();
			}, 22000);
		};

		// Initial bubbles
		for (let i = 0; i < 18; i++) {
			setTimeout(createBubble, i * 300);
		}

		// Continuous generation
		const interval = setInterval(createBubble, 1200);

		onCleanup(() => clearInterval(interval));
	});

	return <div class="bubble-container" ref={container} aria-hidden="true" />;
}

export default function Home() {
	return (
		<>
			<style>{`
				/* ========== Bubble Effect ========== */
				.bubble-container {
					position: fixed;
					inset: 0;
					pointer-events: none;
					overflow: hidden;
					z-index: 0;
				}
				.bubble {
					position: absolute;
					bottom: -80px;
					border-radius: 50%;
					background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(255, 45, 85, 0.15));
					border: 1px solid rgba(255, 107, 138, 0.2);
					animation: rise linear infinite;
				}
				@keyframes rise {
					0% {
						transform: translateY(0) scale(1);
						opacity: 0;
					}
					10% {
						opacity: 0.4;
					}
					90% {
						opacity: 0.25;
					}
					100% {
						transform: translateY(-110vh) scale(1.1);
						opacity: 0;
					}
				}

				/* ========== Core Theme ========== */
				:root {
					--bg-deep: #07070c;
					--bg-card: rgba(16, 16, 24, 0.72);
					--accent: #ff2d55;
					--accent-soft: #ff6b8a;
					--text-primary: #f2f2f7;
					--text-secondary: #9a9aab;
					--border: rgba(255, 255, 255, 0.07);
					--radius: 18px;
				}

				#mainbody {
					position: relative;
					z-index: 1;
					background: var(--bg-deep);
				}

				.glass {
					background: var(--bg-card);
					backdrop-filter: blur(18px);
					-webkit-backdrop-filter: blur(18px);
					border: 1px solid var(--border);
					border-radius: var(--radius);
					box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
				}

				/* Buttons */
				.homebutton.primary,
				.fancybutton.primary {
					background: linear-gradient(135deg, #ff2d55, #ff4d6d);
					color: white;
					border: none;
					padding: 0.9rem 2rem;
					border-radius: 14px;
					font-weight: 600;
					letter-spacing: 0.02em;
					transition: all 0.25s ease;
					box-shadow: 0 4px 20px rgba(255, 45, 85, 0.3);
				}
				.homebutton.primary:hover,
				.fancybutton.primary:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 28px rgba(255, 45, 85, 0.45);
				}
				.homebutton.secondary,
				.fancybutton.secondary {
					background: transparent;
					border: 1px solid var(--border);
					color: var(--text-primary);
					padding: 0.9rem 2rem;
					border-radius: 14px;
					transition: all 0.25s ease;
				}
				.homebutton.secondary:hover,
				.fancybutton.secondary:hover {
					border-color: var(--accent);
					background: rgba(255, 45, 85, 0.08);
				}

				/* Logo */
				.logo-row {
					margin-bottom: 1.25rem;
				}
				.hero-logo,
				.logo-hero-wrap svg {
					filter: drop-shadow(0 0 12px rgba(255, 45, 85, 0.35));
				}

				/* Accent dots */
				.accent-dot {
					width: 9px;
					height: 9px;
					background: var(--accent);
					border-radius: 50%;
					display: inline-block;
					margin-right: 0.65rem;
					box-shadow: 0 0 10px var(--accent);
				}

				/* Simple underline */
				.simple-underline {
					width: 72px;
					height: 3px;
					background: linear-gradient(90deg, var(--accent), var(--accent-soft));
					border-radius: 3px;
					margin: 0.8rem auto 0;
				}

				/* Terminal */
				.mac-window {
					border-radius: 16px;
					overflow: hidden;
					border: 1px solid var(--border);
					background: #0c0c14;
					box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
				}
				.mac-title-bar {
					background: #14141e;
					padding: 0.65rem 1.1rem;
					display: flex;
					align-items: center;
					gap: 0.8rem;
				}
				.mac-title {
					font-size: 0.78rem;
					color: var(--text-secondary);
					font-family: ui-monospace, monospace;
				}

				/* Section spacing */
				.section-header {
					margin: 4rem 0 2.5rem;
				}
				.feature-block {
					margin-bottom: 1.75rem;
				}
				.big-title {
					font-size: clamp(2.2rem, 5vw, 3.4rem);
					font-weight: 700;
					letter-spacing: -0.03em;
					margin-bottom: 1.5rem;
				}
			`}</style>

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
				{/* Bubble background */}
				<BubbleBackground />

				<div id="background" class="fullwidth"></div>

				{/* Hero */}
				<section class="home-grid-container" aria-label="Home">
					<div class="home-text">
						<div class="logo-row">
							<R2R3Logo size={64} class="hero-logo" />
						</div>
						<h1 class="headline">
							<span>r2r3</span>
						</h1>
						<h2 class="tagline">Fast. Private. Unrestricted.</h2>
						<div class="hero-actions">
							<a class="homebutton primary" href="#scrollfix">
								Start Browsing
							</a>
							<a class="homebutton secondary mobile" href="#scrollfix">
								Start Browsing
							</a>
						</div>
					</div>

					<section class="mac-window" aria-label="Quick Start">
						<div class="mac-title-bar">
							<div class="mac-buttons">
								<span class="mac-close"></span>
								<span class="mac-minimize"></span>
								<span class="mac-maximize"></span>
							</div>
							<span class="mac-title">r2r3</span>
						</div>
						<div class="mac-content">
							<p>
								<span class="cmd">
									git clone --recurse-submodules
									<span class="url"> https://github.com/your-org/r2r3.git</span>
								</span>
								<br />
								<span class="cmd">cd r2r3</span>
								<br />
								<span class="comment"># first time setup</span>
								<br />
								<span class="cmd">pnpm run fresh-start</span>
								<br />
								<span class="comment"># start the server</span>
								<br />
								<span class="cmd">pnpm start</span>
								<br />
								<span class="comment"># development mode</span>
								<br />
								<span class="cmd">pnpm dev</span>
								<br />
								<br />
								<span class="comment">r2r3 v{values.version} // master</span>
								<br />
								<span class="comment">Node.js · SolidJS</span>
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
										<h3 class="hero-content-header">Free & Open</h3>
									</div>
									<p>
										Fully open source. Self-host for maximum privacy or use the
										public instance. No accounts, no tracking.
									</p>
								</div>

								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">Blazing Fast</h3>
									</div>
									<p>
										Built on modern transports and Scramjet for excellent site
										compatibility and low latency.
									</p>
								</div>

								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">Practical</h3>
									</div>
									<p>
										Works against school, workplace, and regional filters —
										entirely in your browser.
									</p>
								</div>
							</div>
						</div>

						<div class="image-container-hero">
							<div class="logo-hero-wrap">
								<R2R3Logo size={130} />
							</div>
							<h2>r2r3</h2>
							<p class="hero-sub">Privacy-focused web proxy</p>
							<div class="hero-buttons">
								<a class="fancybutton primary" href={route('/browsing')}>
									Browse Now
								</a>
								<a
									class="fancybutton secondary"
									href={route('/patreon')}
									target="_blank"
									rel="noopener noreferrer"
								>
									Support
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
						<h2 class="splashstrokeheader">Designed with privacy in mind</h2>
						<div class="simple-underline"></div>
					</div>
				</div>

				{/* Info Cards */}
				<div class="grid-container">
					<div data-aos="fade-right" id="info" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Overview</h3>
								<p>
									r2r3 is a free, open-source web proxy that helps you reach
									sites blocked by filters or regional restrictions. Everything
									runs in the browser.
								</p>
								<p>
									Support the project on <a href={route('/patreon')}>Patreon</a>.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/server.webp')}
								alt="Server"
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Intent</h3>
								<p>
									Built for people who value privacy and unrestricted access.
									Clean interface, strong defaults, and transparent code.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/filecode.webp')}
								alt="Code"
							/>
						</div>
					</div>

					<div data-aos="fade-right" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Usage</h3>
								<p>
									Open the Browse page, pick a proxy backend, and enter any URL.
									Works great for everyday browsing and blocked services.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/shield.webp')}
								alt="Shield"
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Apps</h3>
								<p>
									Pre-configured links for popular services and tools so you can
									jump in quickly.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/apps.webp')}
								alt="Apps"
							/>
						</div>
					</div>

					<div data-aos="fade-right" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Self-hosting</h3>
								<p>
									Clone the repo and run it on your own server or VPS for full
									control and a private instance.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/hosting.webp')}
								alt="Hosting"
							/>
						</div>
					</div>

					<div data-aos="fade-left" class="box-card glass">
						<div class="content">
							<div class="text-wrap">
								<h3>Contribute</h3>
								<p>
									Design, code, docs, and translations are all welcome. Check the
									GitHub repo to get started.
								</p>
							</div>
						</div>
						<div class="image-container">
							<img
								class="hero"
								src={route('/assets/img/git.webp')}
								alt="Git"
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
										<h3 class="hero-content-header">Bypass Filters</h3>
									</div>
									<p>
										Designed to work around common network and client-side
										restrictions without installing anything.
									</p>
								</div>
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">Free Proxy</h3>
									</div>
									<p>
										No paywalls for core features. Optional support helps keep
										public instances running.
									</p>
								</div>
								<div class="feature-block">
									<div class="brand-logo-container">
										<span class="accent-dot"></span>
										<h3 class="hero-content-header">Tor Ready</h3>
									</div>
									<p>
										Optional Tor routing for stronger privacy when you need it.
									</p>
								</div>
							</div>
						</div>
						<div class="image-container-hero">
							<h2 class="big-title">Unrestricted Access</h2>
							<a class="fancybutton primary large" href={route('/browsing')}>
								Browse Now
							</a>
						</div>
					</div>
				</div>

				{/* Closing */}
				<div class="box-home text-center splashend">
					<h2>Ready when you are.</h2>
					<div class="closing-actions">
						<a class="homebutton primary" href="#scrollfix">
							Try r2r3
						</a>
						<a class="homebutton secondary mobile" href={route('/browsing')}>
							Try r2r3
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
				<meta name="author" content="r2r3" />
				<meta name="application-name" content="r2r3" />
			</SEO>
			<title>r2r3 — Free Web Proxy</title>
			<SEO>
				<meta
					name="description"
					content="r2r3 is a fast, private, open-source web proxy for bypassing filters and accessing the open web."
				/>
				<meta
					name="keywords"
					content="web proxy, free proxy, unblock websites, private browsing, r2r3, open source proxy"
				/>
				<meta property="og:site_name" content="r2r3" />
				<meta property="og:title" content="r2r3 — Free Web Proxy" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Fast, private, unrestricted browsing. Open source web proxy."
				/>
			</SEO>
			<meta property="og:image" content={route('assets/img/hero.webp')} />
			<meta
				property="og:image:secure_url"
				content={route('assets/img/hero.webp')}
			/>
			<SEO>
				<meta property="og:image:alt" content="r2r3 logo" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="r2r3 — Free Web Proxy" />
				<meta
					name="twitter:description"
					content="Fast, private, unrestricted browsing."
				/>
				<meta name="twitter:image" content={route('assets/img/hero.webp')} />
			</SEO>
			<meta name="msapplication-TileColor" content="#ff2d55" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<SEO>
				<meta name="apple-mobile-web-app-title" content="r2r3" />
			</SEO>
			<HeadContent />
			<ParticlesScript />
			<AosScripts />
			<PageScripts />
			<link rel="manifest" href={route('manifest.json')} />
			<meta name="mobile-web-app-capable" content="yes" />
		</>
	);
}
