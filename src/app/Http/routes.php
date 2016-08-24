<?php

Route::get('/', function () {
    return view('tasks');
});

Route::get('/test', function () {
    return view('test');
});

Route::resource('tasks', 'TaskController', ['except' => ['create', 'edit']]);
