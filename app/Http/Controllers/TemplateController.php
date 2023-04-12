<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TemplateController extends Controller
{
   public function index(){
    return view('FrontEnd.home');
   }
   
   public function room(){
      return view('RoomsPage.room');
   }

   public function about(){
      return view('Aboutpage.about1');
   }

   public function events(){
      return view('EventsPage.event1');
   }

   public function contact(){
      return view('ContactPage.contact1');
   }

   public function reservation(){
      return view('ReservationPage.reserve1');
   }
}  
