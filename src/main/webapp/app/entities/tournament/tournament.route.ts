import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tournament } from 'app/shared/model/tournament.model';
import { TournamentService } from './tournament.service';
import { TournamentComponent } from './tournament.component';
import { TournamentDetailComponent } from './tournament-detail.component';
import { TournamentUpdateComponent } from './tournament-update.component';
import { TournamentDeletePopupComponent } from './tournament-delete-dialog.component';
import { ITournament } from 'app/shared/model/tournament.model';

@Injectable({ providedIn: 'root' })
export class TournamentResolve implements Resolve<ITournament> {
  constructor(private service: TournamentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITournament> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((tournament: HttpResponse<Tournament>) => tournament.body));
    }
    return of(new Tournament());
  }
}

export const tournamentRoute: Routes = [
  {
    path: '',
    component: TournamentComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'psaRankingApp.tournament.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: TournamentDetailComponent,
    resolve: {
      tournament: TournamentResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'psaRankingApp.tournament.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: TournamentUpdateComponent,
    resolve: {
      tournament: TournamentResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'psaRankingApp.tournament.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: TournamentUpdateComponent,
    resolve: {
      tournament: TournamentResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'psaRankingApp.tournament.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const tournamentPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: TournamentDeletePopupComponent,
    resolve: {
      tournament: TournamentResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'psaRankingApp.tournament.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];