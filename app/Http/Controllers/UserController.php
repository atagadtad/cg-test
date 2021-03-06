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

    public static function show($id)
    {
        $user = User::find($id);

        return $user;
    }

}
