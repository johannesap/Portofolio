<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ContactController;

Route::get('/portfolio', [PortfolioController::class, 'getData']);
Route::post('/contact', [ContactController::class, 'store']);
