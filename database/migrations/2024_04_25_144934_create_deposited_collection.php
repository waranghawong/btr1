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
        Schema::create('deposited_collection', function (Blueprint $table) {
            $table->id();
            $table->string('requestor_name', length: 100);
            $table->string('requestor_position', length: 100);
            $table->string('agency_name_requestor', length: 100);
            $table->string('office_address', length: 100);
            $table->string('sex_requestor', length: 100);
            $table->string('offician_email', length: 100);
            $table->string('designated_contact_person', length: 100);
            $table->string('type_of_request_cert', length: 100);
            $table->bigInteger('uacs_organization_code');
            $table->string('name_of_agency', length: 100);
            $table->string('bank_branch_deposit', length: 100);
            $table->string('name_of_national_collecting_officer', length: 100);
            $table->string('national_collecting_officer_code', length: 100);
            $table->date('date_period_covered');
            $table->integer('amount_figures');
            $table->string('provincial_office', length: 100);
            $table->string('depository_bank');
            $table->string('general_fund', length: 20);
            $table->string('special_accounts_in_general_fund1', length: 20);
            $table->string('special_accounts_in_general_fund_other', length: 50)->nullable();
            $table->string('trust_fund', length: 20);
            $table->string('file_dir');
            $table->enum('status', ['lack_of_documents','for_approval','completed', 'pending'])->default('pending');
            $table->timestamps('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deposited_collection');
    }
};
