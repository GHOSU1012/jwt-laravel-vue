<?php

namespace App\Http\Requests\API;

use App\Traits\Restable;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class Request
 * @package App\Http\Requests\API
 */
class Request extends FormRequest
{

    use Restable;


    /**
     * Get the response for a forbidden operation.
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response
     */
    public function forbiddenResponse()
    {
        return $this->respondForbidden();
    }


    /**
     * Get the proper failed validation response for the request.
     *
     * @param  array $errors
     *
     * @return \Illuminate\Http\JsonResponse The JSON-response
     */
    public function response(array $errors)
    {
        return $this->respondUnprocessableEntity($errors);
    }
}