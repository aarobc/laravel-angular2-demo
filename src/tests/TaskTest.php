<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TaskTest extends TestCase
{
    use DatabaseTransactions;
    use WithoutMiddleware;
    /**
     * A basic test example.
     *
     * @return void
     */
    private $url = '/tasks';
    public function testGet()
    {
        $this->json('GET', $this->url)
             ->seeJson();
    }

    public function testPost()
    {
        $task = factory('App\Models\Task')->make();
        $this->json('POST', $this->url, $task->toArray())
            ->seeInDatabase('tasks',
                $task->toArray()
            );
             // ->seeJson($post->toArray());
    }

    public function testDelete()
    {
        $task = factory('App\Models\Task')->create();
        $this->json('DELETE', $this->url.'/'.$task->id)
            ->notSeeInDatabase('tasks',
                $task->toArray()
            );
    }
}
