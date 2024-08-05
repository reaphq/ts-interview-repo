import { Request, Response, Router } from 'express';
const router = Router();


// Route to get all tasks
router.get('/', (req: Request, res: Response) => {
    //TODO: if tasks is empty, fetch tasks from the API/URL
    //TODO: return the tasks array
});

// Route to complete a task by ID
router.post('/:id/complete', (req: Request, res: Response) => {
    // TODO: Replace this code with the logic to complete a task by ID in memory
});

export default router;