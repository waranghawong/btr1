<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\SuperAdmin\SuperAdminController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\SuperAdmin\DepositedCollectionController;
use App\Http\Controllers\SuperAdmin\MdsCheckController;
use App\Http\Controllers\SuperAdmin\ChangeofDepositoryController;
use App\Http\Controllers\SuperAdmin\OpenBankAccountController;
use App\Http\Controllers\SuperAdmin\ReportCollectionController;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::middleware(['auth', 'role:superadmin'])->group(function () {
    Route::get('superadmin/dashboard', [SuperAdminController::class, 'index'])->name('superadmin.dashboard');
    Route::get('superadmin/users', [UsersController::class, 'index'])->name('superadmin.users');
    Route::get('superadmin/deposited_collections', [DepositedCollectionController::class, 'index'])->name('superadmin.deposited_collections');
    Route::get('superadmin/mds_check', [MdsCheckController::class, 'index'])->name('superadmin.mds_check');
    Route::get('superadmin/change_of_depository', [ChangeofDepositoryController::class, 'index'])->name('superadmin.change_of_depository');
    Route::get('superadmin/opening_of_bank_account', [OpenBankAccountController::class, 'index'])->name('superadmin.opening_of_bank_account');
    Route::get('superadmin/report_of_collections_and_deposits', [ReportCollectionController::class, 'index'])->name('superadmin.report_of_collections_and_deposits');
    
    Route::post('superadmin/users', [UsersController::class, 'store'])->name('users.store');
    Route::get('superadmin/users/{userprofile}', [UsersController::class, 'edit'])->name('users.edit');
    Route::patch('superadmin/users/{id}', [UsersController::class, 'update'])->name('users.update');
    Route::patch('superadmin/activate_user/{id}', [UsersController::class, 'activate_user'])->name('activate_user');
    Route::patch('superadmin/deactivate_user/{id}', [UsersController::class, 'deactivate_user'])->name('deactivate_user');
    Route::delete('superadmin/delete/{id}', [UsersController::class, 'destroy'])->name('users.destroy');
});

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/users', [UsersController::class, 'index'])->name('users');
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('user/dashboard', [UserController::class, 'index'])->name('user.dashboard');
});


