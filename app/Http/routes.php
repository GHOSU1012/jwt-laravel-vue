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
        'cors',
        'jwt.auth'
    ],
    'as'         => 'api::',
    'namespace'  => 'API\V1',
    'prefix'     => 'api/v1'
], function () {

    Route::group([
        'as'     => 'account.',
        'prefix' => 'account'
    ], function () {
        Route::get('', [
            'as'   => 'show',
            'uses' => 'AccountController@show'
        ]);
    });

    Route::group([
        'as'     => 'post.',
        'prefix' => 'posts'
    ], function () {
        Route::get('', [
            'as'   => 'index',
            'uses' => 'PostController@index'
        ]);
    });

});

Route::group([
    'middleware' => [
        'api',
        'cors'
    ],
    'as'         => 'api::',
    'namespace'  => 'API\V1',
    'prefix'     => 'api/v1'
], function () {

    Route::post('auth', [
        'as'   => 'auth.store',
        'uses' => 'AuthController@authenticate'
    ]);

});

Route::get('/', function () {
    return View::make('index');
});