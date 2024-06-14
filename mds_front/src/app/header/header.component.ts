import { Component, Injectable, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

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

    @Output() emitterSignOut = new EventEmitter<boolean>;

    userSignedIn() {
        return environment.username !== undefined && environment.username !== '';
    }

    signIn() {
        this.router.navigateByUrl('/sign-in');
    }

    signOut() {
        this.emitterSignOut.emit(true);
        this.router.navigate(['/sign-in']);
    }

    redirectToProfile() {
        this.router.navigate(['/profile']);
    }

}