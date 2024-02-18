<?php

namespace App\Http\Controllers;

use App\Models\SiteTitles;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    public function getSiteTitles(){
        $headerTitle = SiteTitles::where('type','header_text')->select('type', 'value')->first();
        return response()->json([
            'headerTitle' => $headerTitle
        ]);
    }
}