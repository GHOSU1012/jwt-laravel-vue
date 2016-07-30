<?php

namespace App\Transformers;

abstract class Transformer
{

    /**
     * Transformer for the models
     *
     * @param  \Illuminate\Database\Eloquent\Model $item The model from the database
     *
     * @return array The valid output, displayed in the API
     */
    public abstract function transform($item);


    /**
     * Transformer for a collection of models
     *
     * @param array $items The collection of items
     *
     * @return array The valid output, display in the API
     */
    public function transformCollection(array $items)
    {
        return array_map([ $this, 'transform' ], $items);
    }
}