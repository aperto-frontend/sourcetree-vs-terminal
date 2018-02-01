// Global dependencies
import { environment } from 'env';
import $ from 'jquery';
import Veams from 'veams';
import VeamsLogger from 'veams-plugin-logger';
import VeamsVent from 'veams-plugin-vent';
import VeamsMediaQueryHandler from 'veams-plugin-media-query-handler';
import VeamsDOM from 'veams-plugin-dom';
import VeamsModules from 'veams-plugin-modules';
// import VeamsStore from 'veams-plugin-store';
// import VeamsTemplater from 'veams-plugin-templater';
import EVENTS from './app.events';

// Veams
Veams.onInitialize(() => {
    /**
    * Veams Plugins
    */
    
    // Dom Plugin
    Veams.use(VeamsDOM, {
     DOM: $
    });

    // Store Plugin
    // Veams.use(VeamsStore, {
    // 	reducer: rootReducer,
    // 	state: INITIAL_STATE,
    // 	subjects: subjects
    // });
    
    // Vent Plugin
    Veams.use(VeamsVent, {
        furtherEvents: EVENTS
    });

    // Logger Plugin for devmode and logger
    Veams.use(VeamsLogger);

    // Media Query Handler Plugin
    Veams.use(VeamsMediaQueryHandler);
    
    // Module System Plugin
    Veams.use(VeamsModules, {
        useMutationObserver: true,
        internalCacheOnly: false
    });

    // Trigger global scroll event
    window.onscroll = Veams.helpers.throttle((event) => {
        Veams.Vent.trigger(Veams.EVENTS.scroll, event);
    }, 200);
});

export { Veams };