
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'add1'
})
export class add1Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('append', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ListDataService1, 'append', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                'Create'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('append', 'transit', `1==1`);
    }
}