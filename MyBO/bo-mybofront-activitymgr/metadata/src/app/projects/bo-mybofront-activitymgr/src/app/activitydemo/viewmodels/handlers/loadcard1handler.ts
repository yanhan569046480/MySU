
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { CardDataService as CardDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'loadCard1'
})
export class loadCard1Handler extends CommandHandler {
    constructor(
        public _CardDataService1: CardDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('update', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CardDataService1, 'update', args, context);
        });

    }
}