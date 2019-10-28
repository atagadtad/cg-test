<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return $users->toJson();
    }

    public function show($id)
    {
      $users = User::with(['tasks' => function ($query) {
        $query->where('name', 'Nick Reynolds');
      }])->find($id);

      return $users->toJson();
    }

}
