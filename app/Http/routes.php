<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group([
    'middleware' => [
        'api',
        'cors'
    ],
    'as'         => 'api::',
    'namespace'  => 'API',
    'prefix'     => 'api'
], function () {

    Route::post('auth', [
        'as'   => 'auth.store',
        'uses' => 'AuthController@authenticate'
    ]);

    Route::get('account', [
        'middleware' => [ 'jwt.auth' ],
        'as'         => 'account.show',
        'uses'       => 'AccountController@show'
    ]);
});

Route::get('/', function () {
    return View::make('welcome');
});