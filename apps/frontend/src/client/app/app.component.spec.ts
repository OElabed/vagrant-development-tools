// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { TestBed } from '@angular/core/testing';
// import { APP_BASE_HREF } from '@angular/common';

// import {
//   async
// } from '@angular/core/testing';
// import {
//   Route
// } from '@angular/router';
// import {
//   RouterTestingModule
// } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { DashboardComponent } from './pages/content/dashboard/dashboard.component';
// import { SidebarComponent } from './/layout/sidebar/sidebar.component';
// import { HeaderbarComponent } from './common/components//layout/headerbar/headerbar.component';

// export function main() {

//   describe('App component', () => {

//     const config: Route[] = [
//       { path: '', component: DashboardComponent },
//       // { path: 'about', component: AboutComponent }
//     ];
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [FormsModule, RouterTestingModule.withRoutes(config)],
//         declarations: [TestComponent, SidebarComponent,
//           HeaderbarComponent, AppComponent,
//           DashboardComponent],
//         providers: [
//           { provide: APP_BASE_HREF, useValue: '/' }
//         ]
//       });
//     });

//     it('should build without a problem',
//       async(() => {
//         TestBed
//           .compileComponents()
//           .then(() => {
//             const fixture = TestBed.createComponent(TestComponent);
//             const compiled = fixture.nativeElement;

//             expect(compiled).toBeTruthy();
//           });
//       }));
//   });
// }

// @Component({
//   selector: 'test-cmp',
//   template: '<fix-app></fix-app>'
// })

// class TestComponent {
// }



