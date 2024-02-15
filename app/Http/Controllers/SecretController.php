<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Secret;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class SecretController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function store(Request $request)
    {
        $request->validate([
            'secret' => 'required|max:200',
        ]);
        
        // dd(Auth::id());
         // Imprime la información del usuario autenticado
        // $user = Auth::user();
        // dd('User: '.$id);

        $secret = new Secret;
        $secret->user_id = Auth::id();
        $secret->secret = $request->secret;
        $secret->save();

        return response()->json(['message' => 'Secret created successfully']);
    }
}
