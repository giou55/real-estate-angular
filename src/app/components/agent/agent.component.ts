import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-agent',
    templateUrl: './agent.component.html',
    styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
    agent: any;
    id: String;
    isAuthenticated = false;
    private userSub: Subscription;
    user: User = null;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user = user;
            }
        });
        this.id = this.route.snapshot.params['id'];
        this.http
            .get<any>(`${environment.baseUrl}/agents/${this.id}`)
            .subscribe((resData) => {
                this.agent = resData;
            });
    }
}
