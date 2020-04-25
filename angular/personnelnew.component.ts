import {Component} from '@angular/core';
const Ext = window['Ext'];

@Component({
  selector: 'personnelnew-root',
  template: `
  <ExtGrid
    extname="grid"
    cls="personnelview"
    (select)="this.onItemSelected($event)"
    [store]='{
        "xtype": "store",
        "data": [
          { "name": "Jean Luc",   "email": "jeanluc.picard@enterprise.com", "phone": "555-111-1111" },
          { "name": "ModernWorf", "email": "worf.moghsson@enterprise.com",  "phone": "555-222-2222" },
          { "name": "Deanna",     "email": "deanna.troi@enterprise.com",    "phone": "555-333-3333" },
          { "name": "Data",       "email": "mr.data@enterprise.com",        "phone": "555-444-4444" }
        ]
    }'
    [columns]='[
      {
        "text":"Name",
        "dataIndex":"name",
        "width": 100,
        "cell": {"userCls": "bold"}
      },
      {"text": "Email Angular", "dataIndex": "email", "width": 230},
      {
        "text": "Phone",
        "dataIndex": "phone",
        "width": 150
      }
    ]'
  >
  </ExtGrid>
  `,
  styles: []
})
export class PersonnelnewComponent {

  onItemSelected({sender, record}) {
    Ext.Msg.alert('data', JSON.stringify(record.data));
  }
  
}