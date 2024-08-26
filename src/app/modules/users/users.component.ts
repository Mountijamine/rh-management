import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'users',
    standalone   : true,
    templateUrl  : './users.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class UsersComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
