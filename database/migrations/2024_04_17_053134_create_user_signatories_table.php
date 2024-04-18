<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_signatories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(
                table: 'user_infos', indexName: 'user_signatories_user_id'
            )->onDelete('cascade');
            $table->string('signature_of_user');
            $table->string('fullname_of_user');
            $table->string('position_of_user');
            $table->date('date_filed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_signatories');
    }
};
