import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';
import SimpleSlider from '../src/index.jsx';

class Example extends React.Component {
	constructor () {
		super();
		this.state = {
			isOpen: false,
			isFolded: false
		};
	}

	openSlider = () => {
		// this.setState({isFolded: !this.state.isFolded});
		this.setState({isOpen: true});
	};

	closeSlider = () => {
		// this.setState({isFolded: false});
		this.setState({isOpen: false});
	};

	render () {
		return (
			<div style={{padding: '30px'}}>
				{/*<div className="h-textRight">*/}
				{/*<a href='#' style={{fontSize: '22px'}} onClick={this.openSlider}>Open slider</a>*/}
				{/*</div>*/}
				<a href='#' style={{fontSize: '22px'}} onClick={this.openSlider}>Open slider</a>
				<SimpleSlider
                    headerHeight={120}
					isOpen={this.state.isOpen}
					// leftToRight={true}
					// isFolded={this.state.isFolded}
					// foldMode={true}
					header={<div style={{padding: '15px'}}>This is header</div>}
					// title='Testing example'
					verticalOffset={{top: 30, bottom: 30}}
					onOutsideClick={this.closeSlider}
					footer={<div style={{padding: '15px'}}>This is footer</div>}
				>
					<div style={{padding: '15px'}}>
						Lorem ipsum dolor sit amet, in has solet dolores, cum dicta impetus lobortis ea, summo officiis
						ne quo. Quo at harum viderer laoreet, ad per tacimates evertitur interesset, atomorum eleifend
						sit cu. Ad sed reque pericula, vel omnis scripta ea. Ne populo maiorum est, eu eum sonet
						suscipit. Nullam mucius urbanitas sit et, suas movet prodesset ne est.

						Vix at mediocritatem necessitatibus, graece persecuti duo ad, eum ut soluta torquatos
						comprehensam. Sea purto volutpat ea, eu dicat antiopam recteque vel, eum partem integre
						mediocritatem in. Cu menandri sensibus mei, vel cu minimum legendos. Malis nostrum praesent ei
						his, te mea tractatos rationibus philosophia. Id voluptatum dissentias temporibus per, qui et
						falli meliore deterruisset.

						No pri enim imperdiet, eu nonumes deterruisset comprehensam sed. In expetenda mediocritatem has,
						id qui sapientem democritum. Sed admodum singulis sensibus at. Sumo erat saperet ei pro, mei ea
						similique concludaturque.

						Ius at atqui graeco latine. Ei sint unum ubique has, nam dictas ceteros an. Vel ut ancillae
						ponderum, mei ea commodo expetendis, consul sanctus et sea. Suas voluptaria in has, omnes munere
						phaedrum duo id, in natum vivendum theophrastus pro. Volumus maluisset an mei. Munere eirmod usu
						an, eum cu facilisis temporibus. Eos assum mucius denique an, ius noster mandamus repudiandae
						ei.

						Eu mea aliquip fastidii patrioque, probatus suavitate evertitur sed no. Eum te semper facilis,
						eu vero quando alienum usu. Mel te dicat phaedrum moderatius, an sea graecis mediocritatem. Eu
						qui nusquam tacimates, sed vitae interesset omittantur ad. An nulla impedit propriae nam, vero
						mnesarchum eum te, ex fugit bonorum eligendi vix. Legimus democritum mei no. Te mei agam
						tractatos inciderint, ea vel consequat intellegam, ne labore nemore eum.
						Lorem ipsum dolor sit amet, in has solet dolores, cum dicta impetus lobortis ea, summo officiis
						ne quo. Quo at harum viderer laoreet, ad per tacimates evertitur interesset, atomorum eleifend
						sit cu. Ad sed reque pericula, vel omnis scripta ea. Ne populo maiorum est, eu eum sonet
						suscipit. Nullam mucius urbanitas sit et, suas movet prodesset ne est.

						Vix at mediocritatem necessitatibus, graece persecuti duo ad, eum ut soluta torquatos
						comprehensam. Sea purto volutpat ea, eu dicat antiopam recteque vel, eum partem integre
						mediocritatem in. Cu menandri sensibus mei, vel cu minimum legendos. Malis nostrum praesent ei
						his, te mea tractatos rationibus philosophia. Id voluptatum dissentias temporibus per, qui et
						falli meliore deterruisset.

						No pri enim imperdiet, eu nonumes deterruisset comprehensam sed. In expetenda mediocritatem has,
						id qui sapientem democritum. Sed admodum singulis sensibus at. Sumo erat saperet ei pro, mei ea
						similique concludaturque.

						Ius at atqui graeco latine. Ei sint unum ubique has, nam dictas ceteros an. Vel ut ancillae
						ponderum, mei ea commodo expetendis, consul sanctus et sea. Suas voluptaria in has, omnes munere
						phaedrum duo id, in natum vivendum theophrastus pro. Volumus maluisset an mei. Munere eirmod usu
						an, eum cu facilisis temporibus. Eos assum mucius denique an, ius noster mandamus repudiandae
						ei.

						Eu mea aliquip fastidii patrioque, probatus suavitate evertitur sed no. Eum te semper facilis,
						eu vero quando alienum usu. Mel te dicat phaedrum moderatius, an sea graecis mediocritatem. Eu
						qui nusquam tacimates, sed vitae interesset omittantur ad. An nulla impedit propriae nam, vero
						mnesarchum eum te, ex fugit bonorum eligendi vix. Legimus democritum mei no. Te mei agam
						tractatos inciderint, ea vel consequat intellegam, ne labore nemore eum.
						Lorem ipsum dolor sit amet, in has solet dolores, cum dicta impetus lobortis ea, summo officiis
						ne quo. Quo at harum viderer laoreet, ad per tacimates evertitur interesset, atomorum eleifend
						sit cu. Ad sed reque pericula, vel omnis scripta ea. Ne populo maiorum est, eu eum sonet
						suscipit. Nullam mucius urbanitas sit et, suas movet prodesset ne est.

						Vix at mediocritatem necessitatibus, graece persecuti duo ad, eum ut soluta torquatos
						comprehensam. Sea purto volutpat ea, eu dicat antiopam recteque vel, eum partem integre
						mediocritatem in. Cu menandri sensibus mei, vel cu minimum legendos. Malis nostrum praesent ei
						his, te mea tractatos rationibus philosophia. Id voluptatum dissentias temporibus per, qui et
						falli meliore deterruisset.

						No pri enim imperdiet, eu nonumes deterruisset comprehensam sed. In expetenda mediocritatem has,
						id qui sapientem democritum. Sed admodum singulis sensibus at. Sumo erat saperet ei pro, mei ea
						similique concludaturque.

						Ius at atqui graeco latine. Ei sint unum ubique has, nam dictas ceteros an. Vel ut ancillae
						ponderum, mei ea commodo expetendis, consul sanctus et sea. Suas voluptaria in has, omnes munere
						phaedrum duo id, in natum vivendum theophrastus pro. Volumus maluisset an mei. Munere eirmod usu
						an, eum cu facilisis temporibus. Eos assum mucius denique an, ius noster mandamus repudiandae
						ei.

						Eu mea aliquip fastidii patrioque, probatus suavitate evertitur sed no. Eum te semper facilis,
						eu vero quando alienum usu. Mel te dicat phaedrum moderatius, an sea graecis mediocritatem. Eu
						qui nusquam tacimates, sed vitae interesset omittantur ad. An nulla impedit propriae nam, vero
						mnesarchum eum te, ex fugit bonorum eligendi vix. Legimus democritum mei no. Te mei agam
						tractatos inciderint, ea vel consequat intellegam, ne labore nemore eum.
					</div>
				</SimpleSlider>
			</div>
		);
	}
}

function render (Component) {
	ReactDOM.render(<HotContainer>
			<div>
				<Component />
			</div>
		</HotContainer>,
		document.getElementById('react'));
}

render(Example);

if (module.hot) {
	module.hot.accept('../src/index.jsx', () => {
		render(Example);
	});
}
