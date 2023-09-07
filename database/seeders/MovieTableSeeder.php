<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movie = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=vrJU2BwdJRY&t=15s',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/8/81/ShawshankRedemptionMoviePoster.jpg',
                'rating' => 4.3,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=vrJU2BwdJRY&t=15s',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
                'rating' => 4.6,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=vrJU2BwdJRY&t=15s',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/thumb/0/03/Godfather_part_ii.jpg/220px-Godfather_part_ii.jpg',
                'rating' => 4.4,
            ],
        ];
        Movie::insert($movie);
    }
}
