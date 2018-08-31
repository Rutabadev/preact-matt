import './style.scss';
import CreditCardIcon from 'preact-icons/md/credit-card';
import DeliciousIcon from 'preact-icons/fa/delicious';
import LinkIcon from 'preact-icons/ti/link';
import MortarBoardIcon from 'preact-icons/go/mortar-board';
import RestaurantIcon from 'preact-icons/io/android-restaurant';

export const CssShowcase = () => (
	<div class="css-showcase">
		<div class="elements-box">
			<button class="primary">primary</button>
			<button class="secondary">secondary</button>
			<button disabled class="primary">disabled</button>
		</div>
		<div class="elements-box">
			<CreditCardIcon />
			<DeliciousIcon />
			<LinkIcon />
			<MortarBoardIcon />
			<RestaurantIcon />
		</div>
	</div>
);
