<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {

//     $user = App\User::find(1);


//     $users = DB::table('users')
//     ->join('photos', 'photos.user_id', '=', 'users.id')
//     ->select('users.*', 'photos.*')
//     ->get();
//     return $user;
// });

Route::view('/{path?}', 'app');
