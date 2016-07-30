<?php
/**
 * Created by PhpStorm.
 * User: petervanmeijgaard
 * Date: 30/07/16
 * Time: 12:49
 */

namespace App\Transformers;

class PostTransformer extends Transformer
{

    /**
     * Transformer for the models
     *
     * @param  \Illuminate\Database\Eloquent\Model $post The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public function transform($post)
    {
        return [
            'id'      => (int) $post->id,
            'title'   => $post->title,
            'content' => $post->content
        ];
    }
}