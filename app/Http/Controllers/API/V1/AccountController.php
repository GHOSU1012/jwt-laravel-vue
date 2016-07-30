<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\API\Controller;
use App\Transformers\AccountTransformer;
use Auth;

/**
 * Class AccountController
 * @package App\Http\Controllers\API
 */
class AccountController extends Controller
{

    /**
     * @var AccountTransformer
     */
    protected $transformer;


    /**
     * AccountController constructor.
     *
     * @param AccountTransformer $transformer
     */
    public function __construct(AccountTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        $user = Auth::user();

        return $this->respond($this->transformer->transform($user));
    }
}
