import documentCheckEvents from "./js/helpers/documentCheckEvents";
import loadPageActions from "./js/functions/actions/load-page-actions";
import loadDepends from "./js/functions/load-depends";
import  queryString from 'query-string';
import  "./js/functions/mount-elements";
import  './js/libs/react-lodash';
import {setScrollValue} from "./js/store/scroll-position/actions";

window.Link = 'a';
window.count = 0
window.countReduced = 0

function loadDatastorageUpdater() {
  import(/* webpackChunkName: 'DatastorageUpdater' */'./js/classes/modules/DatastorageUpdater').then(module => {
    const dataStorageUpdater = window.dataStorageUpdater;

    dataStorageUpdater.updateCurrent(currentPage?.data_sources || []);
  });
}

function _hAltrp() {

  import(/* webpackChunkName: 'altrp' */'./js/libs/altrp').then(() => {
    window.currentRouterMatch = new window.AltrpModel({
      params: queryString.parseUrl(window.location.href).query
    });
    import (/* webpackChunkName: 'appStore' */'./js/store/store').then(() => {

      loadDatastorageUpdater();
    })
  })
  documentCheckEvents(() => {
    /**
     * Рендерим главный компонент после загрузки основных модулей
     */
    window.loadingCallback = async function loadingCallback() {
      loadPageActions()
      if (window.React
        && window.Component
        && window.ReactDOM
        && window.frontElementsFabric
        && window.frontElementsManager
        && window.frontElementsManager.componentsIsLoaded()
        && window.elementDecorator
        && window.ElementWrapper
        // && window.formsManager
        && window.altrpHelpers
        && window.altrpHelpers.replaceContentWithData
        && window.appStore
        && window._
        /**
         * Проверим подгрузку необходимых библиотек
         */
        && (window.altrpElementsLists &&
          (window.libsToLoad.length
            === window.libsLoaded.length))
      ) {
        if (window.altrpContentLoaded) {
          return
        }
        window.altrpContentLoaded = true
        //console.log('h-altrp LOADED: ', performance.now());

        const hAltrpLoadedEvent = new Event('h-altrp-loaded');
        // console.log('h-altrp-loaded');
        window.dispatchEvent(hAltrpLoadedEvent);
        document.dispatchEvent(hAltrpLoadedEvent);

        let actionComponents = _.get(__altrp_settings__, 'action_components', [])
        if (actionComponents.find((action => action === 'toggle_popup'))) {
          let loadPopups = (await import(/* webpackChunkName: 'load-popups' */'./js/functions/load-popups')).default;
          loadPopups();
        }
      }
    }

    window.sSr = false;

    /**
     * Параллельно загружаем все необходимые модули
     */

    import(/* webpackChunkName: 'altrp' */'./js/libs/altrp').then(module => {


      import (/* webpackChunkName: 'appStore' */'./js/store/store').then(() => {
        document.dispatchEvent(new Event('app-store-loaded'))
        //console.log('LOAD appStore: ', performance.now());
        loadingCallback();
        loadDepends()
      });

      import (/* webpackChunkName: 'SingleElementWrapper' */'./js/components/SingleElementWrapper').then(module => {
        window.ElementWrapper = module.default;
        //console.log('LOAD SingleElementWrapper: ', performance.now());
        loadingCallback();
      });

      import (/* webpackChunkName: 'elementDecorator' */'./js/decorators/front-element-component').then(module => {
        window.elementDecorator = module.default;
        //console.log('LOAD elementDecorator: ', performance.now());
        loadingCallback();
      });
      //console.log('LOAD altrp: ', performance.now());
    })


    import (/* webpackChunkName: 'FormsManager' */'../../editor/src/js/classes/modules/FormsManager.js').then(module => {
      //console.log('LOAD FormsManager: ', performance.now());
    });
  })

  window.stylesModulePromise = new Promise(function (resolve) {
    window.stylesModuleResolve = resolve;

    import (/* webpackChunkName: 'FormsManager' */'../../editor/src/js/classes/modules/FormsManager.js').then(() => {
      //console.log('LOAD FormsManager: ', performance.now());
    });

    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    } else {
      console.log(
        '%cWelcome to Altrp Front App',
        'color: blue; font-size: 24px; font-weight: 900;'
      );
    }

    /**
     * Изменение скролла для загрузки ленивых изображений
     */
    const frontAppContainer = document.getElementById('front-app');



    const altrpe = new Event(`altrpe`);
    document.dispatchEvent(altrpe)
  })
}
window._hAltrp = _hAltrp
window._hAltrp()

window.addEventListener('mousemove', e=>{
  altrp.mousePosition = {
    x: e.clientX,
    y: e.clientY
  }
})

document.addEventListener('scroll', e => {
  window.appStore && window.appStore.dispatch(setScrollValue({top: document.documentElement.scrollTop}))
  import(/* webpackChunkName: 'scroll-actions' */'./js/functions/actions/scroll-actions').then((module) => {
    module?.default(e);
  })
})

document.body.addEventListener('click', e => {
  import(/* webpackChunkName: 'click-actions' */'./js/functions/actions/click-actions').then((module) => {
    module?.default(e);
  })
})

window.addEventListener('h-altrp-loaded', e => {
  import(/* webpackChunkName: 'load-sticky' */'./js/functions/load-sticky').then((module) => {
    module?.default(e);
  })

})

if (document.querySelector('[data-enter-animation-type]')) {
  import(/* webpackChunkName: 'add-animation-classes' */'./js/functions/add-animation-classes').then(module => {
    document.addEventListener('scroll', module.default)
    module.default();
  })
}
