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
        Schema::create('signature_head_agencies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(
                table: 'user_infos', indexName: 'signature_head_agencies'
            )->onDelete('cascade');
            $table->string('full_name_of_head_of_agency');
            $table->string('designation_of_head_of_agency');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('signature_head_agencies');
    }
};
