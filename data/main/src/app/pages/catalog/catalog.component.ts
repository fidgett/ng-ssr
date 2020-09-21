import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CropItem } from 'src/app/interfaces/crops';


@UntilDestroy()
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public cropList: CropItem[];

  constructor(
    private catalogService: CatalogService,
  ) { }

  public ngOnInit(): void {
    this.catalogService.getItemList()
      .pipe(untilDestroyed(this))
      .subscribe(item => {
        this.cropList = item.filter(x => x.parentId === null);
      });
  }
}
