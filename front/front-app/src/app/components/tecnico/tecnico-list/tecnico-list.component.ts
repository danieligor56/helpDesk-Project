import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
 
  ELEMENT_DATA:tecnico[] = [
    {
      id:1,
      nome:'Daniel Igor',
      cpf:'111.111.111-11',
      email:'daniel@gmail.com',
      senha:'1234',
      perfis:['0'],
      dataCriacao:'15/08/2010'
          }
  
        ]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<tecnico>(this.ELEMENT_DATA);

    
    
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

