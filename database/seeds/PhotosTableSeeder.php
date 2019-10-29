<?php

use Illuminate\Database\Seeder;

class PhotosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'Nandhaka Pieris',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape1.jpeg',
            'date' => '2015-05-01',
            'featured' => true
        ]);

        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'New West Calgary',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape2.jpeg',
            'date' => '2015-05-01',
            'featured' => false
        ]);

        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'Australian Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape3.jpeg',
            'date' => '2015-02-02',
            'featured' => false
        ]);

        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'Halvergate Marsh',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape4.jpeg',
            'date' => '2014-04-01',
            'featured' => false
        ]);

        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'Rikkis Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape5.jpeg',
            'date' => '2010-09-01',
            'featured' => false
        ]);

        DB::table('photos')->insert([
            'user_id' => 1,
            'title' => 'Kiddi Kristjans Iceland',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'http://localhost:8000/storage/img/landscape6.jpeg',
            'date' => '2015-07-21',
            'featured' => true
        ]);
    }
}
