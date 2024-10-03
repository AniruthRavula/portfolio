import { Routes } from '@angular/router';
import { BlogSidebarComponent } from './Pages/blog-sidebar/blog-sidebar.component';
import { BlogSingleComponent } from './Pages/blog-single/blog-single.component';
import { LayoutComponent } from './layout/layout.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal'; // Import the service


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.route').then((mod) => mod.INDEX_ROUTES),
  },
  {
    path: 'blog-sidebar',
    component: BlogSidebarComponent,
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent,
  }
];
