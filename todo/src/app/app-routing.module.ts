import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'contact', 
  loadChildren: './contact/contact.module#ContactPageModule' },

  { path: 'user',
   loadChildren: './user/user.module#UserPageModule' },
  { path: 'todo',
   loadChildren: './todo/todo.module#TodoPageModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderPageModule' },
  { path: 'newlist', loadChildren: './new-list/new-list.module#NewListPageModule' },
  { path: 'reminder-set', loadChildren: './reminder-set/reminder-set.module#ReminderSetPageModule' },
  { path: 'myday', loadChildren: './myday/myday.module#MydayPageModule' },
  { path: 'addtask', loadChildren: './addtask/addtask.module#AddtaskPageModule' },
  { path: 'sort', loadChildren: './sort/sort.module#SortPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'important', loadChildren: './important/important.module#ImportantPageModule' },
  { path: 'basicdetails', loadChildren: './basicdetails/basicdetails.module#BasicdetailsPageModule' },
  { path: 'googlemap', loadChildren: './googlemap/googlemap.module#GooglemapPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
