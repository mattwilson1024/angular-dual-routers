import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { Router } from '@angular/router';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['example'], {strictDi: true});
  platformRef.injector.get(Router).initialNavigation();
});
