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

        factory(App\Post::class)->make([
            'title' => 'Test Post',
            'content' => 'Lorem ipsum',
            'user_id' => $user->id
        ])->save();
    }
}
