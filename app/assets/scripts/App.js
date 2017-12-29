import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modals from './modules/Modals';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modals = new Modals();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");