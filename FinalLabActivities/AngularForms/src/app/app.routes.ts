import { Routes } from '@angular/router';
import { TemplateDemo } from './template-demo/template-demo';
import { ReactiveDemo } from './reactive-demo/reactive-demo';
import { CustomModule } from './custom-module/custom-module';

export const routes: Routes = [
  {path: 'template', component: TemplateDemo},
  {path: 'reactive', component: ReactiveDemo},
  {path: 'custom', component: CustomModule} 
];
