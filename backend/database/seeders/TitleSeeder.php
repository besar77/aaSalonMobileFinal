<?php

namespace Database\Seeders;

use App\Models\SiteTitles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteTitles::create([
            'type' => 'header_text',
            'value' => 'Elevate Your Style At A&A Salon'
        ]);
    }
}