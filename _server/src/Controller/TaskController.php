<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Task;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Form\TaskCreatorType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    #[Route('/task', name: 'app_task')]
    public function getAllTasks(ManagerRegistry $doctrine)
    {
        $rep = $doctrine->getRepository(Task::class);
        
        return new JsonResponse($rep->findAll());
    }


    // #[Route('/task', name: 'app_task')]
    // public function index(): Response
    // {
    //     return $this->render('task/index.html.twig', [
    //         'controller_name' => 'TaskController',
    //     ]);
    // }
}
