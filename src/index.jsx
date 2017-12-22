import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SlideModal extends Component {
	static propTypes = {
		isOpen: PropTypes.bool,
		onOutsideClick: PropTypes.func,
		title: PropTypes.string,
		footer: PropTypes.node,
		children: PropTypes.node,
		verticalOffset: PropTypes.shape({
			top: PropTypes.number,
			bottom: PropTypes.number
		})
	};

	constructor (props) {
		super(props);
		let contentStyle;
		const offset = props.verticalOffset;
		const verticalOffset = offset ? (offset.top ? offset.top : 0) + (offset.bottom ? offset.bottom : 0) : 0;
		if (!this.props.footer && !this.props.title) {
			contentStyle = {height: `calc(100vh - ${verticalOffset}px)`};
		} else if (!this.props.footer || !this.props.title) {
			contentStyle = {height: `calc(100vh - ${55 + verticalOffset}px)`};
		} else {
			contentStyle = {height: `calc(100vh - ${110 + verticalOffset}px)`};
		}
		this.state = {
			isOpen: !!props.isOpen,
			wrapperClass: 'SlideWrapper--open',
			sliderClass: 'SlideModal--open',
			contentStyle
		};
	}

	componentWillMount () {
		this.bodyElement = document.getElementsByTagName('body')[0];
	}

	componentDidUpdate (prevProps, prevState) {
		if (!prevState.isOpen && this.state.isOpen) {
			this.bodyElement.classList.add('h-overflowHidden');
		} else if (prevState.isOpen && !this.state.isOpen) {
			this.bodyElement.classList.remove('h-overflowHidden');
		}
	}

	componentWillReceiveProps (nextProps) {
		if (this.props.isOpen && !nextProps.isOpen) {
			this.setState({
				sliderClass: 'SlideModal--close',
				wrapperClass: 'SlideWrapper--close'
			});
		} else if (!this.props.isOpen && nextProps.isOpen) {
			this.setState({
				isOpen: true,
				wrapperClass: 'SlideWrapper--open',
				sliderClass: 'SlideModal--open'
			});
		}
	}

	componentWillUnmount () {
		this.bodyElement.classList.remove('h-overflowHidden');
	}

	onAnimationEnd = e => {
		if (e.animationName === 'slideOut') {
			this.setState({ isOpen: false });
		}
	};

	onWrapperClick = e => {
		const className = e.target.className;
		if (className.includes('js-slideWrapper') && this.props.onOutsideClick) {
			this.props.onOutsideClick();
		}
	};

	render () {
		return this.state.isOpen ? (
			<div
				onAnimationEnd={this.onAnimationEnd}
				className={'SlideWrapper js-slideWrapper' + ' ' + this.state.wrapperClass}
				onClick={this.onWrapperClick}
				style={this.props.verticalOffset ? {
					top: this.props.verticalOffset.top,
					bottom: this.props.verticalOffset.bottom
				} : {}}
			>
				<div className={'SlideModal ' + this.state.sliderClass}
					style={this.props.verticalOffset ? {
						top: this.props.verticalOffset.top,
						bottom: this.props.verticalOffset.bottom
					} : {}}>
					<div className='h-displayFlex h-flexCol h-flexSpaceBetween'>
						{this.props.title &&
						(<div className='SlideModal__headerFooter js-slideModalHeader'>
							<h4 className='SlideModal__title'>{this.props.title}</h4>
						</div>)}
						<div className={'h-overflowAuto ' + this.state.contentClass} style={this.state.contentStyle}>{this.props.children}</div>
						{this.props.footer && <div className='SlideModal__headerFooter'>{this.props.footer}</div>}
					</div>
				</div>
			</div>
		) : null;
	}
}
