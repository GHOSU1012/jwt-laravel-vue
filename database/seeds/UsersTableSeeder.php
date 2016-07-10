<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->make([
            'email' => 'test@test.com',
            'password' => bcrypt('Test@123')
        ])->save();
    }
}
