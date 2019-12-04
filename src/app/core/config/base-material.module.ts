import {NgModule} from "@angular/core"
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from "@angular/material/list"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [],
    exports: [
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ]
})
    


export class BaseMaterialModule{}