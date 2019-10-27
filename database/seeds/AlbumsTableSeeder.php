<?php

use Illuminate\Database\Seeder;

class AlbumsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('albums')->insert([
            'title' => 'Nandhaka Pieris',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape1.jpg',
            'date' => '2015-05-01',
            'featured' => true
        ]);

        DB::table('albums')->insert([
            'title' => 'New West Calgary',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape2.jpg',
            'date' => '2015-05-01',
            'featured' => false
        ]);

        DB::table('albums')->insert([
            'title' => 'Australian Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape3.jpg',
            'date' => '2015-02-02',
            'featured' => false
        ]);

        DB::table('albums')->insert([
            'title' => 'Halvergate Marsh',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape4.jpg',
            'date' => '2014-04-01',
            'featured' => false
        ]);

        DB::table('albums')->insert([
            'title' => 'Rikkis Landscape',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape5.jpg',
            'date' => '2010-09-01',
            'featured' => false
        ]);

        DB::table('albums')->insert([
            'title' => 'Kiddi Kristjans Iceland',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'img' => 'img/landscape6.jpg',
            'date' => '2015-07-21',
            'featured' => true
        ]);

    }
}
