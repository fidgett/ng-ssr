import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';


export const hmrBootstrap = (module: any, bootstrap: () => Promise<void|NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;

  if (module && module.hot) {
    module.hot.accept();

    bootstrap().then(mod => {
      if (mod) {
        ngModule = mod;
      }
    });

    module.hot.dispose(() => {
      const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
      const elements = appRef.components.map(c => c.location.nativeElement);
      const makeVisible = createNewHosts(elements);
      ngModule.destroy();
      makeVisible();
    });
  }
};
