
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'remove1'
})
export class remove1Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('remove', (context: CommandContext) => {
            const args = [
                '{DATA~/data-grid-component/id}', 
                ''
                    ];
            return this.invoke(this._ListDataService1, 'remove', args, context);
        });

        this.addTask('refreshAfterRemoving', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/refreshCommandName}', 
                '{COMMAND~/params/refreshCommandFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refreshAfterRemoving', args, context);
        });

        this.addLink('remove', 'refreshAfterRemoving', `1==1`);
    }
}