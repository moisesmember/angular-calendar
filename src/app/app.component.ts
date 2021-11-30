import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel  } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';
import {extend, loadCldr, L10n} from '@syncfusion/ej2-base';

import * as  numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as  gregorian from 'cldr-data/main/pt/ca-gregorian.json';
import * as  numbers from 'cldr-data/main/pt/numbers.json';
import * as  timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  'pt': {
    schedule: {
      'day': 'dia',
      'week': 'semana',
      'workWeek': 'Semana de trabalho',
      'month': 'Mês',
      'agenda': 'Agenda',
      'weekAgenda': 'Agenda de da semana',
      'workWeekAgenda': 'Agenda da Semana de Trabalho',
      'monthAgenda': 'Agenda do mês',
      'today': 'Hoje',
      'noEvents': 'Sem eventos',
      'allDay': 'Todo o dia',
      'start': 'Início',
      'end': 'Fim',
      'more': 'Mais',
      'close': 'Fechar',
      'cancel': 'Cancelar',
      'noTitle': '(Sem título)',
      'delete': 'Apagar',
      'deleteEvent': 'Excluir evento',
      'selectedItems': 'Ítens selecionados',
      'deleteSeries': 'Apagar série',
      'edit': 'Editar',
      'editSeries': 'Editar série',
      'editEvent': 'Editar evento',
      'createEvent': 'Criar',
      'subject': 'Assunto',
      'addTitle': 'Adicionar título',
      'moreDetails': 'Mais detalles',
      'save': 'Salvar',
      'editContent': 'Deseja editar apenas este evento ou toda a série?',
      'deleteRecurrenceContent': 'Deseja eliminar só este evento ou toda a série?',
      'deleteContent': 'Tem certeza que deseja apagar este evento?',
      'newEvent': 'Novo evento',
      'title': 'Título',
      'location': 'Localização',
      'description': 'Descrição',
      'timezone': 'Time Zone',
      'startTimezone': 'Hora inicial',
      'endTimezone': 'Hora final',
      'repeat': 'Repetir',
      'saveButton': 'Salvar',
      'cancelButton': 'Cancelar',
      'deleteButton': 'Apagar',
      'recurrence': 'Recorrência',
      'editRecurrence': 'Editar recorrência',
      'repeats': 'Repete',
      'alert': 'Alerta',
      'startEndError': 'A data de finalização selecionada ocorre antes da da de início.',
      'invalidDateError': 'O valor da data é invalida.',
      'ok': 'Confirmar',
      'occurrence': 'Výskyt',
      'series': 'Série',
      'previous': 'Anterior',
      'next': 'Próximo',
      'timelineDay': 'Alocação de Hoje',
      'timelineWeek': 'Alocação Semanal',
      'timelineWorkWeek': 'Alocação do trabalho semanal',
      'timelineMonth': 'Alocação mensal'
    },
    recurrenceeditor: {
      'none': 'Nenhum',
      'daily': 'Diário',
      'weekly': 'Semanal',
      'monthly': 'Mensal',
      'month': 'Mês',
      'yearly': 'Anual',
      'never': 'Nunca',
      'until': 'Até',
      'count': 'Contar',
      'first': 'Primeiro',
      'second': 'Segundo',
      'third': 'Tercero',
      'fourth': 'Quarto',
      'last': 'Último',
      'repeat': 'Repetir',
      'repeatEvery': 'Repita cada',
      'on': 'Repita en',
      'end': 'Fim',
      'onDay': 'Dia',
      'days': 'Dias)',
      'weeks': 'Semanas)',
      'months': 'Meses)',
      'years': 'Anos)',
      'every': 'cada',
      'summaryTimes': 'vecês)',
      'summaryOn': 'em',
      'summaryUntil': 'até',
      'summaryRepeat': 'Repita',
      'summaryDay': 'dias)',
      'summaryWeek': 'semanas)',
      'summaryMonth': 'meses)',
      'summaryYear': 'anos)',
      'monthWeek': 'Měsíční týden',
      'monthPosition': 'Pozice měsíce',
      'monthExpander': 'Expander měsíce',
      'yearExpander': 'Rok Expander',
      'repeatInterval': 'Interval opakování'
    },
    calendar: {
      'today': 'Hoje'
    }
  }
});

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  encapsulation: ViewEncapsulation.None,
  /*template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"><e-views> <e-view option="Week" startHour="07:00" endHour="15:00"></e-view>
  <e-view option="WorkWeek" startHour="10:00" endHour="18:00"></e-view> <e-view option="Month" [showWeekend]="showWeekend"></e-view></e-views></ejs-schedule>` */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'app-calendar';
  public selectedDate: Date = new Date(2018, 1, 15);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: defaultData };
}
