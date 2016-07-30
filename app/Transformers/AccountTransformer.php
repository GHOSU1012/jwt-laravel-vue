<?php

namespace App\Transformers;

class AccountTransformer extends Transformer
{

    public function transform($user)
    {
        return [
            'id'        => (int) $user->id,
            'email'     => $user->email,
            'name'      => $user->name,
            'mobile'    => $user->mobile_phone,
            'telephone' => $user->telephone,
            'birthday'  => $user->birthday ? $user->birthday->toDateString() : null,
            'gender'    => $user->sex,
            'bio'       => $user->bio,
            'avatar'    => $user->avatar
        ];
    }
}