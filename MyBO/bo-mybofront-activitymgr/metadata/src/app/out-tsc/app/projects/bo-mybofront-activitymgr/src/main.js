import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import * as __NgCli_bootstrap_1 from "./app/app.module.ngfactory";
import * as __NgCli_bootstrap_2 from "@angular/platform-browser";
if (environment.production) {
    enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModuleFactory(__NgCli_bootstrap_1.AppModuleNgFactory)
    .catch(function (err) { return console.error(err); });
