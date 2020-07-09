
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { CommandService as CommandService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'changePage1'
})
export class changePage1Handler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCommandName}', 
                '{COMMAND~/params/loadCommandFrameId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

    }
}