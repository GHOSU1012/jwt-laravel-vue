<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Http\Requests\API\Auth\AuthenticateRequest;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Class AuthenticateController
 * @package App\Http\Controllers\API
 */
class AuthController extends Controller
{

    /**
     * @param AuthenticateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(AuthenticateRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if ( ! $token = JWTAuth::attempt($credentials)) {
                return response()->json([ 'error' => 'invalid_credentials' ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([ 'error' => 'could_not_create_token' ], 500);
        }

        return response()->json(compact('token'));
    }
}
