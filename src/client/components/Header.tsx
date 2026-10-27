import { route, translate, values } from '../document-helpers.tsx';
import Settings from './Settings.tsx';
import MirrorLinks from './MirrorLinks.tsx';

// Simple bubble logo for r2r3
const R2R3Logo = (props: { size?: number; class?: string }) => (
	<svg
		width={props.size || 32}
		height={props.size || 32}
		viewBox="0 0 64 64"
		fill="none"
		class={props.class}
		aria-hidden="true"
	>
		<circle cx="32" cy="32" r="30" fill="url(#glow)" opacity="0.25" />
		<circle cx="26" cy="28" r="16" fill="#ff2d55" opacity="0.9" />
		<circle cx="38" cy="36" r="14" fill="#ff6b8a" opacity="0.85" />
		<circle cx="32" cy="22" r="10" fill="#ff9eb5" opacity="0.7" />
		<circle cx="18" cy="42" r="5" fill="#ff2d55" opacity="0.6" />
		<circle cx="46" cy="20" r="4" fill="#ff6b8a" opacity="0.5" />
		<circle cx="24" cy="24" r="3" fill="white" opacity="0.35" />
		<defs>
			<radialGradient id="glow" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#ff2d55" stop-opacity="0.6" />
				<stop offset="100%" stop-color="#ff2d55" stop-opacity="0" />
			</radialGradient>
		</defs>
	</svg>
);

export default function Header() {
	const overview = route(values.usingSEO ? '/' : '/overview');
	return (
		<>
			<div class="brand-logo-container">
				<a href={route('/')} class="brand pulse" title={translate('header.homeTitle')}>
					<R2R3Logo size={34} class="header-logo" />
					<span style="margin-left: 0.6rem; font-weight: 700;">r2r3</span>
				</a>
			</div>
			<div class="navbar-group">
				<ul
					class="navbar-1"
					aria-label={translate('header.primaryNav')}
				>
					<li style="margin-left: 0">
						<a
							class="line"
							href={overview}
							title={translate('header.overview.title')}
						>
							{translate('header.overview.label')}
						</a>
					</li>
					<li>
						<a
							class="line"
							href={route('/browsing')}
							title={translate('header.browse.title')}
						>
							{translate('header.browse.label')}
						</a>
					</li>
					<li>
						<a
							class="line"
							href={route('/apps')}
							title={translate('header.apps.title')}
						>
							{translate('header.apps.label')}
						</a>
					</li>
					<li>
						<a
							class="line"
							href={route('/partners')}
							title={translate('header.partners.title')}
						>
							{translate('header.partners.label')}
						</a>
					</li>
					<li>
						<a
							class="line"
							href={route('/documentation')}
							title={translate('header.docs.title')}
						>
							{translate('header.docs.label')}
						</a>
					</li>
				</ul>
				<ul class="navbar">
					<li class="dropdown-parent dmenu">
						<div class="pulse white-text">
							<button
								class="link-button"
								type="button"
								tabindex="0"
								aria-label={translate('header.moreOptions')}
							>
								<i class="fas fa-bars"></i>
							</button>
						</div>
						<section
							class="dropdown-child"
							tabindex="0"
							aria-label={translate('header.moreOptionsMenu')}
						>
							<ul class="subnavbar">
								<li>
									<a
										href={route('/questions')}
										title={translate('header.faq.title')}
									>
										{translate('header.faq.label')}
									</a>
								</li>
								<li>
									<a
										href={route('/credits')}
										title={translate('header.credits.title')}
									>
										{translate('header.credits.label')}
									</a>
								</li>
								<li>
									<a
										href={route('/privacy')}
										title={translate('header.privacy.title')}
									>
										{translate('header.privacy.label')}
									</a>
								</li>
							</ul>
						</section>
					</li>
					<li class="mirror-links-nav">
						<MirrorLinks />
					</li>
					<li class="donate-nav">
						<a
							class="donate-link"
							href={route('/patreon')}
							target="_blank"
							rel="noopener noreferrer"
							title={translate('header.donate')}
						>
							<i class="fab fa-patreon" aria-hidden="true"></i>
							<span class="sr-only">{translate('header.donate')}</span>
						</a>
					</li>
					<li class="dropdown-parent smenu">
						<div class="white-text">
							<button
								class="link-button settings-toggle"
								type="button"
								aria-label={translate('header.settingsMenu')}
								tabindex="0"
							>
								<i class="fas fa-cog" aria-hidden="true"></i>
							</button>
						</div>
						<section
							class="dropdown-settings"
							tabindex="0"
							aria-label={translate('header.settingsMenu')}
						>
							<div id="csel">
								<Settings />
							</div>
						</section>
					</li>
				</ul>
			</div>
			<input
				id="mnavecb"
				type="checkbox"
				aria-label={translate('header.toggleMenu')}
			/>
			<label
				for="mnavecb"
				class="mnave"
				aria-label={translate('header.toggleMenu')}
			>
				<span class="mnavebutton" aria-hidden="true"></span>
			</label>
			<div class="mobile-overlay">
				<ul class="navbar-1">
					<li>
						<a href={overview}>{translate('header.overview.label')}</a>
					</li>
					<li>
						<a href={route('/browsing')}>{translate('header.browse.label')}</a>
					</li>
					<li>
						<a href={route('/partners')}>{translate('header.partners.label')}</a>
					</li>
					<li>
						<a href={route('/apps')}>{translate('header.apps.mobileLabel')}</a>
					</li>
					<li>
						<a href={route('/documentation')}>{translate('header.docs.label')}</a>
					</li>
					<li>
						<a href={route('/questions')}>{translate('header.faq.label')}</a>
					</li>
					<li>
						<a href={route('/credits')}>{translate('header.credits.label')}</a>
					</li>
					<li>
						<a href={route('/privacy')}>{translate('header.privacy.mobileLabel')}</a>
					</li>
				</ul>
			</div>
		</>
	);
}
