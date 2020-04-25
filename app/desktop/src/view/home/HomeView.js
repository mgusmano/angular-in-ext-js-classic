Ext.define('AngularInExtJsClassic.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `Welcome to the Ext JS 7.2 Classic Desktop Template Application!
<br><br><br><br> 
This template has the standard architecture for a desktop application
<br><br>
- header and footer with custom buttons and text
<br><br>
- left-side collapsable menu with custom area on top of menu
<br><br>
- right-side (optional) detail view
<br><br>
- Single Page Application (spa) routing (note # in URL)
<br><br>
- Each View (menu) isolated into its own folder (under the 'view' folder) with
<br><br>
These files: View, View scss file, ViewController, ViewModel (called a ViewPackage)
<br><br><br><br>
Notice that the menu allows you to select from several views, 
<br><br>
- Home (the view you are currently on)
<br><br>
- Personnel
<br><br>
select the personnel menu item to see an example of a page with an Ext JS grid
<br><br><br><br>
To build a new ViewPackage, run:
<br><br><br>
 npm run createview employee
<br><br><br>
follow the instructions to add a menu item for this employeeview
<br><br><br>
Simple Theming:
<br><br>
go to 'app/desktop/sass/var.scss', uncomment one of the $base-color variables
<br><br>
be patient and give it a few seconds to rebuild... :)
<br><br>
more adventurous? go to 'app/shared/sass/var.scss', uncomment all lines


`
});