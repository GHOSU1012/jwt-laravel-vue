<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = App\User::first();

        factory(App\Post::class, 50)->make([
            'user_id' => $user->id
        ])->each(function ($post) use ($user) {
            $post->save();
        });
    }
}
