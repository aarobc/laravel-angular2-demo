<?php

Route::get('/', function () {
    return view('tasks');
});

Route::resource('tasks', 'TaskController', ['except' => ['create', 'edit']]);
