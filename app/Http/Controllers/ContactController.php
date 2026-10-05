<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\ContactMessage;

class ContactController extends Controller
{
    /**
     * Store an incoming contact message from the portfolio frontend.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|min:5|max:5000',
        ]);

        $contact = ContactMessage::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Terima kasih, pesan Anda telah berhasil dikirim dan tersimpan di database backend!',
            'data' => [
                'id' => $contact->id,
                'name' => $contact->name,
                'created_at' => $contact->created_at->format('d M Y, H:i')
            ]
        ], 201);
    }
}
