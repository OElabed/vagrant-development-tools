import { Component, OnInit } from '@angular/core';

import { Package } from '../../../models/package';
import { State } from '../../../models/state';

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'fix-package-actions',
    templateUrl: 'actions.component.html',
    styleUrls: ['actions.component.css']
})
export class ActionsComponent {

    package: Package;
    isRuning: boolean = false;

    constructor() {
        this.package = new Package('GER5451848181818811', 'Package Test', State.RUNNING);
        this.isRuning = this.setIsRuning(this.package.state);
    }

    start() {
        console.log('start');
    }

    stop() {
        console.log('stop');
    }

    kill() {
        console.log('kill');
    }

    restart() {
        console.log('kill');
    }

    confirmRemove() {
        console.log('remove');
    }

    recreate() {
        console.log('recreate');
    }

    duplicate() {
        console.log('duplicate');
    }

    addPackage() {
        console.log('duplicate');
    }

    setIsRuning(state: State) {
        if (state === State.RUNNING) {
            return true;
        }
        return false;
    }
}
