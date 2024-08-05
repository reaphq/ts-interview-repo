interface OnboardingTask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    data: Record<string, any>;
}