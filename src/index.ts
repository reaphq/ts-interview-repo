import express from 'express';
import { json } from 'body-parser';
import onboardingTasksRouter from './features/onboarding-tasks/onboardingTasks.route';
const app = express();
app.use(json());
app.use('/api/onboarding-tasks', onboardingTasksRouter);
const PORT = process.env.PORT || 3000;

const listRoutes = (app: express.Express): void => {
    app._router.stack.forEach((middleware: any) => {
        if (middleware.route) { // Route middleware
            console.log(`${Object.keys(middleware.route.methods).join(', ').toUpperCase()} ${middleware.route.path}`);
        } else if (middleware.name === 'router') { // Router middleware
            middleware.handle.stack.forEach((handler: any) => {
                if (handler.route) {
                    console.log(`${Object.keys(handler.route.methods).join(', ').toUpperCase()} /api/onboarding-tasks${handler.route.path}`);
                }
            });
        }
    });
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    listRoutes(app);
});