import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefaComponent } from './listar-tarefa.component';

describe('ListarTarefaComponent', () => {
  let component: ListarTarefaComponent;
  let fixture: ComponentFixture<ListarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
