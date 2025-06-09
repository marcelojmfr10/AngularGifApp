import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

  gifService = inject(GifService);

  // convertir observable en señal
  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ));

  // query = inject(ActivatedRoute).params.subscribe((params) => {
  //   console.log(params['query']);
  // }); // ruta activa, sino colocamos .params que lo convierte en un observable

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()))

}
