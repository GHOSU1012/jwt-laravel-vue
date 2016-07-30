<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\API\Controller;
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
                return $this->respondUnauthorized('Invalid credentials');
            }
        } catch (JWTException $e) {
            return $this->respondInternalError('Could not create token');
        }

        return response()->json(compact('token'));
    }
}
