import { Component } from '@angular/core';
import { TableEntityComponent } from '../components/table-entity';
import { SidebarComponent } from '../components/sidebar';

@Component({
  selector: 'app-dashboard-table',
  standalone: true,
  imports: [SidebarComponent, TableEntityComponent],
  templateUrl: './dashboard-table.html',
  styleUrls: ['./dashboard-table.css']
})
export class DashboardTableComponent {
  // dashboard.component.ts ou layout.component.ts
isCollapsed = false;

toggleSidebar() {
  this.isCollapsed = !this.isCollapsed;
}

}
