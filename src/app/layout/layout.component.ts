import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from '../Pages/components/about/about.component';
import { ServicesComponent } from '../Pages/components/services/services.component';
import { EducationComponent } from '../Pages/components/education/education.component';
import { ModalComponent } from '../Pages/components/modal/modal.component';
import { WorkComponent } from '../Pages/components/work/work.component';
import { ClientComponent } from '../Pages/components/client/client.component';
import { BlogComponent } from '../Pages/components/blog/blog.component';
import { ContactUsComponent } from '../Pages/components/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal'; // Import the service


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    EducationComponent,
    ModalComponent,
    WorkComponent,
    ClientComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  providers: [MdbModalService], // Add the service here
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
