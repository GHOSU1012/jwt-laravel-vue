<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\API\Controller;
use App\Http\Requests\API\Post\StoreRequest;
use App\Post;
use App\Transformers\PostTransformer;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class PostController extends Controller
{

    protected $transformer;


    public function __construct(PostTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $posts = Post::paginate($this->getPagination());

        return $this->respondWithPagination($posts, [
            'data' => $this->transformer->transformCollection($posts->all())
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $user = Auth::user();

        $post = new Post($request->all());
        $post->user()->associate($user);
        $post->save();

        return $this->respondCreated('The post has been created');
    }


    /**
     * Display the specified resource.
     *
     * @param Post $post
     *
     * @return \Illuminate\Http\JsonResponse
     * @internal param int $id
     *
     */
    public function show(Post $post)
    {
        return $this->respond($this->transformer->transform($post));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     *
     * @return \Illuminate\Http\Response
     *
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return $this->respondWithSuccess('The post has been deleted');
    }
}
