import './style.scss';
import { Component } from 'preact';
import { Link } from 'preact-router/match';
import { Login } from './login';
import { SideNav } from './sidenav';
import MenuIcon from 'preact-icons/md/menu';
import ColorIcon from 'preact-icons/go/color-mode';


export class Header extends Component {

	openSideNav() {
		this.setState({ sideNavDisplay: 'open' });
		document.body.classList.add('scroll-lock');
	}

	closeSideNav() {
		this.setState({ sideNavDisplay: 'closed' });
		document.body.classList.remove('scroll-lock');
	}

	constructor() {
		super();
		this.state = {
			sideNavDisplay: 'closed'
		};

		this.closeSideNav = this.closeSideNav.bind(this);
	}

	render(props, state) {
		const features = props.features;
		const links = [];
		features.forEach(feature => {
			links.push(
				<Link activeClassName="active" href={feature.path}>
					<button class={feature.main ? 'main' : ''}>{feature.name}</button>
				</Link>
			);
		});

		return (
			<div class="header">
				<div class="sidenav-switcher">
					<button class="sidenav-button" onClick={() => this.openSideNav()}>
						<MenuIcon />
					</button>
					<SideNav
						features={features}
						sideNavDisplay={this.state.sideNavDisplay}
						closeHandler={this.closeSideNav}
						changeTheme={props.changeTheme}
					/>
					<div className={'behind-sidenav ' + this.state.sideNavDisplay} />
				</div>
				<nav class="menu-links">{links}</nav>
				<div class="end-bar">
					<button class="theme-switch" onClick={this.props.changeTheme}>
						<ColorIcon />
					</button>
					<Login />
				</div>
			</div>
		);
	}
}
