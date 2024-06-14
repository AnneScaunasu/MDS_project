import { Component, Input, Injectable, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    standalone: true,
    imports: [CommonModule],
    styleUrls: ["./header.component.css"] 
})

export class HeaderComponent {

    constructor(private router: Router) {}

    @Input() username!: string;
    @Input() password!: string;

    @Output() emitterSignOut = new EventEmitter<boolean>;

    userSignedIn() {
        return this.username !== undefined && this.username !== '';
    }

    signIn() {
        this.router.navigateByUrl('/sign-in');
    }

    signOut() {
        this.emitterSignOut.emit(true);
    }

}