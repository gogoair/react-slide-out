import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jsdom-global')();

configure({ adapter: new Adapter() });

const doc = new JSDOM('<!doctype html><html><body><div id="div1"></div><div id="div2"></div></body></html>');

global.document = doc.window.document;
global.window = doc.window;
