<?php

namespace App\Http\Controllers\API;

use Auth;

use App\Http\Requests;
use App\Http\Controllers\Controller;

/**
 * Class AccountController
 * @package App\Http\Controllers\API
 */
class AccountController extends Controller
{

    /**
     * @return \App\User|null
     */
    public function show()
    {
        $user = Auth::user();

        return $user;
    }
}
