<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Secret;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class SecretController extends Controller
{

    public function index()
    {
        $secrets = Secret::where('user_id', Auth::id())->get();
        return response()->json($secrets);
    }   

    public function store(Request $request)
    {
        $request->validate([
            'secret' => 'required|max:200',
        ]);
        
        $secret = new Secret;
        $secret->user_id = Auth::id();
        $secret->secret = $request->secret;
        $secret->save();

        return response()->json(['message' => 'Secret created successfully']);
    }

    public function destroy($id)
    {
        $secret = Secret::where('user_id', Auth::id())->where('id', $id)->first();

        if ($secret) {
            $secret->delete();
            return response()->json(['message' => 'Secret deleted successfully']);
        } else {
            return response()->json(['message' => 'Secret not found'], 404);
        }
    }
}
