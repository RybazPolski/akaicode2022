<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Task;
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

        return new Response(json_encode($rep->findAll()));
    }

    #[Route('task/new', name: 'app_task_new')]
    public function addTask()
    {
        $task = new Task();
        $form = $this->createForm(TaskCreatorType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager->persist($task);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $this->redirectToRoute('app_task');
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
    // #[Route('/task', name: 'app_task')]
    // public function index(): Response
    // {
    //     return $this->render('task/index.html.twig', [
    //         'controller_name' => 'TaskController',
    //     ]);
    // }
}
