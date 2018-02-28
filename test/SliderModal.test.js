import React from 'react';
import SlideModal from '../src/index.jsx';

const shallow = require('enzyme').shallow;
const mount = require('enzyme').mount;
const sinon = require('sinon');
const {expect} = require('chai');
/* global describe it afterEach beforeEach */
describe('SlideModal component', () => {
	const props = {
		open: true
	};

	beforeEach(() => {
		sinon.spy(SlideModal.prototype, 'render');
	});

	afterEach(() => {
		SlideModal.prototype.render.restore();
	});

	it('should mount with rendering null by default', () => {
		const slideModal = shallow(<SlideModal />);
		expect(SlideModal.prototype.render.calledOnce).to.be.true;
		expect(slideModal.find('.SlideWrapper').length).to.equal(0);
	});

	it('should be open if isOpen prop is passed', () => {
		const slideModal = shallow(<SlideModal isOpen />);
		expect(slideModal.find('.SlideWrapper').length).to.equal(1);
	});

	it('should render children if passed', () => {
		const slideModal = shallow(
			<SlideModal isOpen>
				<div className="testClassSlideModal" />
			</SlideModal>
		);
		expect(slideModal.find('.testClassSlideModal').length).to.equal(1);
	});

	it('should render title (header) and footer components if passed', () => {
		const slideModal = shallow(
			<SlideModal isOpen title="Test title" footer={<div className="footerTest">Testing footer</div>} />
		);
		expect(slideModal.find('.footerTest').length).to.equal(1);
		expect(slideModal.find('.footerTest').text()).to.equal('Testing footer');
	});

	it('should open if isOpen prop (state) is set to true', () => {
		const slideModal = shallow(<SlideModal />);
		expect(slideModal.find('.SlideModal').length).to.equal(0);
		// state will be set on prop change
		slideModal.setState({isOpen: true});
		expect(slideModal.find('.SlideModal').length).to.equal(1);
	});

	it('should close if isOpen prop (state) is set to false', () => {
		const slideModal = shallow(<SlideModal isOpen />);
		expect(slideModal.find('.SlideModal').length).to.equal(1);
		// state will be set on prop change
		slideModal.setState({isOpen: false});
		expect(slideModal.find('.SlideModal').length).to.equal(0);
	});

	it('should close on click outside of modal content', () => {
		const cb = sinon.spy();
		const slideModal = mount(<SlideModal isOpen onOutsideClick={cb} />);
		slideModal.find('.js-slideWrapper').simulate('click');
		expect(cb.calledOnce).to.be.true;
		slideModal.unmount();
	});

	it('renders header children', () => {
		const slideModal = mount(<SlideModal isOpen header={<div className="headerChild" />} />);

		expect(slideModal.find('.headerChild').length).to.equal(1);

		slideModal.unmount();
	});

	it('is in right to left mode by default', () => {
		const slideModal = mount(<SlideModal isOpen />);

		expect(slideModal.find('.SlideModal--right').length).to.equal(1);
		expect(slideModal.find('.SlideModal--left').length).to.equal(0);

		slideModal.unmount();
	});

	it('enters left to right mode properly', () => {
		const slideModal = mount(<SlideModal isOpen leftToRight />);

		expect(slideModal.find('.SlideModal--right').length).to.equal(0);
		expect(slideModal.find('.SlideModal--left').length).to.equal(1);

		slideModal.unmount();
	});

	it('enters fold mode properly', () => {
		const slideModal = mount(<SlideModal isOpen={false} foldMode />);

		expect(slideModal.find('.SlideModal').length).to.equal(1);

		slideModal.unmount();
	});

	it('doesnt close on click outside when in fold mode', () => {
		const cb = sinon.spy();
		const slideModal = mount(<SlideModal onOutsideClick={cb} foldMode />);

		slideModal.find('.js-slideWrapper').simulate('click');

		expect(cb.notCalled).to.be.true;

		slideModal.unmount();
	});

	it('folds properly', () => {
		const cb = sinon.spy();
		const slideModal = mount(<SlideModal onOutsideClick={cb} foldMode isFolded />);

		expect(slideModal.find('.SlideModal').prop('style')).to.deep.equal({
			width: '140px',
			minWidth: 'auto'
		});

		slideModal.unmount();
	});

	it('unfolds properly', () => {
		const cb = sinon.spy();
		const slideModal = mount(<SlideModal onOutsideClick={cb} foldMode />);

		expect(slideModal.find('.SlideModal').prop('style')).to.deep.equal({});

		slideModal.unmount();
	});

	it('folds to passed width', () => {
		const cb = sinon.spy();
		const slideModal = mount(<SlideModal onOutsideClick={cb} foldMode isFolded foldWidth={'200px'} />);

		expect(slideModal.find('.SlideModal').prop('style')).to.deep.equal({
			width: '200px',
			minWidth: 'auto'
		});

		slideModal.unmount();
	});

});
