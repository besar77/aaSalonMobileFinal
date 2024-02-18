<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;

class AuthController extends Controller
{
    public function getSMS(){

        $account_sid = getenv('TWILIO_SID');
        $auth_token = getenv('TWILIO_TOKEN');
        $twilio_number = getenv('TWILIO_PHONE');
        // $twilio_number = "+15017122661";

        $client = new Client($account_sid, $auth_token);
       $client->messages->create(
            // Where to send a text message (your cell phone?)
            '+38345884625',
            array(
                'from' => $twilio_number,
                'body' => 'Test message'
            )
        );

        dd('message send successfully');
    }
}