import { Component } from 'preact';
import PropTypes from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {

	/**
   * Set the wrapper ref
   */
	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	/**
   * Alert if clicked on outside of element
   */
	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.sideNavDisplay !== 'closed') {
			this.props.closeHandler();
		}
	}

	constructor(props) {
		super(props);

		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	render() {
		return <div ref={this.setWrapperRef}>{this.props.children}</div>;
	}
}

OutsideAlerter.propTypes = {
	children: PropTypes.element.isRequired
};
