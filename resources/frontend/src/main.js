/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue';
import { router } from './bootstrap';
import * as App from './app';

router.start(Vue.extend(App), '#app');
