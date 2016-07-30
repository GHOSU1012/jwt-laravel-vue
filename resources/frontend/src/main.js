/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue';
import { Router } from './bootstrap';
import * as App from './app';

Router.start(Vue.extend(App), '#app');
