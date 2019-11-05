import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IPlayer, Player } from 'app/shared/model/player.model';
import { PlayerService } from './player.service';
import { IPerson } from 'app/shared/model/person.model';
import { PersonService } from 'app/entities/person/person.service';
import { IRoster } from 'app/shared/model/roster.model';
import { RosterService } from 'app/entities/roster/roster.service';

@Component({
  selector: 'jhi-player-update',
  templateUrl: './player-update.component.html'
})
export class PlayerUpdateComponent implements OnInit {
  isSaving: boolean;

  people: IPerson[];

  rosters: IRoster[];

  editForm = this.fb.group({
    id: [],
    profile: [],
    captainFlag: [],
    personId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected playerService: PlayerService,
    protected personService: PersonService,
    protected rosterService: RosterService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ player }) => {
      this.updateForm(player);
    });
    this.personService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IPerson[]>) => mayBeOk.ok),
        map((response: HttpResponse<IPerson[]>) => response.body)
      )
      .subscribe((res: IPerson[]) => (this.people = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.rosterService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IRoster[]>) => mayBeOk.ok),
        map((response: HttpResponse<IRoster[]>) => response.body)
      )
      .subscribe((res: IRoster[]) => (this.rosters = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(player: IPlayer) {
    this.editForm.patchValue({
      id: player.id,
      profile: player.profile,
      captainFlag: player.captainFlag,
      personId: player.personId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const player = this.createFromForm();
    if (player.id !== undefined) {
      this.subscribeToSaveResponse(this.playerService.update(player));
    } else {
      this.subscribeToSaveResponse(this.playerService.create(player));
    }
  }

  private createFromForm(): IPlayer {
    return {
      ...new Player(),
      id: this.editForm.get(['id']).value,
      profile: this.editForm.get(['profile']).value,
      captainFlag: this.editForm.get(['captainFlag']).value,
      personId: this.editForm.get(['personId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlayer>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackPersonById(index: number, item: IPerson) {
    return item.id;
  }

  trackRosterById(index: number, item: IRoster) {
    return item.id;
  }

  getSelected(selectedVals: any[], option: any) {
    if (selectedVals) {
      for (let i = 0; i < selectedVals.length; i++) {
        if (option.id === selectedVals[i].id) {
          return selectedVals[i];
        }
      }
    }
    return option;
  }
}
