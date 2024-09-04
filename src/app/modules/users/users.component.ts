import { Component, ViewEncapsulation } from '@angular/core';
import { TableModule } from 'primeng/table';
import { user } from '../../mock-api/common/user/data';

@Component({
    selector     : 'users',
    standalone   : true,
    templateUrl  : './users.component.html',
    encapsulation: ViewEncapsulation.None,
    imports : [TableModule],
})
export class UsersComponent
{
    users = [
        {
            "firstname": "jawad",
            "lastname" : "ezzahraoui",
            "profile": "web developer",
            "department": "WL UK" 
        },
        {
            "firstname": "amine",
            "lastname" : "ezzahraoui",
            "profile": "web developer",
            "department": "WL UK" 
        },

    ]
    /**
     * Constructor
     */
    constructor()
    {
    }
}
